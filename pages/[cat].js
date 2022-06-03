import { useEffect, useState, useRef, useCallback } from "react"
import { useRouter } from "next/router"
import HeaderUI from "../comps/HeaderUI"
import LongList from "../comps/LongList"
import FooterUI from "../comps/FooterUI"
import { Categories } from "./index"

const Category = () => {  
    const router =useRouter()
    const qr = router.query.cat
    const [list, setList] = useState([])
    const [menuText, setMenuText] = useState('Popular')
    const page = useRef()
    const [totalPages, setTotalPages] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const fetchList = useCallback(async (q, p)=> {
        const menuStr = Categories.filter((item)=>(item.fetchKey === q))[0].menu
        const result = await fetch(`/api/getlist/?cat=${q}&p=${p}`)
        const data = await result.json()
        setMenuText(menuStr)
        setList(prevList => prevList.concat(data.result))
        setTotalPages(data.total)
    }, [setIsVisible])

    const clean =useCallback(() => {
        setList([])
        page.current = 1
        setTotalPages(0)  
    }, [qr])

    useEffect(()=>{
        if(isVisible===true){
            if(page.current<totalPages){
                page.current++
                fetchList(qr, page.current)
            }
        }
    },[isVisible])

    useEffect(()=>{
        clean()
        fetchList(qr, page.current)
    }, [qr])

    return (
        <div className='main-body-default'>
            <div className='main-container'>
                {list.length !=0 && <LongList lists={list} listText={menuText} displayMore="none" isVisible={isVisible} setIsVisible={setIsVisible}/> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Category
