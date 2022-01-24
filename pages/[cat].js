import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import HeaderUI from "../comps/HeaderUI"
import ListUI from "../comps/ListUI"
import FooterUI from "../comps/FooterUI"

import fetchData from "../data/fetchList"
import { Categories } from "."

const Category = () => {

    const [list, setList] = useState()
    const [page, setPage] = useState(1)
    const router =useRouter()

    const qr = router.query.cat
    const menu = Categories.filter((item)=>(item.fetchKey === qr ))[0].menu


    const fetchList = async(q)=> {
        const data = await fetchData(q, page)
        const data1 = await fetchData(q, page+1)
        
        setList(data.concat(data1))
    }
    useEffect(()=>{
        fetchList(qr)
    }, [qr])


    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? 
                    <ListUI wrap="card_wrap_l" lists={list} listText={menu} displayMore="none"/> 
                    : 
                    null
                }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Category
