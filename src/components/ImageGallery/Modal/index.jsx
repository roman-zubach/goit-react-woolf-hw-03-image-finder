import React, { Component } from 'react';
import './assets/index.css';

class Modal extends Component {
  handleEsc = ({ code }) => {
    if (code === 'Escape') this.props.onClose()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc)
  }

  render() {
    const { src, alt, onClose } = this.props;

    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
