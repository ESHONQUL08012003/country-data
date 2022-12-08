import axios from "axios";

const URL  = "https://restcountries.com/v2";

const  index = {
  getAll: async()=> axios.get(`${URL}/all`)
}

export default index;