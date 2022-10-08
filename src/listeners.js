import MovieComponent from "./components/MovieComponent.js";
import { watchlistHTML } from "./pages/watchlist.js";
import { RemoveFromLocalStorage, reviver, sanitizeTitle, saveInLocalStorage } from "./utils/functions.js";

export default function listeners(){
  document.addEventListener('click', async event =>{
    const {target} = event
    if(target.closest('#add-to-watchlist')){
      event.preventDefault();
      const button = target.closest('#add-to-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      const sanitizedTitle = sanitizeTitle(movie.Title);
      console.log('add: '+ movie.Title)
      saveInLocalStorage(movie)
      console.log({sanitizedTitle});
      document.querySelector(`#${sanitizedTitle}`).outerHTML = MovieComponent(movie);
    }

    if(target.closest('#remove-from-watchlist')){
      event.preventDefault();
      const watchlistEM = document.querySelector('#watchlist')
      const button = target.closest('#remove-from-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      const sanitizedTitle = sanitizeTitle(movie.Title);
      console.log('remove: '+ movie.Title)
      RemoveFromLocalStorage(movie);
      
      if(watchlistEM){
        watchlistEM.innerHTML = watchlistHTML();
      }
      else{
        document.querySelector(`#${sanitizedTitle}`).outerHTML = MovieComponent(movie);
      }
    }
  })
}