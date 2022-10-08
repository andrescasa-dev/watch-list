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

export const sanitizeTitle = (title) => {
  return title.replaceAll(/\W+/g, '')
}

export function saveInLocalStorage(movie){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  userWatchlist[sanitizeTitle(movie.Title)] = {...movie} 
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}


export function RemoveFromLocalStorage(movie){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  userWatchlist[sanitizeTitle(movie.Title)] = undefined
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}
