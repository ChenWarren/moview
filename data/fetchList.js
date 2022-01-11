// key: string, p: string

const fetchData = async (key, p) => {

    const BASE = process.env.BASE_URL
    const KEY = '?api_key='+process.env.API_KEY
    const FETCH_URL =BASE+key+KEY+'&language=en-US&page='+p

    const res = await fetch(FETCH_URL)
    if(!res.ok) throw Error('Did not receive data.')
    const json = await res.json()

    return json.results

}

export default fetchData


