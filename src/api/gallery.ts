import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchImages = async ({ query, page }) => {
  const res = await axios.get(
    "/?client_id=xWy3C2rBiutLlic41bxDk4llln0K5smGpfuHehlvZDM",
    {
      params: {
        query,
        page,
        // per_page: 10,
        orientation: "landscape",
      },
    }
  );
  return res.data.results;
};

export default fetchImages;
