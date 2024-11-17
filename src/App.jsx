import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "./services/api";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoad(true);
      try {
        const { total, results, per_page } = await getPhotos(query, page);
        if (results.length === 0) {
          return setIsEmpty(true);
        }
        setImages((prev) => [...prev, ...results]);
        setIsVisible(page < Math.ceil(total / per_page));
      } catch (error) {
        console.log(error);
        setIsError(true);
        ErrorMessage();
      } finally {
        setIsLoad(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsError(false);
    setIsEmpty(false);
    setIsVisible(false);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (regularUrl, alt) => {
    setModalOpen(true);
    setModalSrc(regularUrl);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoad && <Loader />}
      {isError && <ErrorMessage />}
      {isEmpty && (
        <Toaster>Please enter text before searching for images</Toaster>
      )}
      {isVisible && !isLoad && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoad} />
      )}
      <ImageModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
