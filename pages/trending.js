
import HeaderUI from "../comps/HeaderUI"
import ListUI from "../comps/ListUI"
import FooterUI from "../comps/FooterUI"

const trending = () => {
    return (
        <div className='main-body-default'>
            <HeaderUI/>
            <div className='main-container'>
            {/* <DetailUI/> */}
            <ListUI listText='Trending' displayMore="none"/> 
            </div>
            <FooterUI/>
        </div>
    )
}

export default trending
