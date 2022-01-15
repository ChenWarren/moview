import test_data from '../../data/test_data'

const Card = ({
    imgUrl = test_data.imgUrl,
    m_name= test_data.m_name,
    handleClick=()=>{console.log('card')},
    overview= test_data.overview,
    vote_rate= test_data.vote_rate,
    release_date=test_data.release_date,
    title=test_data.title,
}) => {

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
