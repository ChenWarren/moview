import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()

    const handleEnter = (e) => {
        if(e.key ==='Enter'){
            router.push(`/search/${searchQuery}`)
        }
    }

    return (
      <>
        <div className="search-bar">
          <input 
              className='search-input' 
              type='search'
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onKeyDown={handleEnter}
          />
          <div 
              className='search-icon'
              onClick={()=>{
                  router.push(`/search/${searchQuery}`)
              }}
          >
              <img src='/search_icon.svg' width={25}/>
          </div>
        </div>

        
      </>
    )
}

export default SearchBar