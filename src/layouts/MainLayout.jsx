import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;