import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  // const [query, setQuery] = useState("");
  // const handleSubmit = () => {
  //   setQuery();
  // };

  return (
    <>
      <SearchBar onSubmit={} />
      <ImageGallery />
      <Loader />
      <ErrorMessage/>
    </>
  );
}

export default App;
