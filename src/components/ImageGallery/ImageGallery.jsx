import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.imageGalleryItem}>
          <ImageCard onImageClick={onImageClick} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
