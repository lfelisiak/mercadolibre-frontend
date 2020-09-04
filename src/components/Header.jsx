import React from "react";
import {Container,Image,Navbar} from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import logo from "../assets/Logo_ML.png";
const Header = (props)=>{
    return (
        <header className={"header"}>
            <Container>
                <Navbar sticky={true}>
                    <Navbar.Brand href="#inicio">
                        <Image width="80" className="d-inline-block align-top" src={logo}></Image>
                    </Navbar.Brand>
                    <SearchBar></SearchBar>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;