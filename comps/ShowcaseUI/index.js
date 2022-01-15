import { urlObjectKeys } from "next/dist/shared/lib/utils"
import { useState } from "react"


const ShowcaseUI = ({
    list={title: 'Spider-Man: No Way Home'},
    clickShowcase =()=>{console.log('clicked')},
}) => {

    const path = list.backdrop_path

    return (
        <div onClick={clickShowcase} className="showcase">
            <img className="show_image" src="https://www.themoviedb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg"/>
            {/* <img className="show_image" src={`${process.env.PUBLIC_URL+path}`}/> */}
            <div className="showcaseHead">
                <h1 className="showcaseH1">{list.title}</h1> 
            </div>
        </div>
    )
}

export default ShowcaseUI
