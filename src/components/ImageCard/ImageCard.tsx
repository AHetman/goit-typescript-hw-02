import React from "react";
import css from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCard}>
      <img
        className={css.oneImage}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
