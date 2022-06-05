import { useRef, useEffect, useState, useCallback} from "react"
import { useRouter } from "next/router"
import Loader from "../../comps/Loader"
import LongList from "../../comps/LongList"

const SearchResult = () => {
    const router =useRouter()
    const qr = router.query.term
    const [result, setResult] = useState([])
    const page = useRef()
    const [totalPages, setTotalPages] = useState(0)
    const [isTheEnd, setIsTheEnd] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getSearchData = useCallback(async (qr, p) => {
        const result = await fetch(`/api/getSearch/?query=${qr}&p=${p}`)
        const data = await result.json()
        setResult((pre)=>pre.concat(data.results))
        setTotalPages(data.total_pages)
    }, [setIsTheEnd])

    const clean = useCallback(()=>{
        setResult([])
        page.current = 1
        setTotalPages(0)
        setIsLoading(true)
    }, [qr])

    useEffect(()=>{
        if(isTheEnd===true){
            if(page.current<totalPages){
                page.current++
                getSearchData(qr, page.current)
            }
        }
    }, [isTheEnd])

    useEffect(() => {
        clean()
        getSearchData(qr, page.current)
        setIsLoading(false)
    }, [qr])

    return (
        <div className='main-body-default'>
            {isLoading?
                <Loader/>
                : 
                <div className='main-container'>
                    <LongList lists={result} listText={`Search: "${qr}"`} displayMore="none" isVisible={isTheEnd} setIsVisible={setIsTheEnd}/>
                </div>
            }
        </div>
    )
}

export default SearchResult
