import { useEffect, useState } from 'react'

import HeaderUI from '../comps/HeaderUI'
import ShowcaseUI from '../comps/ShowcaseUI'
import FooterUI from '../comps/FooterUI'
import ListUI from '../comps/ListUI'

import fetchData from '../data/fetchList'

// import test_data from '../data/test_data'
// import test_list from '../data/test_list'

export default function Home() {

  const [showcaseData, setShowcaseData] = useState()
  const [popularList, setPopularList] = useState()
  const [trendingList, setTrendingList] = useState()
  const [topRatedList, setTopRatedList] = useState()
  const [upcomingList, setUpcomingList] = useState()


  const fetchList = async()=> {
    const popular = await fetchData('popular', '1')
    const trending = await fetchData('now_playing', '1')
    const toprated = await fetchData('top_rated', '1')
    const upcoming = await fetchData('upcoming', '1')
 
    setPopularList(popular)
    setShowcaseData(popular[0])
    setTrendingList(trending)
    setTopRatedList(toprated)
    setUpcomingList(upcoming)
  }

  useEffect(()=> {
    fetchList()
  }, [])

  return (
    <div className='main-body-default'>
      <HeaderUI/>
      <div className='main-container'>
        {/* <DetailUI/> */}
        <ShowcaseUI list={showcaseData}/>
        <ListUI lists={popularList} listText='Popular' loadRout='/popular'/> 
        <ListUI lists={topRatedList} listText='Top-Rated' loadRout='/top_rated'/> 
        <ListUI lists={trendingList} listText='Trending' loadRout='/now_playing'/> 
        <ListUI lists={upcomingList} listText='Upcoming' loadRout='/upcoming'/> 
      </div>
      <FooterUI/>
    </div>
  )
}
