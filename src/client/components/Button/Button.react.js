import React, { Component, PropTypes } from 'react';
import './Button.less';
import SVGIcon from 'jcatalog-react-ui-svg/lib/SVGIcon';

export default
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  getPaddingCompensationRule(contentPosition, svg, label, children) {
    if(svg && label && contentPosition === 'before') {
      return { paddingLeft: '8px' };
    }
    if(svg && label && contentPosition === 'after') {
      return { paddingRight: '8px' };
    }
    if(svg && !label && !children) {
      return { paddingLeft: '8px', paddingRight: '8px' }
    }
    return {};
  }

  render() {
    let {
      altContent,
      bgColor,
      color,
      className,
      children,
      disabled,
      disablePaddingCompensation,
      label,
      contentPosition,
      paper,
      style,
      tabIndex,
      svg,
      svgSize,
      ...restProps
    } = this.props;

    let paddingCompensationRule = (svg && !disablePaddingCompensation) ?
      this.getPaddingCompensationRule(contentPosition, svg, label, children) :
      {};

    let buttonStyle = {
      backgroundColor: bgColor,
      color: color,
      ...paddingCompensationRule,
      ...style
    };

    let icon = svg ? (
      <SVGIcon svg={svg} color={color} size={svgSize} />
    ) : null;

    let buttonChildren = (children || icon) ? (
      <div
        className="button__children"
        style={{ visibility: altContent ? 'hidden' : 'initial' }}
      >
        {icon}
        {children}
      </div>
    ) : null;

    let buttonDelimiter = (buttonChildren && label) ? (
      <div className="button__delimiter"></div>
    ) : null;

    return (
      <button
        { ...restProps }
        className={`${className} button ${disabled ? 'button--disabled' : ''} ${paper ? 'button--paper' : '' }`}
        style={buttonStyle}
        tabIndex={disabled ? '-1' : tabIndex}
      >
        <div
          className="button__content"
          style={{ flexDirection: contentPosition === 'before' ? 'row-reverse' : 'row' }}
        >
          <div
            className="button__label"
            style={{
              textAlign: contentPosition === 'before' ? 'right' : 'left',
              visibility: altContent ? 'hidden' : 'initial'
            }}
          >
            {label ? label : <div style={{ width: '0' }}>&nbsp;</div>}
          </div>
          {altContent || null}
          {buttonDelimiter}
          {buttonChildren}
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  altContent: PropTypes.node,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disablePaddingCompensation: PropTypes.bool,
  label: PropTypes.string,
  contentPosition: PropTypes.oneOf(['before', 'after']),
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  paper: PropTypes.bool,
  svg: PropTypes.string,
  svgSize: PropTypes.string
};
Button.defaultProps = {
  contentPosition: 'after',
  className: '',
  disablePaddingCompensation: false,
  paper: false,
  svgSize: '1.4em',
  style: {},
  tabIndex: 0
};
