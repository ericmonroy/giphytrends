import axios from "axios";
/**
 * @global
 * @description url's de acceso publico.
 */
export const GLOBAL = {
  endpoints: {
    search: "https://api.giphy.com/v1/gifs/search",
    trending: "https://api.giphy.com/v1/gifs/trending",
    translate: "https://api.giphy.com/v1/gifs/translate",
    random: "https://api.giphy.com/v1/gifs/random",
    webtrends: "url-firebase-real-database",
  },
  api_key: "",
};

/**
 *@method GET
 *@description Obtiene todos los gifs por la query dogs
 *
 */
export const getAll = async (obj) => {
  try {
    const response = await axios.get(
      `${GLOBAL.endpoints.search}?api_key=${GLOBAL.api_key}&q=dogs&limit=${obj.limit}&offset=${obj.offset}&rating=g&lang=en`
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

/**
 *@method GET
 *@description Obtiene todos los gifs por la query enviada de tipo object
 *
 */
export const getSearch = async (obj) => {
  try {
    const response = await axios.get(
      `${GLOBAL.endpoints.search}?api_key=${GLOBAL.api_key}&q=${obj.query}&limit=10&offset=${obj.offset}&rating=g&lang=en`
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

/**
 *@method POST
 *@description Guarda un objeto con los parametro de la imagen seleccionada
 *
 */
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

/**
 *@method GET
 *@description Obtiene todas la imagenes  almacenas en favoritos
 *
 */
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
