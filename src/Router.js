import findMovie from "./pages/findMovies.js";
import watchlist from "./pages/watchlist.js";

const root = null;
const useHash = true; // Defaults to: false
const hash = '#'; // Defaults to: '#'

const router = new Navigo(root, useHash, hash);

export default class RouterHandler{
  constructor(){
    router.on(findMovie).resolve();
    router.on('watchlist', watchlist).resolve();
  }
}