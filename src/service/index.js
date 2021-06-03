import axios from "axios";

export const GLOBAL = {
  endpoints: {
    search: "http://api.giphy.com/v1/gifs/search",
    trending: "http://api.giphy.com/v1/gifs/trending",
    translate: "http://api.giphy.com/v1/gifs/translate",
    random: "http://api.giphy.com/v1/gifs/random",
    webtrends: "https://webtrends-e4efc-default-rtdb.firebaseio.com/",
  },
  api_key: "KZXYHX8BdZbVjYir2r0PwXP2boh3J39K",
};

export const getAll = async () => {
  try {
    const response = await axios.get(
      `${GLOBAL.endpoints.search}?api_key=${GLOBAL.api_key}&q=dogs&limit=10&offset=0&rating=g&lang=en`
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getSearch = async (query) => {
  try {
    const response = await axios.get(
      `${GLOBAL.endpoints.search}?api_key=${GLOBAL.api_key}&q=${query}&limit=10&offset=0&rating=g&lang=en`
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const postStorage = async (data) => {
  try {
    const response = await axios.post(
      `${GLOBAL.endpoints.webtrends}webtrends.json`,
      {
        id: data.id,
        img: data.img,
        checked: true,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getStorage = async () => {
  try {
    const response = await axios.get(
      `${GLOBAL.endpoints.webtrends}webtrends.json`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
