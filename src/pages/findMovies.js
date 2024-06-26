import SearchBarComponent from "../components/SearchBarComponent.js";
import { view } from "../view.js";
import MovieComponent from "../components/MovieComponent.js";
import NotFound from "../components/NotFound.js";
import StartComponent from "../components/StartComponent.js";
import { BASE_URL_MOVIES } from "../utils/constants.js";
import HeaderComponent from "../components/HeaderComponent.js";
import ArrowsComponent from "../components/ArrowsComponent.js";
import { arrowHandler } from "../utils/functions.js";

const key = "4d0b81f2";
const DEFAULT_SEARCH_VALUE = 'Dune'
let div_mount;

export default async function findMovie() {
  const header = { title: "Find your film", link: { text: "go to watchlist", href: "#watchlist" } };
  view.innerHTML =
    `
  ${HeaderComponent(header)}
  <main class="flex flex-col grow relative ">
    ${SearchBarComponent(window.localStorage.getItem('searchText') || DEFAULT_SEARCH_VALUE)}
    ${ArrowsComponent()}
    <div id="mount" class="grow px-6 sm:px-16 flex flex-col gap-12 md:gap-8"></div>
  </main>`
  div_mount = document.querySelector('#mount')

  displayMovieFound();
  listeners();
}

export async function displayMovieFound() {
  const searchText = document.querySelector('#search').value;
  if (searchText !== '') {
    window.localStorage.setItem('searchText', searchText)
    const search = await getSearch(searchText, arrowHandler.actualPage);
    if (search.Response === 'True') {
      const movies = await Promise.all(search.Search.map(async movieData => {
        const movie = await getMovieByID(movieData.imdbID)
        return { ...movie, id: movieData.imdbID }
      }
      ));
      const MoviesHTML = movies.map(movie => MovieComponent(movie)).join('');
      div_mount.innerHTML = MoviesHTML;
    }
    else {
      div_mount.innerHTML = NotFound()
    }
  }
}

async function getMovieByID(id) {
  const url = `${BASE_URL_MOVIES}/?i=${id}&apikey=${key}`
  const response = await fetch(url)
  const data = await response.json();
  return data
}

async function getSearch(searchText, page) {
  const url = `${BASE_URL_MOVIES}/?s=${searchText}&page=${page}&apikey=${key}`
  const response = await fetch(url)
  const data = await response.json();
  return data;
}

function listeners() {
  const input_search = document.querySelector('#search');
  document.addEventListener('click', async event => {
    const { target } = event
    if (target.matches('#find')) {
      await displayMovieFound();
    }
  })
  input_search.addEventListener('keypress', async event => {
    const { target, key } = event
    if (target.matches('#search') && key === 'Enter') {
      await displayMovieFound();
    }
  })
  document.addEventListener('input', event => {
    const { target } = event;
    if (target === input_search) {
      if (input_search.value === '') div_mount.innerHTML = StartComponent();
    }
  })
}
