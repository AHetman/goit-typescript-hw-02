// import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <InfinitySpin
      className={css.infinitySpin}
      visible={loading}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
