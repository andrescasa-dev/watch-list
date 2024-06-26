export default function SearchBarComponent(searchText) {
  return `
  <div class="absolute mt-[-1.6rem] inset-x-0 max-w-[60%] w-full min-w-min m-auto bg-white flex sm:flex-row flex-col text-gray-900 border rounded drop-shadow">
    <div class="flex-auto flex px-2 rounded-l-lg">
      <label for="search">
        <svg class="p-4" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="fill-gray-500" fill-rule="evenodd" clip-rule="evenodd" d="M18.75 6.25C11.8464 6.25 6.25 11.8464 6.25 18.75C6.25 25.6536 11.8464 31.25 18.75 31.25C25.6536 31.25 31.25 25.6536 31.25 18.75C31.25 11.8464 25.6536 6.25 18.75 6.25ZM0 18.75C0 8.39466 8.39466 0 18.75 0C29.1053 0 37.5 8.39466 37.5 18.75C37.5 22.7995 36.2163 26.5491 34.0336 29.6142L49.0847 44.6653C50.3051 45.8857 50.3051 47.8643 49.0847 49.0847C47.8643 50.3051 45.8857 50.3051 44.6653 49.0847L29.6142 34.0336C26.5491 36.2163 22.7995 37.5 18.75 37.5C8.39466 37.5 0 29.1053 0 18.75Z"/>
        </svg>
      </label>
      <input class="grow outline-none" value="${searchText}" id="search" type="text" placeholder="Search for a movie">
    </div>
    <button id="find" class="px-16 py-2 rounded-r  border-l bg-gray-100">Search</button>
  </div>
  `
}