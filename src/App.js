import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Items from "./pages/Items"
import ItemDetails from "./pages/ItemDetails"
import Search from "./pages/Search"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App min-vh-100">
        <Router>
          <Header></Header>
          <Content>
            <Switch>
                <Route exact path="/">
                  <Search />
                </Route>
                <Route path="/items">
                  <Items />
                </Route>
                <Route path="/items/:id">
                  <ItemDetails />
                </Route>
            </Switch>
          </Content>
          <Footer></Footer>
        </Router>      
    </div>
  );
}

export default App;
