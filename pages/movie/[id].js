import DetailUI from "../../comps/DetailUI"
import ListUI from "../../comps/ListUI"
import FooterUI from "../../comps/FooterUI"
import fetchDetail from "../../data/fetchDetail"
import fetchRelevant from "../../data/fetchRelevant"

const Detail = ({
    detail,
    similar,
    recomm
}) => {
    return (
        <div className='main-body-default'>
            <div className='main-container'>
                {detail && similar && recomm && <DetailUI detail={detail} similar={similar} recomm={recomm}/>}
                {similar && <ListUI lists={similar} listText="Similar" displayMore="none"/>}
                {similar && <ListUI lists={recomm} listText="Recommendation" displayMore="none"/>}
            </div>
            <FooterUI/>
        </div>
    )
}

// Fetch server side props
export async function getServerSideProps(context){
    const qr = context.params.id
    const detail = await fetchDetail(qr)
    const similar = await fetchRelevant(qr,'similar')
    const recommend = await fetchRelevant(qr,'recommendations')
  
    return { props: {
        detail: detail,
        similar: similar,
        recomm: recommend
    }}
  }

export default Detail
