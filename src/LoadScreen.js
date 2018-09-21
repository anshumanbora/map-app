import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './LoadScreen.css';

export default class LoadingScreen extends Component{
    render(){
        return(
            <div className="row space-top">
                <div className="col-sm-0 col-lg-3 red"></div>
                <div className="col-sm-12 col-lg-6 text-center welcome-message">
                    Tap any of these pretty icons!
                <br/>
                <Link to="/mapinterface">
                    <img src={require("./resource/gifs/rainy-7.svg")}
                         width={100} height={100} title="Rain rain go away!"
                    />
                    <img src={require("./resource/gifs/day.svg")}
                         width={100} height={100} title="What a lovely day!"
                    />
                    <img src={require("./resource/gifs/thunder.svg")}
                         width={100} height={100} title="Thundering Typhoons!"
                    />
                    <img src={require("./resource/gifs/snowy-6.svg")}
                         width={100} height={100} title="Winter is coming!"
                    />
                </Link>
                </div>
                <div className="col-sm-0 col-lg-3 red"></div>

            </div>
        );
    }

}