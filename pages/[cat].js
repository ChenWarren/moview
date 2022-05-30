import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import HeaderUI from "../comps/HeaderUI"
import LongList from "../comps/LongList"
import FooterUI from "../comps/FooterUI"

import fetchData from "../data/fetchList"
import { Categories } from "./index"

const Category = () => {  
    const router =useRouter()
    const qr = router.query.cat
    const [list, setList] = useState([])
    const [menuText, setMenuText] = useState('Popular')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const menu = Categories.filter((item)=>(item.fetchKey === qr ))[0].menu
    
    const fetchList = async(q, p)=> {
        const data = await fetchData(q, p)
        setMenuText(menu)
        setList(prevList => prevList.concat(data.result))
        setTotalPages(data.total)
    }

    const clean = () => {
        setList([])
        setCount(1)
        setPage(1)
        setTotalPages(0)  
    }

    useEffect(()=>{
        if(isVisible===true){
            if(page<totalPages){
                setPage(prev=>prev+1)
                fetchList(qr, page+1)
            }
        }
    },[isVisible])

    useEffect(()=>{
        clean()
        fetchList(qr, page)
    }, [qr])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {list? 
                    <LongList lists={list} listText={menuText} displayMore="none" isVisible={isVisible} setIsVisible={setIsVisible} setPage={setPage}/> 
                    : 
                    null
                }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Category
