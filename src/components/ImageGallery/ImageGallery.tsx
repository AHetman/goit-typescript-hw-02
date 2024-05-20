import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
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
