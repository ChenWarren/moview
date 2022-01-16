
import { useRouter } from "next/router"
import MenuItem from "../MenuItem"

const HeaderUI = () => {
    const router = useRouter()

    return (
        <div className="header_default">
            <div className="navbar">
                <img 
                    className="logo" src="moview_logo.svg"
                    onClick={()=> router.push('/')}
                />

                <div className="menu">
                    <MenuItem menuText="Popular" rout="/popular"/>
                    <MenuItem menuText="Trending" rout="/trending"/>
                    <MenuItem menuText="Top-Rated" rout="/top-rated"/>
                    <MenuItem menuText="Upcoming" rout="/upcoming"/>
                </div>

            </div>
        </div>
    )
}

export default HeaderUI
