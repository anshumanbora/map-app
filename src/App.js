import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import MapInterface from "./MapInterface";
import LoadingScreen from "./LoadScreen";

export default class App extends Component {

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LoadingScreen} />
                    <Route path="/mapinterface" component={MapInterface} />
                </div>
            </BrowserRouter>
        );

    }
}

