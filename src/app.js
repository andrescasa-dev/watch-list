import MovieComponent from "./components/MovieComponent.js";
import NotFound from "./components/NotFound.js";
import StartComponent from "./components/StartComponent.js";
import { BASE_URL_MOVIES } from "./utils/constants.js";
import { div_mount, input_search } from "./view.js";
const key = "4d0b81f2";

class app{
  constructor(){
    this.listeners();
    this.initialDisplay();
  }

  initialDisplay(){
    div_mount.innerHTML = StartComponent();
  }
  
  async displayMovies(){
    const movies = await this.getThisYearMovies();
    console.log(movies)
    const moviesHtml = movies.map(movie => MovieComponent(movie)).join('');
    div_mount.innerHTML = `<div class="flex flex-col gap-6 overflow-scroll">${moviesHtml}</div>` 
  }

  async getMovieByTitle(title){
    const url = `${BASE_URL_MOVIES}/?t=${title}&apikey=${key}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json();
    return data 
  }

  async getThisYearMovies(){
    const year = "2020"
    const url = `${BASE_URL_MOVIES}/?s=power&y=${year}&apikey=${key}`
    const response = await fetch(url)
    console.log(url)
    const data = await response.json();
    return data.Search;
  }

  async findMovie(){
    const movie = await this.getMovieByTitle(input_search.value)
    div_mount.innerHTML = movie.Response === 'True' ? MovieComponent(movie) : NotFound();
  }

  listeners(){
    document.addEventListener('click', async event =>{
      const {target} = event
      if(target.matches('#find')){
        await this.findMovie();  
      }
    })
    input_search.addEventListener('keypress', async event =>{
      const {target, key} = event
      console.log({target, key})
      if(target.matches('#search') && key === 'Enter'){
        await this.findMovie();
      }
    })
    document.addEventListener('input', event => {
      const {target} = event;
      if(target === input_search){
        if(input_search.value === '') div_mount.innerHTML = StartComponent(); 
      }
    })
  } 
}

new app();