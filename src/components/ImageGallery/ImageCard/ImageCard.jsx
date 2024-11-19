import s from "./ImageCard.module.css";

const ImageCard = ({ openModal, alt_description, small, regular }) => {
  return (
    <div className={s.column}>
      <img
        onClick={() => openModal(regular, alt_description)}
        src={small}
        alt={alt_description}
        title={alt_description}
      />
    </div>
  );
};

export default ImageCard;
