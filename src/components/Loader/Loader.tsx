// import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <InfinitySpin
      visible={loading}
      width={String(200)}
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
