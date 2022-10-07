import { RemoveFromLocalStorage, reviver, saveInLocalStorage } from "./utils/functions.js";

export default function listeners(){
  document.addEventListener('click', event =>{
    const {target} = event
    if(target.closest('#add-to-watchlist')){
      const button = target.closest('#add-to-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      saveInLocalStorage(movie)
    }

    if(target.closest('#remove-from-watchlist')){
      const button = target.closest('#remove-from-watchlist');
      const movie = JSON.parse(button.dataset.movie, reviver);
      console.log('remove: '+{movie})
      RemoveFromLocalStorage(movie);
    }
  })
}