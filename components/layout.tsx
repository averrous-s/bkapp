import React from "react";
import Navbar from "./navbar";
import MobileNavbar from "./MobileNavbar";

interface LayoutProps{
    children: any
}

export default function Layout({children}:LayoutProps){
    const styles = {
        container:{
            marginTop:"1rem",
            marginRight:"2rem",
            marginLeft:"2rem",
            height:"80vh",
        }
    }
    return <>
        <div>
            <Navbar/>
            <div style={styles.container}>
                {children}
            </div>
        </div>
    </>
}