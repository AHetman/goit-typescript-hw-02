import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchBarForm}>
        <input
          className={css.searchBar}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBarBtn}>
          Search
        </button>
        <Toaster
          position="top-center"
          closeOnClick={true}
          reverseOrder={false}
          toastOptions={{
            style: {
              marginTop: "100px",
              color: "red",
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
