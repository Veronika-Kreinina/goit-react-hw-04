import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";

import Art from "./components/Art";
import { fetchAr } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [artc, setArtc] = useState([]);
  const [isLoadind, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [nrPages, setNrPages] = useState(0);

  useEffect(() => {
    const getD = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchAr(query, page);
        setNrPages(nrPages);
        setArtc((prev) => [...prev, ...hits]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getD();
  }, [query, page]);

  const handleChangeQuery = (query) => {
    setQuery(query);
    setArtc([]);
    setPage(0);
  };

  return (
    <>
      <Art articles={artc} />
      <SearchBar onChangeQuery={handleChangeQuery} />
      <ImageGallery />
      {isLoadind && <Loader />}
      {isError && <ErrorMessage />}
      {nrPages > page && <LoadMoreBtn />}
    </>
  );
}

export default App;
