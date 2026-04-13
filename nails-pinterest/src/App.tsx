import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import { fetchNailImages } from "./services/unsplashServices";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (query: string) => {
    const data = await fetchNailImages(query + " nails");
    setImages(data);
  };

  return (
    <div>
      <h1>Nails Pinterest 💅</h1>
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;