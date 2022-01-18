import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import HeaderUI from "../comps/HeaderUI"
import ListUI from "../comps/ListUI"
import FooterUI from "../comps/FooterUI"

import fetchData from "../data/fetchList"

const Category = () => {

    const [list, setList] = useState()
    const router =useRouter()

    const qr = router.query.cat

    const fetchList = async(q)=> {
        const data = await fetchData(q, '1')
        const data1 = await fetchData(q, '2')
        
        setList(data.concat(data1))
    }
    useEffect(()=>{
        fetchList(qr)
    }, [qr])


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

export default Category
