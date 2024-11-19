import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(
        ({ alt_description, id, urls: { small, regular }, index }) => (
          <li key={`${id}-${index}`} className={s.row}>
            <ImageCard
              openModal={openModal}
              alt={alt_description}
              smallUrl={small}
              regularUrl={regular}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default ImageGallery;
