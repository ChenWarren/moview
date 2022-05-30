// Movie list card component
import { useRouter } from 'next/router'

const Card = ({
    imgUrl,
    m_name,
    overview,
    vote_rate,
    release_date,
    title,
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
