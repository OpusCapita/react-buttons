import React, { Component, PropTypes } from 'react';
import s from './TitledButton.module.less';
import Button from '../Button';
import ButtonLabel from '../ButtonLabel';

export default
class TitledButton extends Component {
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
    let { children, hotKeys, style, title, isAlwaysShowTitle, ...restProps } = this.props;
    let { isHovered } = this.state;

    let tips = (title && isHovered) ? (
      <div className={s.tips}>
        <div className={s.tip}>
          <ButtonLabel label={title} style={{ whiteSpace: 'nowrap' }} />
        </div>
      </div>
    ) : null;

    return (
      <div
        className={s.titledButton}
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

TitledButton.propTypes = {
  title: PropTypes.string,
  isAlwaysShowTitle: PropTypes.bool
}

TitledButton.defaultProps = {
  isAlwaysShowTitle: false
}
