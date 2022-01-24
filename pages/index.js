import { useEffect, useState } from 'react'

import HeaderUI from '../comps/HeaderUI'
import ShowcaseUI from '../comps/ShowcaseUI'
import FooterUI from '../comps/FooterUI'
import ListUI from '../comps/ListUI'

import fetchData from '../data/fetchList'


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
        { showcaseData?
          <ShowcaseUI list={showcaseData}/>
          :
          null 
        }
        {popularList?
          <ListUI lists={popularList} listText='Popular' loadRout='/popular'/>
          :
          null
        }
        {topRatedList? 
          <ListUI lists={topRatedList} listText='Top-Rated' loadRout='/top_rated'/>
          :
          null
        }
        {trendingList?
          <ListUI lists={trendingList} listText='Trending' loadRout='/now_playing'/>
          :
          null
        }
        {upcomingList? 
          <ListUI lists={upcomingList} listText='Upcoming' loadRout='/upcoming'/>
          :
          null
        } 
      </div>
      <FooterUI/>
    </div>
  )
}

export const Categories = [
  { id: 1, menu: 'Popular', rout: '/popular', fetchKey: 'popular'},
  { id: 2, menu: 'Trending', rout: '/now_playing', fetchKey: 'now_playing'},
  { id: 3, menu: 'Top-Rated', rout: '/top_rated', fetchKey: 'top_rated'},
  { id: 4, menu: 'Upcoming', rout: '/upcoming', fetchKey: 'upcoming'},
]