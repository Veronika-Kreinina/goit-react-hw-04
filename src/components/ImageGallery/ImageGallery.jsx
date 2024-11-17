import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(({ alt, id, smallUrl, regularUrl }) => (
        <li key={id}>
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
