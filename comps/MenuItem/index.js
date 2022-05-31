//Clickable menu item component
import { useRouter } from "next/router"

const MenuItem = ({
    menuText='Menu',
    rout='/',
    setHamburgmenuShowing,
}) => {
    const router = useRouter()

    return (
        <div onClick={()=>{
                router.push(rout)
                if(setHamburgmenuShowing){
                    setHamburgmenuShowing(false)
                }
            }} 
            className="menu_item"
        >
            <p>{menuText}</p>
        </div>
    )
}

export default MenuItem
