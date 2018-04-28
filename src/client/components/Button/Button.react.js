import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Button.less';
import { SVGIcon } from '@opuscapita/react-svg';

export default
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  getPaddingCompensationClass(contentPosition, svg, label, children) {
    if (svg && label && contentPosition === 'before') {
      return 'oc-button--content-before';
    }
    if (svg && label && contentPosition === 'after') {
      return 'oc-button--content-after';
    }
    if (svg && !label && !children) {
      return 'oc-button--content-empty';
    }
    return '';
  }

  render() {
    let {
      isActive,
      altContent,
      className,
      children,
      disabled,
      disablePaddingCompensation,
      label,
      contentPosition,
      paper,
      tabIndex,
      svg,
      ...restProps
    } = this.props;

    let paddingCompensationClass = (svg && !disablePaddingCompensation) ?
      this.getPaddingCompensationClass(contentPosition, svg, label, children) :
      '';

    let icon = svg ? (
      <SVGIcon svg={svg} />
    ) : null;

    let buttonChildren = (children || icon) ? (
      <div
        className={`oc-button__children`}
        style={{ visibility: altContent ? 'hidden' : 'initial' }}
      >
        {icon}
        {children}
      </div>
    ) : null;

    let buttonDelimiter = (buttonChildren && label) ? (
      <div className={`oc-button__delimiter`} />
    ) : null;

    // eslint-disable-next-line max-len
    let buttonClassName = `${className} oc-button ${disabled ? 'oc-button--disabled' : ''} ${paper ? 'oc-button--paper' : '' } ${isActive ? 'oc-button--active' : ''}`;

    return (
      <button
        { ...restProps }
        className={`${buttonClassName} ${paddingCompensationClass}`}
        tabIndex={disabled ? '-1' : tabIndex}
        type="button"
      >
        <div
          className={`oc-button__content`}
          style={{ flexDirection: contentPosition === 'before' ? 'row-reverse' : 'row' }}
        >
          <div
            className={`oc-button__label`}
            style={{
              textAlign: contentPosition === 'before' ? 'right' : 'left',
              visibility: altContent ? 'hidden' : 'initial'
            }}
          >
            {label ? label : <div style={{ width: '0' }}>&nbsp;</div>}
          </div>
          {buttonDelimiter}
          {buttonChildren}
        </div>
        {(altContent && <div className={`oc-button__alt-content`}>{altContent}</div>) || null}
      </button>
    );
  }
}

Button.propTypes = {
  isActive: PropTypes.bool,
  altContent: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disablePaddingCompensation: PropTypes.bool,
  label: PropTypes.string,
  contentPosition: PropTypes.oneOf(['before', 'after']),
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  paper: PropTypes.bool,
  svg: PropTypes.string
};

Button.defaultProps = {
  contentPosition: 'after',
  className: '',
  disablePaddingCompensation: false,
  paper: false,
  style: {},
  tabIndex: 0
};
