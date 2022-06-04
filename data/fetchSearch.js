
const fetchSearch = async (qr, p) => {
    const BASE = process.env.SEARCH_URL + 'movie'
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL = BASE + KEY + '&language=en-US&page='+p +'query='+qr
    const res = await fetch(FETCH_URL)
    console.log(FETCH_URL)
    if(!res.ok) throw Error('Did not receive data.')
    const json = await res.json()
    return json
}
export default fetchSearch