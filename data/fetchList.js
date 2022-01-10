// key: string, p: string

const fetchData = async (key, p) => {

    const BASE = 'https://api.themoviedb.org/3/movie/'
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+key+KEY+'&language=en-US&page='+p

    const res = await fetch(FETCH_URL)
    const json = await res.json()

    return json.results

}

export default fetchData
