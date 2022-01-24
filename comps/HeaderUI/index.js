
import { useRouter } from "next/router"
import MenuItem from "../MenuItem"

import { Categories } from "../../pages"

const HeaderUI = () => {
    const router = useRouter()


    return (
        <div className="header_default">
            <div className="navbar">
                <img 
                    className="logo" src="/moview_logo.svg"
                    onClick={()=> router.push('/')}
                />

                <div className="menu">
                    { Categories.map((item) => {
                        return <MenuItem menuText={item.menu} rout={item.rout}/>
                    })}
                </div>

            </div>
        </div>
    )
}

export default HeaderUI
