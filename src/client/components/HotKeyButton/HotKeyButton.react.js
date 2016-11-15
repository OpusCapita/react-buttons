import React, { Component, PropTypes } from 'react';
import s from './HotKeyButton.module.less';
import Button from '../Button';
import HotKeyLabel from '../HotKeyLabel';

export default
class HotKeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTipKeyPressed: false,
      isHovered: false
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    this.setListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  setListeners() {
    let { eventType, targets } = this.props;
    targets.map(target => {
      target.addEventListener('keydown', this.handleKeyDown);
      target.addEventListener('keyup', this.handleKeyUp);
      target.addEventListener(eventType, this.handleEvent);
    });
  }

  removeListeners() {
    let { eventType, targets } = this.props;
    targets.map(target => {
      target.removeEventListener('keydown', this.handleKeyDown);
      target.removeEventListener('keyup', this.handleKeyUp);
      target.removeEventListener(eventType, this.handleEvent);
    });
  }

  handleKeyDown(event) {
    let isTipKeyPressed = this.props.tipKeys.some(tipKey => tipKey === event.code);
    if(isTipKeyPressed) {
      this.setState({ isTipKeyPressed: true });
    }
  }

  handleKeyUp(event) {
    let isTipKeyUnpressed = this.props.tipKeys.some(tipKey => tipKey === event.code);
    if(isTipKeyUnpressed) {
      this.setState({ isTipKeyPressed: false });
    }
  }

  isHotKeyPressed(hotKey, keyboardEvent) {
    let splittedHotKey = hotKey.split(' + ');
    let parsedHotKey = {
      modifier: splittedHotKey.length === 2 ? splittedHotKey[0] : null,
      key: splittedHotKey.length === 2 ? splittedHotKey[1] : splittedHotKey[0]
    }
    let isModifierKeyPressed = parsedHotKey.modifier ?
      keyboardEvent[`${parsedHotKey.modifier.toLowerCase()}Key`] :
      true;
    let isKeyPressed = keyboardEvent.key === parsedHotKey.key;
    let result = isModifierKeyPressed && isKeyPressed;
    return result;
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  handleEvent(event) {
    let anyHotKeyPressed = this.props.hotKeys.some(hotKey => this.isHotKeyPressed(hotKey, event));
    console.log('p', anyHotKeyPressed, event);
  }

  render() {
    let { children, hotKeys, style, title, ...restProps } = this.props;
    let { isTipKeyPressed, isHovered } = this.state;

    let tips = null;
    if(isTipKeyPressed) {
      tips = (
        <div className={s.tips}>
          { hotKeys.map((hotKey, index) => (
            <div className={s.tip} key={index}>
              <HotKeyLabel label={hotKey} />
            </div>
          ))}
        </div>
      )
    }

    if(isHovered && title && !isTipKeyPressed) {
      let hotKeysLabels = this.props.hotKeys.reduce((result, hotKey) => hotKey.concat(result), '');
      let label = `${title}${hotKeysLabels ? ` (${hotKeysLabels})` : ''}`;
      tips = (
        <div className={s.tips}>
          <div className={s.tip}>
            <HotKeyLabel label={label} style={{ whiteSpace: 'nowrap' }} />
          </div>
        </div>
      )
    }

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

HotKeyButton.propTypes = {
  action: PropTypes.func,
  eventType: PropTypes.oneOf(['keypress', 'keydown', 'keyup']),
  hotKeys: PropTypes.arrayOf(PropTypes.string),
  targets: PropTypes.arrayOf(PropTypes.object),
  targetsExcluded: PropTypes.arrayOf(PropTypes.object),
  tipKeys: PropTypes.arrayOf(PropTypes.string)
};

HotKeyButton.defaultProps = {
  action: () => {},
  eventType: 'keyup',
  hotKeys: [],
  targets: [ window ],
  targetsExcluded: [],
  tipKeys: ['ControlLeft', 'OSLeft', 'ControlRight', 'OSRight']
};
