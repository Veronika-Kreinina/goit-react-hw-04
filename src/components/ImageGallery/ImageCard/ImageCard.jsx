import s from "./ImageCard.module.css";

const ImageCard = ({ openModal, alt, regularUrl, smallUrl }) => {
  return (
    <div className={s.wrapper}>
      <img
        onClick={() => openModal(regularUrl, alt)}
        src={smallUrl}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
