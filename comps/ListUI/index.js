import Card from '../Card'

const ListUI = ({
    lists=[],
    listText='List Title'
}) => {


    return (
        <div className='lists_wrap'>
            <h1>{listText}</h1>
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
