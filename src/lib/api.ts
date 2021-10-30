import axios from "axios";

const url = "https://www.omdbapi.com/?apikey=917c373d&s=";

export async function getData(query: String) {
  const response = await axios.get(url + query);
  console.log(response.data);

  return response.data;
}
