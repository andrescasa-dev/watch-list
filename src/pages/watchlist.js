import EmptyWatchlist from "../components/EmptyWatchlist.js";
import HeaderComponent from "../components/HeaderComponent.js";
import MovieComponent from "../components/MovieComponent.js";
import { view } from "../view.js";

export default function watchlist(){
  const header = {title: "My Watchlist", link:{text: "search for movies", href:"#"}}
  //{dune: {}}
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || false) 
  const displayMovies = (watchlist) => Object.values(watchlist).map(movie => MovieComponent(movie)).join('');
  console.log(userWatchlist)
  view.innerHTML = 
  `
  ${HeaderComponent(header)}
  <main class="flex flex-col grow relative h-full">
    <div id="mount" class="grow p-16 flex flex-col gap-4">
      ${userWatchlist ? displayMovies(userWatchlist) : EmptyWatchlist()}
    </div>
  </main>`
}