
const MenuItem = ({
    menuText='Menu',
    handleClick=()=>{},
}) => {
    return (
        <div className="menu_item">
            <p onClick={handleClick}>{menuText}</p>
        </div>
    )
}

export default MenuItem
