import SearchBarComponent from "../components/SearchBarComponent.js"; 
import { view } from "../view.js";
import MovieComponent from "../components/MovieComponent.js";
import NotFound from "../components/NotFound.js";
import StartComponent from "../components/StartComponent.js";
import { BASE_URL_MOVIES } from "../utils/constants.js";
import HeaderComponent from "../components/HeaderComponent.js";

const key = "4d0b81f2";
let div_mount;

export default async function findMovie(){
  const header = {title: "Find your film", link: {text: "my watchlist", href:"#watchlist"}};
  view.innerHTML = 
  `
  ${HeaderComponent(header)}
  <main class="flex flex-col grow relative ">
    ${SearchBarComponent()}
    <div id="mount" class="grow p-16 flex"></div>
  </main>`
  div_mount = document.querySelector('#mount')
  div_mount.innerHTML = StartComponent();

  listeners();
}

export async function displayMovieFound(){
  const title = document.querySelector('#search').value;
  if(title !== ''){
    const movie = await getMovieByTitle(title);
    if(movie.Response === 'True'){
      div_mount.innerHTML = MovieComponent(movie)
    }
    else{
      div_mount.innerHTML = NotFound()
    }
  }
}

async function getMovieByTitle(title){
  const url = `${BASE_URL_MOVIES}/?t=${title}&apikey=${key}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json();
  return data 
}

async function getSearch(title, page){
  const url = `${BASE_URL_MOVIES}/?s=${title}&page=${page}&apikey=${key}`
  const response = await fetch(url)
  const data = await response.json();
  const {Search} = data
  return Search;
}

function listeners(){
  const input_search = document.querySelector('#search');
  document.addEventListener('click', async event =>{
    const {target} = event
    if(target.matches('#find')){
      await displayMovieFound();  
    }
  })
  input_search.addEventListener('keypress', async event =>{
    const {target, key} = event
    console.log({target, key})
    if(target.matches('#search') && key === 'Enter'){
      await displayMovieFound();
    }
  })
  document.addEventListener('input', event => {
    const {target} = event;
    if(target === input_search){
      if(input_search.value === '') div_mount.innerHTML = StartComponent(); 
    }
  })
}