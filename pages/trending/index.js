import { useEffect, useState } from "react"

import HeaderUI from "../../comps/HeaderUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"

import fetchData from "../../data/fetchList"

const trending = () => {

    const [list, setList] = useState()

    const fetchList = async()=> {
        const trending = await fetchData('now_playing', '1')
        setList(trending)
    }
    
    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? <ListUI wrap="card_wrap_l" lists={list} listText='Trending' displayMore="none"/> : <p>Loading....</p> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default trending
