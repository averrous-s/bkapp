import React, {useState} from "react";
import styles from '../styles/Navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import {MenuOpen, MenuRounded} from "@mui/icons-material";
import MobileNavbar from "./MobileNavbar";

export default function Navbar(){
    return <>
        <div className={styles.container}>
            <ul className={styles.links}>
                <li>
                    <a href={'/'}>Home</a>
                </li>
                <li>
                    <a href={'/catat'}>Catat</a>
                </li>
                <li>
                    <a href={'/lihat'}>Lihat</a>
                </li>
            </ul>
        </div>

        <MobileNavbar/>
    </>
}