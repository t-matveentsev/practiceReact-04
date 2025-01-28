import axios from "axios";

export const fetchRequest = async (query, page) => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
  );
  return response.data;
};

export const fetchRequestById = async () => {
  const response = await axios.get(
    "https://hn.algolia.com/api/v1/search?query=react"
  );
  return response.data;
};
