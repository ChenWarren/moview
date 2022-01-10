import MenuItem from "../MenuItem"

const HeaderUI = () => {
    return (
        <div className="header_default">
            <div className="navbar">
                <img className="logo" src="moview_logo.svg" />

                <div className="menu">
                    <MenuItem menuText="Popular"/>
                    <MenuItem menuText="Trending"/>
                    <MenuItem menuText="Top-Rate"/>
                    <MenuItem menuText="Upcoming"/>
                </div>

            </div>
        </div>
    )
}

export default HeaderUI
