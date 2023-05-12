import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "6d9b32e676944d1aa388d50250db35d3",
  },
});
