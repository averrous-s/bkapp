import {Choice, MobileNavbarContainer} from "./MobileNavbarComponents";
import PreviewIcon from '@mui/icons-material/Preview';
import HomeIcon from '@mui/icons-material/Home';
import styled from "styled-components";
function MobileNavbar(){
    const choices = [{name:'lihat', icon: PreviewIcon},{name:'home', icon: HomeIcon}]
    return <>
        <MobileNavbarContainer>
            <Choice>
                <a href={'/lihat'}>lihat</a>
            </Choice>
            <Choice>
                <a href={'/'}>home</a>
            </Choice>
            <Choice>
                <a href={'/catat'}>catat</a>
            </Choice>
        </MobileNavbarContainer>
    </>
}


export default MobileNavbar