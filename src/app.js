import { BASE_URL_MOVIES } from "./utils/constants";

class app{
  constructor(){
  }

  async getMovie(){
    const title = '';
    const key = ''
    const response = await fetch(`${BASE_URL_MOVIES}/t=${title}&apikey=${key}`)
    const data = await response.json();
    console.log({data, url})
  }
}

new app();