import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import HeaderUI from "../../comps/HeaderUI"
import DetailUI from "../../comps/DetailUI"
import FooterUI from "../../comps/FooterUI"

import fetchDetail from "../../data/fetchDetail"

const Detail = () => {

    const [detail, setDetail] = useState()
    const router =useRouter()

    const qr = router.query.id

    const getDetail = async(i)=> {
        const data = await fetchDetail(i)
        
        setDetail(data)
    }
    useEffect(()=>{
        getDetail(qr)
    }, [qr])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {detail? <DetailUI detail={detail}/> : <p>Loading....</p> }
            </div>
            <FooterUI/>
        </div>
    )
}

export default Detail
