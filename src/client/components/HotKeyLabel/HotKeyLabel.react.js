import React, { Component, PropTypes } from 'react';
import s from './HotKeyLabel.module.less';

export default
class HotKeyLabel extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let { bgColor, className, color, label, style, ...restProps } = this.props;
    let styles = {
      color: color,
      backgroundColor: bgColor,
      ...style
    }
    return (
      <div
        { ...restProps }
        className={s.hotKeyLabel}
        style={styles}
      >
        {label}
      </div>
    );
  }
}

HotKeyLabel.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
};
HotKeyLabel.defaultProps = {
  bgColor: '#333',
  color: '#fff'
};
