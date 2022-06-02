import '../../public/search_icon.svg'

const SearchBar = () => {
  return (
      <div className="search-bar">
        <input className='search-input' type='search'/>
        <div className='search-icon'>
            <img src='/search_icon.svg' width={25}/>
        </div>
      </div>
  )
}

export default SearchBar