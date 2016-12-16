import React, { Component, PropTypes } from 'react';
import s from './ButtonLabel.module.less';

export default
class ButtonLabel extends Component {
  render() {
    let {
      bgColor,
      className, // eslint-disable-line
      color,
      label,
      style, // eslint-disable-line
      ...restProps
    } = this.props;
    let styles = {
      color: color,
      backgroundColor: bgColor,
      ...style
    }
    return (
      <div
        { ...restProps }
        className={s.buttonLabel}
        style={styles}
      >
        {label}
      </div>
    );
  }
}

ButtonLabel.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
};
ButtonLabel.defaultProps = {
  bgColor: '#333',
  color: '#fff'
};
