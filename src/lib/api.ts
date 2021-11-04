import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=ba9afec588f7354242a4bc48a183c12e&query=";

export async function getData(query: String) {
  const response = await axios.get(url + query);
  const dataObj = {
    page: response.data.page,
    results: response.data.results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  };
  console.log(dataObj);

  return dataObj;
}
