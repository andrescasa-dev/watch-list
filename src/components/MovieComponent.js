export default function MovieComponent(movie){
  return `
  <div class="flex w-[50rem] text-black">
            <img class="w-[10rem] h-[15rem]" src="https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="poster">
            <div class="flex flex-col gap-4 p-6">
              <div class="flex gap-2">
                <h2 class="text-xl">Blade Runner</h2>
                <div class="flex gap-1 items-center">
                  <img class="w-4 h-4" src="../assets/icon-star.svg" alt="star">
                  <p>8.1</p>
                </div>
              </div>
              <div class="flex gap-8">
                <p>117 min</p>
                <p>Action, Drama, Sci-fi</p>
                <div class="flex items-center gap-2">
                  <button id="add-to-watchlist">
                    <svg class="h-5 w-5" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z" fill="white"/>
                    </svg>
                  </button>
                  <label for="add-to-watchlist">Watchlist</label>
                </div>
              </div>
              <p class=" text-gray-600">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
            </div>
          </div>
  `
}