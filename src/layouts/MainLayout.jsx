import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from './MainLayout.module.scss'
import Modal from "../components/Modal/Modal.tsx";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <div className={styles.popup}>
                <div className={styles.popupInner}><Modal /></div>
            </div>
        </>
    );
};

export default MainLayout;