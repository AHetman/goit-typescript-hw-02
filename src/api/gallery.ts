import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface Response {
  total: number;
  total_pages: number;
  results: Image[];
}

interface FetchImagesParams {
  query: string;
  page: number;
}

const fetchImages = async ({
  query,
  page,
}: FetchImagesParams): Promise<Image[]> => {
  const res = await axios.get<Response>(
    "/?client_id=xWy3C2rBiutLlic41bxDk4llln0K5smGpfuHehlvZDM",
    {
      params: {
        query,
        page,
        orientation: "landscape",
      },
    }
  );
  return res.data.results;
};

export default fetchImages;
