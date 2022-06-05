import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [showSearchBar,setShowSearchBar] = useState(false)
    const router = useRouter()

    const handleEnter = (e) => {
        if(e.key ==='Enter' && searchQuery!='' ){
            router.push(`/search/${searchQuery}`)
        }
    }

    const handleClickSearchIcon = () => {
        if(searchQuery!=''){
            router.push(`/search/${searchQuery}`)
        }
    }

    return (
      <>
        <div className="search-bar">
            <SearchInput   
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                handleEnter={handleEnter}
                handleClick={handleClickSearchIcon}  
            />
        </div>

        <div className="search-bar-mobile">
            {showSearchBar?
                <SearchInput   
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    handleEnter={handleEnter}
                    handleClick={handleClickSearchIcon}
                    setSwitch={setShowSearchBar}  
                />
                :
                <div 
                    className='search-icon'
                    onClick={()=>setShowSearchBar(true)}
                >
                    <img src='/search_icon.svg' width={25}/>
                </div>
            }
        </div>
      </>
    )
}

export default SearchBar

// Search input component
const SearchInput = ({
    searchQuery, 
    setSearchQuery, 
    handleEnter,
    handleClick,
    setSwitch,
})=>{
    return (
        <>
            <input 
                className='search-input' 
                type='text' 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                onKeyDown={handleEnter}
                onFocus={()=>setSearchQuery('')}
            />

            <div 
                className='search-icon' 
                onClick={handleClick}
            >
                <img src='/search_icon.svg' width={25} />
            </div>

            <div 
                className='close-icon'
                onClick={()=>setSwitch(false)}
            >
                <img src='/close_icon.svg' width={20}/>
            </div>
        </>
    );
}
