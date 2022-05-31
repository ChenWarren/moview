// App bar for mobile screen
import Image from "next/image"
import CloseIcon from '../../public/close_icon.svg'
import MenuItem from "../MenuItem"
import Divider from "../Divider"
import { Categories } from "../../pages/index"

const HamburgerMenu = ({
  setShowing,
}) => {
  return (
    <div className="hamburger-container">
      <div className="row-flex-end">
        <Image src={CloseIcon} width={25} onClick={()=>setShowing(false)}/>
      </div>
      <div className="list-col">
        { Categories.map((item) => {
            return (
              <div className="list-item-container" key={item.id}>
                <MenuItem  menuText={item.menu} rout={item.rout} setHamburgmenuShowing={setShowing}/>
                <Divider/>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default HamburgerMenu