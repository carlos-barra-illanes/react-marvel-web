import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './Container';

import NavBar from './NavBar';
import Footer from './Footer';
import SliderBox from './SliderBox';
import Error from './Error';
import Event from './Event';
import Character from './Character';
import Comic from './Comic';
class Router extends Component {

    render() {
        return (<BrowserRouter>
           
            <NavBar />
            <Switch>
                <Route exact path="/" component={Container} />
                <Route exact path="/home" component={Container} />
                <Route exact path="/event/:id" component={Event} />
                <Route exact path="/character/:id" component={Character} />
                <Route exact path="/comics/:id" component={Comic} />
                <Route component={Error} />
            </Switch>
            <SliderBox />
            <Footer />




        </BrowserRouter>)

    }
}
export default Router;