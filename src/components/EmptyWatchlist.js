export default function EmptyWatchlist(){
  return `
  <div class="flex justify-center items-center w-full">
    <div class="flex flex-col gap-4 justify-center items-center">
      <p class="text-gray-300 font-bold">Your watchlist is looking a little empty...</p>
      <a class="text-gray-900 font-bold flex gap-2 items-center" href="#">
        <svg class="h-5 w-5" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z" fill="white"/>
        </svg>      
        Let’s add some movies!
      </a>
    </div>
  </div>
  `
}