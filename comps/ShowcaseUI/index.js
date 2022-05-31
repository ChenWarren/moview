//Home page hero showcase component
import { useRouter } from "next/router"

const ShowcaseUI = ({
    list,
}) => {
    const router = useRouter()
    const path = list.backdrop_path
    
    const clickShowcase = ()=>{
        router.push({
            pathname: '/movie/[id]',
            query: {id: list.id}
        })
    }

    return (
        <div onClick={clickShowcase} className="showcase">
            <div className="mask1">
                <img className="show_image" src={`${process.env.NEXT_PUBLIC_URL+path}`}/>
            </div>
            <div className="showcaseHead">
                <h1 className="showcaseH1">{list.title}</h1> 
            </div>
        </div>
    )
}

export default ShowcaseUI
