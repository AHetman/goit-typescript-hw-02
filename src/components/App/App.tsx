import { useState, useEffect } from "react";
import fetchImages from "../../api/gallery";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (topic: string) => {
    setQuery(topic);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos() {
      try {
        setError(false);
        setIsLoading(true);
        const image = await fetchImages({ query, page });
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...image];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [query, page]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery images={photos} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {photos.length > 9 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} closeModal={closeModal} />
      )}
    </>
  );
};

export default App;
