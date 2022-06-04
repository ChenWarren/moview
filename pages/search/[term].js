import { useRouter } from "next/router"

const SearchResult = () => {
    const router =useRouter()
    const qr = router.query.term
    console.log(qr)
    return (
        <div>{qr}</div>
    )
}

export default SearchResult