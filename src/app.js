import MovieComponent from "./components/MovieComponent.js";
import { BASE_URL_MOVIES } from "./utils/constants.js";
import { div_mount } from "./view.js";
const key = "4d0b81f2";

class app{
  constructor(){
    this.initialDisplay();
  }

  async initialDisplay(){
    const movies = await this.getThisYearMovies();
    const moviesHtml = movies.map(movie => MovieComponent(movie)).join('');
    div_mount.innerHTML = `<div class="flex flex-col gap-6 overflow-scroll">${moviesHtml}</div>` 
  }

  async getMovieByTitle(title){
    const response = await fetch(`${BASE_URL_MOVIES}/?t=${title}&apikey=${key}`)
    const data = await response.json();
    console.log({data})
  }

  async getThisYearMovies(){
    const year = "2020"
    const url = `${BASE_URL_MOVIES}/?s=power&y=${year}&apikey=${key}`
    const response = await fetch(url)
    console.log(url)
    const data = await response.json();
    return data.Search;
  }
}

new app();