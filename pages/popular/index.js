import { useEffect, useState } from "react"

import HeaderUI from "../../comps/HeaderUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"

import fetchData from "../../data/fetchList"

const Popular = () => {

    const [list, setList] = useState()

    const fetchList = async()=> {
        const popular = await fetchData('popular', '1')
        const popular1 = await fetchData('popular', '2')

        setList(popular.concat(popular1))
    }
    
    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? <ListUI wrap="card_wrap_l" lists={list} listText='Popular' displayMore="none"/> : <p>Loading....</p> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Popular
