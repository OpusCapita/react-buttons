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
      isHovered: false,
      keysPressed: []
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

  normalizeKey(key) {
    let isSingleCharacterKey = key.length === 1;
    return isSingleCharacterKey ? key.toUpperCase() : key;
  }

  handleKeyDown(event) {
    let { keysPressed } = this.state;
    let key = event.key;
    let normalizedKey = this.normalizeKey(key);
    let isAlreadyPressed = keysPressed.find(key => key === normalizedKey);
    let nextKeysPressed = [];
    if(!isAlreadyPressed) {
      nextKeysPressed = keysPressed.concat([normalizedKey]);
      this.setState({ keysPressed: nextKeysPressed });
    }
    let isTipKeyPressed = this.props.tipsHotKeys.some(tipHotKey => this.isHotKeyPressed(tipHotKey, keysPressed));
    // let isHotKeyPressed = this.props.hotKeys.some(hotKey => this.isHotKeyPressed(hotKey, keysPressed));

    if(isTipKeyPressed) {
      this.setState({ isTipKeyPressed: true });
    }
    // if(isHotKeyPressed || isTipKeyPressed) {
    //   event.stopPropagation();
    //   event.preventDefault();
    // }
  }

  handleKeyUp(event) {
    let { keysPressed } = this.state;
    let key = event.key;
    let normalizedKey = this.normalizeKey(key);
    let indexOfPressedKey = keysPressed.indexOf(normalizedKey);
    let isAlreadyPressed = indexOfPressedKey !== -1;
    let nextKeysPressed = [];
    if(isAlreadyPressed) {
      nextKeysPressed = []
        .concat(keysPressed.slice(0, indexOfPressedKey))
        .concat(keysPressed.slice(indexOfPressedKey + 1, keysPressed.length));
      this.setState({ keysPressed: nextKeysPressed });
    }
  }

  isHotKeyPressed(hotKey, keysPressed) {
    let splittedHotKey = hotKey.split(' + ');
    return splittedHotKey.every(splittedPart =>
        keysPressed.some(keyPressed => this.normalizeKey(keyPressed) === this.normalizeKey(splittedPart))
    );
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  handleEvent(event) {
    let anyHotKeyPressed = this.props.hotKeys.some(hotKey => this.isHotKeyPressed(hotKey, this.state.keysPressed));
    if(anyHotKeyPressed) {
      event.stopPropagation();
      event.preventDefault();
      this.props.onClick && this.props.onClick();
      this.props.action && this.props.action();
    }
  }

  capitalizeHotKey(hotKey) {
    return hotKey.replace(/\b\w/g, l => l.toUpperCase());
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
              <HotKeyLabel label={this.capitalizeHotKey(hotKey)} />
            </div>
          ))}
        </div>
      )
    }

    if(isHovered && title && !isTipKeyPressed) {
      let hotKeysLabels = this.props.hotKeys.reduce(
        (result, hotKey) => this.capitalizeHotKey(hotKey).concat(result),
        ''
      );
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
  eventType: PropTypes.oneOf(['keypress', 'keydown', 'keyup']),
  hotKeys: PropTypes.arrayOf(PropTypes.string),
  contexts: PropTypes.arrayOf(PropTypes.object),
  excludeSubcontexts: PropTypes.arrayOf(PropTypes.object),
  showTips: PropTypes.bool
};

HotKeyButton.defaultProps = {
  action: () => {},
  eventType: 'keydown',
  hotKeys: [],
  targets: [ window ],
  targetsExcluded: [],
  tipsHotKeys: ['Control + b']
};
