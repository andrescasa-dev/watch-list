import { replacer } from "../utils/functions.js";

export default function MovieComponent(movie) {
  const { Title, Poster, Plot, imdbRating, Genre, Runtime, id, Year } = movie;
  const thisMovie = { Title, Poster, Plot, imdbRating, Genre, Runtime, id, Year }
  const userWatchlist = JSON.parse(window.localStorage.getItem('userWatchlist') || '{}')
  const addIcon =
    `
  <svg class="h-5 w-5" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z" fill="white"/>
  </svg>
  `
  const removeIcon =
    `
  <svg class="h-5 w-5" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM15.625 21.875C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H15.625Z"/>
  </svg>
  `
  return `
  <div id="${id}" class="flex flex-col md:flex-row max-w-[50rem] text-black ">
            ${Poster !== 'N/A' ?
      `<img class="w-1/2 mx-auto md:max-w-[10rem] md:w-full h-[15rem] object-cover" src="${Poster}" alt="${Title}">`
      :
      `<div class="md:max-w-[10rem] text-gray-700 flex justify-center items-center bg-gray-300 rounded h-[15rem]">
                <p>No poster</p>
              </div>`
    }
            <div class="grow flex flex-col gap-4 py-6 md:p-6">
              <div class="flex gap-2">
                <h2 class="text-xl capitalize">${Title}</h2>
                <div class="flex gap-1 items-center">
                  <svg class="w-4 h-4" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
                  </svg>

                  <p>${imdbRating}</p>
                </div>
              </div>
              <div class="flex gap-8">
                <p class="bg-blue-200 rounded px-1">${Runtime}</p>
                <p class="bg-orange-200 rounded px-1">${Genre}</p>
                <p class="bg-red-200 rounded px-1">${Year}</p>
                <div class="grow flex items-center justify-end gap-2">
                  <button class="flex gap-2 items-center" id="${userWatchlist[id] ? 'remove-from-watchlist' : 'add-to-watchlist'}" data-movie='${JSON.stringify(thisMovie, replacer)}'>
                    <label class="cursor-pointer" for="add-to-watchlist"> 
                      ${userWatchlist[id] ? removeIcon : addIcon}
                    </label>
                    <label class="cursor-pointer" for="add-to-watchlist">Watchlist</label>
                  </button>
                </div>
              </div>
              <p class=" text-gray-600">${Plot}</p>
            </div>
          </div>
  `
}
