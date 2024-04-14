import './assets/index.scss';

export const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="gallery-item">
      <img className="gallery-item__image" src={src} alt={alt} onClick={onClick} />
    </li>
  );
};
