import axios from "axios";

const URL  = "https://restcountries.com/v2";

const  index = {
  getAll: async()=> axios.get(`${URL}/all`),
  getItem: async(title)=> axios.get(`${URL}/name/${title}`),
}

export default index;