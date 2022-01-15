import Card from '../Card'

const ListUI = ({
    lists=[],
    listText='List Title',
    loadMore =()=>{console.log('Load more')}
}) => {


    return (
        <div className='lists_wrap'>
            <div className='lists_header'>
                <h1>{listText}</h1>
                <div 
                    onClick={loadMore}
                    className='load_more'
                >Load more &#9654;&#9654;</div>
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
