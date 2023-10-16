import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from './MainLayout.module.scss'
import Modal from "../components/Modal/Modal.tsx";
import {useState} from "react";

const MainLayout = () => {
    const [open, setOpen] = useState(true);
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            {open ? <div className={styles.popup}>
                <div className={styles.popupInner}><Modal closeModal={closeModal}/></div>
            </div> : null}

        </>
    );
};

export default MainLayout;