import MovieComponent from "./components/MovieComponent.js";
import { displayMovieFound } from "./pages/findMovies.js";
import { watchlistHTML } from "./pages/watchlist.js";
import { RemoveFromLocalStorage, reviver, saveInLocalStorage } from "./utils/functions.js";

export default function listeners(){
  document.addEventListener('click', async event =>{
    const {target} = event
    if(target.closest('#add-to-watchlist')){
      event.preventDefault();
      const button = target.closest('#add-to-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      console.log('add: '+ movie.Title.replaceAll(' ',''))
      saveInLocalStorage(movie)
      document.querySelector(`#${movie.Title.replaceAll(' ','')}`).outerHTML = MovieComponent(movie);
    }

    if(target.closest('#remove-from-watchlist')){
      event.preventDefault();
      const watchlistEM = document.querySelector('#watchlist')
      const button = target.closest('#remove-from-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      console.log('remove: '+ movie.Title.replaceAll(' ',''))
      RemoveFromLocalStorage(movie);
      
      if(watchlistEM){
        watchlistEM.innerHTML = watchlistHTML();
      }
      else{
        document.querySelector(`#${movie.Title.replaceAll(' ','')}`).outerHTML = MovieComponent(movie);
      }
    }
  })
}