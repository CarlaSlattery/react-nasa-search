import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (result) => (result.media_type = "image")
        );
        const images = parsedImages.map((image) => image.links[0].href);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;