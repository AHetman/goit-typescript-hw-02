import css from "./ImageCard.module.css";

const ImageCard = ({
  image: {
    urls: { small, regular },
    alt_description,
  },
  onImageClick,
}) => {
  return (
    <div className={css.imageCard}>
      <img
        className={css.oneImage}
        src={small}
        alt={alt_description}
        onClick={() => onImageClick(regular)}
      />
    </div>
  );
};

export default ImageCard;
