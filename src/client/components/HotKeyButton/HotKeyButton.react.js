import React, { Component, PropTypes } from 'react';
import s from './HotKeyButton.module.less';
import Button from '../Button';
import HotKeyLabel from '../HotKeyLabel';

export default
class HotKeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    let { children, hotKeys, style, title, ...restProps } = this.props;
    let { isHovered } = this.state;

    let tips = (title && isHovered) ? (
      <div className={s.tips}>
        <div className={s.tip}>
          <HotKeyLabel label={title} style={{ whiteSpace: 'nowrap' }} />
        </div>
      </div>
    ) : null;

    return (
      <div
        className={s.hotKeyButton}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <Button
          { ...restProps }
          style={style}
        >
          {children}
        </Button>
        {tips}
      </div>
    );
  }
}
