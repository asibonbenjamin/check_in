//importing the necessary files
import "./layout.scss";
import BottomNav from "components/navigation/bottomNav/BottomNav.jsx";
import TopNav from "../components/topNavigation/topNavigation";
import { Outlet } from "react-router-dom";


// function for the layout of the application
function Layout() {
    return (

        <div className="layout">

            {/* topNavigation socket */}
            <div className="topNavigation">
                <TopNav />
            </div>

            {/* content socket */}
            <div className="content">
                <Outlet />
            </div>

            {/* bottomNavigation socket */}
            <div className="bottomNavigation">
                <BottomNav />
            </div>

        </div>
    )
}

export default Layout;