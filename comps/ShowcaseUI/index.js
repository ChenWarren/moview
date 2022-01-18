import { useRouter } from "next/router"

const ShowcaseUI = ({
    list={title: 'Spider-Man: No Way Home'},
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
                <img className="show_image" src={`${process.env.PUBLIC_URL+path}`}/>
            </div>
            <div className="showcaseHead">
                <h1 className="showcaseH1">{list.title}</h1> 
            </div>
        </div>
    )
}

export default ShowcaseUI
