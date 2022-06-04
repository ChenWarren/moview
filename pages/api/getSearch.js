//Handle fetch search movie by query
export default async function handler(req, res) {
    const { query, p} = req.query
    const BASE = process.env.SEARCH_URL + 'movie'
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL = BASE + KEY + '&language=en-US&page='+p+'&query='+query
    const response= await fetch(FETCH_URL)
    const json = await response.json()
    res.status(200).json(json)
} 