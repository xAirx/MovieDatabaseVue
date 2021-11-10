// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const VUE_APP_API_KEY = process.env.VUE_APP_API_KEY;
console.log(VUE_APP_API_KEY);

export const enums = {
  VUE_APP_API_KEY,
  BASEURL: "https://api.themoviedb.org/3/",
  BASEIMAGEURL: "https://image.tmdb.org/t/p/original",
  BASEVIDEO: "https://www.youtube.com/watch?v=",
};
