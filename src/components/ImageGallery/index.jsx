import React, { Component, createRef } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import Modal from './Modal';

import './assets/index.css';

export class ImageGallery extends Component {
  state = {
    selectedImage: null,
    showModal: false,
  };

  constructor(props) {
    super(props);
    this.galleryRef = createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.images.length !== this.props.images.length) {
      this.scrollToNewImages();
    }
  }

  scrollToNewImages = () => {
    if (this.galleryRef.current) {
      this.galleryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  handleImageClick = (image) => {
    this.setState({
      selectedImage: image,
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedImage: null,
      showModal: false,
    });
  };

  render() {
    const { images } = this.props;
    const { selectedImage, showModal } = this.state;

    return (
      <div ref={this.galleryRef}>
        <ul className="gallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem key={id} src={webformatURL} alt={tags} onClick={() => this.handleImageClick({
              src: largeImageURL,
              alt: tags,
            })} />
          ))}
        </ul>
        {showModal && selectedImage && (
          <Modal onClose={this.handleCloseModal} src={selectedImage.src} alt={selectedImage.alt} />
        )}
      </div>
    );
  }
}
