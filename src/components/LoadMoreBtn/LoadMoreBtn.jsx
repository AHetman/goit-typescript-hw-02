import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
