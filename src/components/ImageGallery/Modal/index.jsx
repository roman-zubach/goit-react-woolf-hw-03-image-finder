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
    const { src, alt } = this.props;

    return (
      <div className="overlay">
        <div className="modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
