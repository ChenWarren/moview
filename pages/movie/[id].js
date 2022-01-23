import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import HeaderUI from "../../comps/HeaderUI"
import DetailUI from "../../comps/DetailUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"

import fetchDetail from "../../data/fetchDetail"
import fetchRelevant from "../../data/fetchRelevant"

const Detail = () => {

    const [detail, setDetail] = useState()
    const [similar, setSimilar] = useState()
    const [recomm, setRecomm] = useState()
    const router =useRouter()

    const qr = router.query.id
    
    const getRelevant = async(i, k, set)=>{
        const res = await fetchRelevant(i, k)
        set(res)
    }

    const getDetail = async(i)=> {
        const data = await fetchDetail(i) 
        setDetail(data)
    }

    useEffect(()=>{
        getDetail(qr)
        getRelevant(qr, 'similar', setSimilar)
        getRelevant(qr, 'recommendations', setRecomm)
    }, [qr])

    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
                {detail && similar && recomm? 
                    <DetailUI detail={detail} similar={similar} recomm={recomm}/> 
                    : 
                    null 
                }
                {similar? 
                    <ListUI lists={similar} listText="Similar" displayMore="none"/>
                    :
                    null
                }
                {similar? 
                    <ListUI lists={recomm} listText="Recommendation" displayMore="none"/>
                    :
                    null
                }

            </div>
            <FooterUI/>
        </div>
    )
}

export default Detail
