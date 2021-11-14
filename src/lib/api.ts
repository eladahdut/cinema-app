import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=ba9afec588f7354242a4bc48a183c12e&query=";

export async function getData(query: String) {
  const response = await axios.get(url + query);
  return response.data;
}
