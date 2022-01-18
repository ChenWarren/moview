
const DetailUI = ({
    detail
}) => {

    return (
        <div className="detail_page">

            <div className="detail_page">

                <div className="backdrop">
                    <div className="mask1">
                        <img src={`https://www.themoviedb.org/t/p/original${detail.backdrop}`}/>
                        <h1>{detail.title}</h1>
                    </div>
                </div>

                <div className="detail_head">
                    <p>Rated: {detail.vote_rate}</p>
                    
                    <div className="genres">
                        { detail.genres.map((g) => <p  key={g.id}>{g.name}</p>
                        )}
                    </div>
                </div>

                <div className="overview">
                    <h4>Overview:</h4>
                    <p >{detail.overview}</p>

                    <div className="devider"></div>

                    <h4>Produced by: </h4>
                    <div className="production">
                        { detail.production.map((p) => <p key={p.id}>{p.name}</p>
                        )}
                    </div>

                    <div className="release">
                        <p>Release: {detail.release}</p>
                        <p>{detail.homepage}</p>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default DetailUI
