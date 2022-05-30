//Movie category list UI
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Card from '../Card'

const LognList = ({
    lists=[],
    listText='List Title',
    displayMore='flex',
    loadRout = '/',
    wrap='card_wrap_l',
    isVisible,
    setIsVisible
}) => {
    const router = useRouter()
    const PATH = process.env.PUBLIC_URL
    const lastItemRef = useRef()
    const refCallBack = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    useEffect(()=>{
        console.log('load')
    },[])

    useEffect(()=>{
        const observer = new IntersectionObserver(refCallBack, options)
        if(lastItemRef.current) observer.observe(lastItemRef.current)

        return ()=> {
            if(lastItemRef.current) observer.observe(lastItemRef.current)
        }
    }, [lastItemRef, options])


    return (
        <div className='lists_wrap'>
            <div className='lists_header'>
                <h1>{listText}</h1>
                <div
                    onClick={()=> router.push(loadRout)}
                    className='load_more'
                    style={{display: displayMore}}
                >
                    Load more &#9654;&#9654;
                </div>
            </div>
            <div className={wrap}>
                {isVisible && wrap =='card_wrap_l' ? <p>Yes</p> : null}
                { lists.map((item, index) => {
                    if(lists.length === index +1 && wrap =='card_wrap_l'){
                        
                        return (
                            <div ref={lastItemRef}>
                                <Card key={item.id} imgUrl={PATH + item.poster_path} m_name={item.original_title} overview={item.overview} vote_rate={item.vote_average} release_date={item.release_date} title={item.title} id={item.id}/>
                            </div>
                        )
                    } else {
                        return (
                            <Card key={item.id} imgUrl={PATH + item.poster_path} m_name={item.original_title} overview={item.overview} vote_rate={item.vote_average} release_date={item.release_date} title={item.title} id={item.id}/> 
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default LognList
