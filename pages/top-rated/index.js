import { useEffect, useState } from "react"

import HeaderUI from "../../comps/HeaderUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"

import fetchData from "../../data/fetchList"

const Top_rated = () => {

    const [list, setList] = useState()

    const fetchList = async()=> {
        const top_rated = await fetchData('top_rated', '1')
        const top_rated1 = await fetchData('top_rated', '2')
        setList(top_rated.concat(top_rated1))
    }
    
    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? <ListUI wrap="card_wrap_l" lists={list} listText='Top-Rated' displayMore="none"/> : <p>Loading....</p> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Top_rated
