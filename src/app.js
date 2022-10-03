import { BASE_URL_MOVIES } from "./utils/constants.js";
const key = "4d0b81f2";

class app{
  constructor(){
    this.getMovie();
  }

  async getMovie(){
    const title = 'dune';
    const response = await fetch(`${BASE_URL_MOVIES}/?t=${title}&apikey=${key}`)
    const data = await response.json();
    console.log({data})
  }
}

new app();