import HeaderUI from '../comps/HeaderUI'
import ShowcaseUI from '../comps/ShowcaseUI'
import FooterUI from '../comps/FooterUI'
import ListUI from '../comps/ListUI'
import fetchData from '../data/fetchList'

export default function Home({
  popularList, 
  trendingList, 
  topRatedList, 
  upcomingList
}) {

  return (
    <div className='main-body-default'>
      <div className='main-container'>
        <ShowcaseUI list={popularList[0]}/>
        <ListUI lists={popularList} listText='Popular' loadRout='/popular'/>
        <ListUI lists={topRatedList} listText='Top-Rated' loadRout='/top_rated'/>
        <ListUI lists={trendingList} listText='Trending' loadRout='/now_playing'/>
        <ListUI lists={upcomingList} listText='Upcoming' loadRout='/upcoming'/>
      </div>
      <FooterUI/>
    </div>
  )
}

// Fetch server side props
export async function getServerSideProps(){
  const popular = await fetchData('popular', '1')
  const trending = await fetchData('now_playing', '1')
  const toprated = await fetchData('top_rated', '1')
  const upcoming = await fetchData('upcoming', '1')

  return { props: {
    popularList: popular.result,
    trendingList: trending.result,
    topRatedList: toprated.result,
    upcomingList: upcoming.result,
  }}
}

// Categories setting
export const Categories = [
  { id: 1, menu: 'Home', rout: '/', fetchKey: ''},
  { id: 2, menu: 'Popular', rout: '/popular', fetchKey: 'popular'},
  { id: 3, menu: 'Trending', rout: '/now_playing', fetchKey: 'now_playing'},
  { id: 4, menu: 'Top-Rated', rout: '/top_rated', fetchKey: 'top_rated'},
  { id: 5, menu: 'Upcoming', rout: '/upcoming', fetchKey: 'upcoming'},
]