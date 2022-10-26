import React,{FC,useState} from "react";
import { 
    NavbarContainer, 
    LeftContainer,
    RightConteiner, 
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    // Logo,
    OpenLinksButton,
    NavbarLinkExtended
} from "../style/nav";
import { Link } from "react-router-dom";

export const Nav:React.FC<{}> =()=>{
    const [extendNavbar,setExtendNavbar]= useState<boolean>(false);
    
    return (
    <NavbarContainer >
        <NavbarInnerContainer>
        <LeftContainer>

        </LeftContainer>
        <RightConteiner>
            <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="posts">Posts</NavbarLink>
            <NavbarLink to="login">Login</NavbarLink>
            <NavbarLink to="register">Register</NavbarLink>    
            <OpenLinksButton onClick={()=>{
                        setExtendNavbar((curr)=>!curr);
                    }}
                >
                     {extendNavbar?<>&#10005;</>:<>&#8801;</>}
                </OpenLinksButton>
            </NavbarLinkContainer>    
        </RightConteiner>
        </NavbarInnerContainer>
        {extendNavbar&&(
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="posts">Posts</NavbarLinkExtended>
            <NavbarLinkExtended to="login">Login</NavbarLinkExtended>
            <NavbarLinkExtended to="register">Register</NavbarLinkExtended>
             
        </NavbarExtendedContainer>
        )}
    </NavbarContainer>
    );
}