import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './ButtonLabel.css'; // eslint-disable-line no-unused-vars

export default
class ButtonLabel extends Component {
  render() {
    let {
      className, // eslint-disable-line
      label,
      ...restProps
    } = this.props;

    return (
      <div
        { ...restProps }
        className={`${classes['oc-button-label']} ${className}`}
      >
        {label}
      </div>
    );
  }
}

ButtonLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
ButtonLabel.defaultProps = {
  className: '',
  label: ''
};
