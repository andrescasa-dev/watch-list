import findMovie from "./pages/findMovies.js";

const root = null;
const useHash = true; // Defaults to: false
const hash = '#'; // Defaults to: '#'

const router = new Navigo(root, useHash, hash);

export default class RouterHandler{
  constructor(){
    console.log(router)
    router.on(findMovie).resolve();
  }
}