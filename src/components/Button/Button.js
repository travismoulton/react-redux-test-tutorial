import { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default class Button extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
