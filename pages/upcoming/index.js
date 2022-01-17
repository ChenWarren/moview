import { useEffect, useState } from "react"

import HeaderUI from "../../comps/HeaderUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"

import fetchData from "../../data/fetchList"

const upcoming = () => {

    const [list, setList] = useState()

    const fetchList = async()=> {
        const upcoming = await fetchData('upcoming', '1')
        setList(upcoming)
    }
    
    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? <ListUI wrap="card_wrap_l" lists={list} listText='Upcoming' displayMore="none"/> : <p>Loading....</p> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default upcoming
