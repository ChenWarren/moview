// id: string

const fetchDetail = async (id) => {

    const BASE = process.env.BASE_URL
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+id+KEY+'&language=en-US'

    const res = await fetch(FETCH_URL)
    const json = await res.json()

    const data = new MovieDetail(json.id, json.title, json.overview, json.backdrop_path, json.genres, json.homepage, json.production_companies, json.release_date, json.vote_average)

    return data

}

export default fetchDetail

export class MovieDetail {
    constructor(id, title, overview, backdrop, genres=[], homepage, production=[], release, vote_rate){
        this.id = id
        this.title = title
        this.overview = overview
        this.backdrop = backdrop
        this.genres = genres
        this.homepage = homepage
        this.production = production
        this.release = release
        this.vote_rate = vote_rate
    }
}