export const replacer = (key, value) => {
  if (typeof value === "string") {
    return value.replaceAll("'", "$/");
  }
  return value;
}

export const reviver = (key, value) => {
  if (typeof value === "string") {
    return value.replaceAll("$/", "'");
  }
  return value;
}

export function saveInLocalStorage(movie){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  userWatchlist[movie.id] = {...movie} 
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}


export function RemoveFromLocalStorage(movie){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  userWatchlist[movie.id] = undefined
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}
