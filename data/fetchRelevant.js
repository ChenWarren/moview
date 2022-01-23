// id = movie id, k = key word, (similar, recommendations, reviews, videos)

const fetchRelevant = async (id, k) => {

    const BASE = process.env.BASE_URL
    const KEY = '/'+k+'?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+id+KEY+'&language=en-US&page=1'

    const res = await fetch(FETCH_URL)
    if(!res.ok) throw Error('Did not receive data.')
    const json = await res.json()

    return json.results

}

export default fetchRelevant
