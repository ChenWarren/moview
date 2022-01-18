import { useRouter } from 'next/router'

import test_data from '../../data/test_data'

const Card = ({
    imgUrl = process.env.PUBLIC_URL + test_data.poster_path,
    m_name= test_data.original_title,
    overview= test_data.overview,
    vote_rate= test_data.vote_average,
    release_date=test_data.release_date,
    title=test_data.title,
    id,
}) => {

    const router = useRouter()

    const handleClick =()=> {
        router.push({
            pathname: '/movie/[id]',
            query: { id: id},
        })
    }

    return (
        <div className="card">
            <img src={imgUrl} alt={m_name} onClick={handleClick}/>
            <div className="overlay">
                <h3>{title}</h3>
                <div className="card_head">
                    <h5>Rate: {vote_rate}</h5>
                    <h5>{release_date}</h5>
                </div>
                <p>
                    <span>
                        <strong>Overview: </strong>  
                    </span>
                    {overview.substring(0, 195)} ......
                </p>
                <div className="card_bottom">
                    <button onClick={handleClick}>More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
