import EmptyWatchlist from "../components/EmptyWatchlist.js";
import HeaderComponent from "../components/HeaderComponent.js";
import MovieComponent from "../components/MovieComponent.js";
import { view } from "../view.js";

export default function watchlist(){
  const header = {title: "My Watchlist", link:{text: "search for movies", href:"#"}}  
  view.innerHTML = 
  `
  ${HeaderComponent(header)}
  <main class="flex flex-col grow relative h-full">
    <div id="watchlist" class="grow p-16 flex flex-col gap-4">
      ${watchlistHTML()}
    </div>
  </main>`
}

export function watchlistHTML(){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}') 
  const moviesHTML = (watchlist) => Object.values(watchlist).map(movie => MovieComponent(movie)).join('');
  return Object.keys(userWatchlist).length !== 0 ? moviesHTML(userWatchlist) : EmptyWatchlist()
}