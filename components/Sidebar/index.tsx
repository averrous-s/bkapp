import React from 'react'
import {SidebarCloseIcon, SidebarContainer, SidebarIcon} from "./SidebarComponents";

const Sidebar = ({menuOpen} : any) => {
    return <>
        <SidebarContainer>
            <SidebarIcon>
                <SidebarCloseIcon/>
            </SidebarIcon>
        </SidebarContainer>
    </>
}

export default Sidebar