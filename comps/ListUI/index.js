
import { useRouter } from 'next/router'

import Card from '../Card'

const ListUI = ({
    lists=[],
    listText='List Title',
    displayMore='flex',
    loadRout = '/',
    wrap='card_wrap'
}) => {
    const router = useRouter()
    const PATH = process.env.PUBLIC_URL

    return (
        <div className='lists_wrap'>
            <div className='lists_header'>
                <h1>{listText}</h1>
                <div
                    onClick={()=> router.push(loadRout)}
                    className='load_more'
                    style={{display: displayMore}}
                >
                    Load more &#9654;&#9654;
                </div>
            </div>
            <div className={wrap}>
                { lists.map((item) => {
                    return (
                    <Card key={item.id} imgUrl={PATH + item.poster_path} m_name={item.original_title} overview={item.overview} vote_rate={item.vote_average} release_date={item.release_date} title={item.title} id={item.id}/> )
                })}

            </div>
        </div>
    )
}

export default ListUI
