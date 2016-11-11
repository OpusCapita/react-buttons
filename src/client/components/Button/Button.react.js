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
      bgColor,
      color,
      className,
      children,
      disabled,
      disablePaddingCompensation,
      label,
      contentPosition,
      style,
      tabIndex,
      svg,
      svgSize
    } = this.props;

    let paddingCompensationRule = (svg && !disablePaddingCompensation) ?
      this.getPaddingCompensationRule(contentPosition, svg, label, children) :
      {};

    let buttonStyle = {
      backgroundColor: bgColor,
      color: color,
      flexDirection: contentPosition === 'before' ? 'row-reverse' : 'row',
      ...paddingCompensationRule,
      ...style
    };

    let icon = svg ? (
      <SVGIcon svg={svg} color={color} size={svgSize} />
    ) : null;

    let buttonChildren = (children || icon) ? (
      <div className="button__children">
        {icon}
        {children}
      </div>
    ) : null;

    let buttonDelimiter = (buttonChildren && label) ? (
      <div className="button__delimiter"></div>
    ) : null;

    return (
      <div
        className={`${className} button ${disabled ? 'button--disabled' : ''}`}
        style={buttonStyle}
        tabIndex={disabled ? '-1' : tabIndex}
      >
        <div className="button__label">
          {label}
        </div>
        {buttonDelimiter}
        {buttonChildren}
      </div>
    );
  }
}

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disablePaddingCompensation: PropTypes.bool,
  label: PropTypes.string,
  contentPosition: PropTypes.oneOf(['before', 'after']),
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  svg: PropTypes.string,
  svgSize: PropTypes.string
};
Button.defaultProps = {
  contentPosition: 'after',
  className: '',
  disablePaddingCompensation: false,
  svgSize: '1.4em',
  style: {},
  tabIndex: 0
};
