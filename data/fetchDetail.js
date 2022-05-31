// fetch movie details
// id: string
const fetchDetail = async (id) => {
    const BASE = process.env.BASE_URL
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+id+KEY+'&language=en-US'
    const res = await fetch(FETCH_URL)
    const json = await res.json()
    return json
}
export default fetchDetail
