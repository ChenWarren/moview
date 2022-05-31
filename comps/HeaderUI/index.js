// Header UI
import {useState} from 'react'
import { useRouter } from "next/router"
import Image from "next/image"
import HamburgerMenu from '../HamburgerMenu'
import MenuItem from "../MenuItem"
import { Categories } from "../../pages/index"
import MenuIcon from '../../public/burger_menu.svg'

const HeaderUI = ({

}) => {
    const router = useRouter()
    const [showMenu, setShowMenu]= useState(false)

    const handleClick = () => {
        setShowMenu(true)
    }

    return (
        <>
            {showMenu && <HamburgerMenu setShowing={setShowMenu}/>} 
            <div className="header_default">
                <div className='navbar-container'>
                    <div className="navbar">
                        <img 
                            className="logo" 
                            src="/moview_logo.svg"
                            onClick={()=> router.push('/')}
                        />
                        <img
                            className='logo-small' 
                            src='/moview_icon.svg'
                            onClick={()=> router.push('/')}
                        />
                        {!showMenu &&
                            <div className="hamburger" onClick={handleClick}>
                                <Image src={MenuIcon} width={30}/>
                            </div>
                        }
                        
                        <div className="menu">
                            { Categories.map((item) => {
                                return <MenuItem key={item.id} menuText={item.menu} rout={item.rout}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderUI
