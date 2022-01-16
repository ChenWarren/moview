
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
                    <MenuItem menuText="Popular"/>
                    <MenuItem menuText="Trending"/>
                    <MenuItem menuText="Top-Rated"/>
                    <MenuItem menuText="Upcoming"/>
                </div>

            </div>
        </div>
    )
}

export default HeaderUI
