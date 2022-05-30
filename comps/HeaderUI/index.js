// Header UI
import { useRouter } from "next/router"
import MenuItem from "../MenuItem"
import { Categories } from "../../pages/index"

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
                        return <MenuItem key={item.id} menuText={item.menu} rout={item.rout}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeaderUI
