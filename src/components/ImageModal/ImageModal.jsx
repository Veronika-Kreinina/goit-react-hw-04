import Modal from "react-modal";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    maxWidth: "80%", // Максимальна ширина модалки
    maxHeight: "80%", // Максимальна висота модалки
    padding: "0px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px", // Додаємо округлі кути
  },
};
Modal.setAppElement("#root");
const ImageModal = ({ modalOpen, closeModal, src, alt }) => {
  return (
    <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};
export default ImageModal;
