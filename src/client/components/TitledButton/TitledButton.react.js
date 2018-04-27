import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './TitledButton.css'; // eslint-disable-line no-unused-vars
import Button from '../Button';
import ButtonLabel from '../ButtonLabel';
import { StickyNode } from '@opuscapita/react-overlays';

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
    let {
      children,
      className,
      style, // eslint-disable-line
      restrictorNode,
      title,
      isAlwaysShowTitle, // eslint-disable-line
      ...restProps
    } = this.props;
    let { isHovered } = this.state;

    let tips = (title && isHovered) ? (
        <div className={styles[`oc-titled-button__tips`]}>
          <div className={styles[`oc-titled-button__tips-helper`]}>
            <StickyNode restrictorNode={restrictorNode}>
              <div className={styles[`oc-title-button__tip`]}>
                <ButtonLabel label={title} style={{ whiteSpace: 'nowrap' }} />
              </div>
            </StickyNode>
          </div>
        </div>
    ) : null;

    return (
      <div
        className={`${styles['oc-titled-button']} ${styles[className]}`}
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
  className: PropTypes.string,
  title: PropTypes.string,
  restrictorNode: PropTypes.object,
  isAlwaysShowTitle: PropTypes.bool
};

TitledButton.defaultProps = {
  className: '',
  isAlwaysShowTitle: false
};
