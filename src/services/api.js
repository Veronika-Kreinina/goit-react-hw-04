import axios from "axios";

export const fetchAr = async (query, page) => {
  const respon = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=100`
  );
  return respon.data;
};
