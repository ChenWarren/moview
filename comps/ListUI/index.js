
import { useRouter } from 'next/router'

import Card from '../Card'

const ListUI = ({
    lists=[],
    listText='List Title',
    displayMore='flex',
    loadRout = '/'
}) => {
    const router = useRouter()

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
            <div className='card_wrap'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default ListUI
