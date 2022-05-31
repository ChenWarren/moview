//Handle get list request
export default async function handler(req, res) {
    const {cat, p} = req.query
    const BASE = process.env.BASE_URL
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+cat+KEY+'&language=en-US&page='+p
    const response = await fetch(FETCH_URL)
    const json = await response.json()
    res.status(200).json({ result: json.results, page: json.page, total: json.total_pages })
}