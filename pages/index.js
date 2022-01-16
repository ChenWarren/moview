import Image from 'next/image'
import { useEffect, useState } from 'react'

import HeaderUI from '../comps/HeaderUI'
import ShowcaseUI from '../comps/ShowcaseUI'
import FooterUI from '../comps/FooterUI'
import ListUI from '../comps/ListUI'
import DetailUI from '../comps/DetailUI'

import fetchData from '../data/fetchList'


export default function Home() {

  const [showcaseData, setShowcaseData] = useState()
  const [popularList, setPopularList] = useState()

  // const fetchList = async()=> {
  //   const movielists = await fetchData('popular', '1')
  //   setPopularList(movielists)
  //   setShowcaseData(movielists[0])
  // }

  // useEffect(()=> {
  //   fetchList()
  // }, [])
  

  return (
    <div className='main-body-default'>
      <HeaderUI/>
      <div className='main-container'>
        {/* <DetailUI/> */}
        <ShowcaseUI list={showcaseData}/>
        <ListUI listText='Popular'/> 
        <ListUI listText='Trending'/> 
        <ListUI listText='Top-Rated'/> 
        <ListUI listText='Upcomeing'/> 
      </div>
      <FooterUI/>
    </div>
  )
}
