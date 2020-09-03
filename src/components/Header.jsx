import React from "react";
import {Container,Image,Navbar} from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

const Header = (props)=>{
    return (
        <header className={"header"}>
            <Container>
                <Navbar sticky={true}>
                    <Navbar.Brand href="#inicio">
                        <Image width="80" className="d-inline-block align-top" src={"https://http2.mlstatic.com/frontend-assets/ui-navigation/5.9.1/mercadolibre/logo__small@2x.png"}></Image>
                    </Navbar.Brand>
                    <SearchBar></SearchBar>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;