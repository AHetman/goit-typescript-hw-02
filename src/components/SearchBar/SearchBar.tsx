import React from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;
    if (topic.trim() === "") {
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
