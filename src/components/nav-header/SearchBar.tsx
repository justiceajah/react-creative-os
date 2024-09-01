
const SearchBar = () => {
  return (
    <div className="flex items-center w-[200px] h-[32px] lg:w-[598px] lg:h-[40px] p-2 px-4 bg-gray-100 border border-gray-300 rounded-lg">
      <span className="mr-2 text-gray-400">
        <img src="./assets/fi-br-search.svg" alt="search-icon"/>
      </span>
      <input 
        type="text" 
        className="flex-1 text-[12px] border-none outline-none bg-transparent text-gray-800" 
        placeholder="Search Creative OS" 
      />
      <span className="hidden ml-auto text-xs text-gray-400 lg:inline-block">⌘ + K</span>
    </div>
  )
}

export default SearchBar