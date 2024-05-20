import css from "./LoadMoreBtn.module.css";

interface LoadMore {
  onClick: () => void;
}

const LoadMoreBtn: React.FunctionComponent<LoadMore> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
