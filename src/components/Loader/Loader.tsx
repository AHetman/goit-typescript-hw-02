import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={css.loader}>
      <Hourglass
        height="80"
        width="80"
        colors={["#4fa94d", "#64f62f"]}
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />
    </div>
  );
};
export default Loader;
