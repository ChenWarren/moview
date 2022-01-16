import Image from 'next/image'
import { useEffect, useState } from 'react'

import HeaderUI from '../comps/HeaderUI'
import ShowcaseUI from '../comps/ShowcaseUI'
import FooterUI from '../comps/FooterUI'
import ListUI from '../comps/ListUI'
import DetailUI from '../comps/DetailUI'

import fetchData from '../data/fetchList'

import test_data from '../data/test_data'
import test_list from '../data/test_list'

export default function Home() {

  const [showcaseData, setShowcaseData] = useState(test_data)
  const [popularList, setPopularList] = useState(test_list)

  const fetchList = async()=> {
    const movielists = await fetchData('popular', '1')
    setPopularList(movielists)
    setShowcaseData(movielists[0])
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
        <ListUI lists={popularList} listText='Trending' loadRout='/trending'/> 
        <ListUI lists={popularList} listText='Top-Rated' loadRout='/top-rated'/> 
        <ListUI lists={popularList} listText='Upcoming' loadRout='/upcoming'/> 
      </div>
      <FooterUI/>
    </div>
  )
}
