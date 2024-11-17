import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(({ alt, id, smallUrl, regularUrl }) => (
        <li key={id} className={s.row}>
          <ImageCard
            openModal={openModal}
            alt={alt}
            smallUrl={smallUrl}
            regularUrl={regularUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
