import { useRouter } from "next/router"

const MenuItem = ({
    menuText='Menu',
    rout='/',
}) => {

    const router = useRouter()

    return (
        <div onClick={()=>{router.push(rout)}} className="menu_item">
            <p >{menuText}</p>
        </div>
    )
}

export default MenuItem
