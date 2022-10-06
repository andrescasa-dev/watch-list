import EmptyWatchlist from "../components/EmptyWatchlist.js";
import HeaderComponent from "../components/HeaderComponent.js";
import { view } from "../view.js";

export default function watchlist(){
  const header = {title: "My Watchlist", link:{text: "search for movies", href:"#"}}
  view.innerHTML = 
  `
  ${HeaderComponent(header)}
  <main class="flex flex-col grow relative ">
    <div id="mount" class="grow p-16 flex">
      ${EmptyWatchlist()}
    </div>
  </main>`
}