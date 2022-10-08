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
  userWatchlist[movie.Title.replace(' ','')] = {...movie} 
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}


export function RemoveFromLocalStorage(movie){
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  userWatchlist[movie.Title.replace(' ','')] = undefined
  window.localStorage.setItem('userWatchlist', JSON.stringify(userWatchlist))
}
