import React, { Component } from 'react';
import ReactMapGL,{Popup,Marker} from 'react-map-gl';
import cities from './data/cities';
import Weather from "./WeatherDetails";
import axios from 'axios';
import './MapInterface.css'

export default class MapInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                //making the viewport responsive
                width: window.innerWidth,
                height: window.innerHeight,
                //approximately centering the map around north America
                latitude: 37.7577,
                longitude: -99,
                zoom: 2.5
            },
            //holds weather info about the current city
            popupInfo: null,
            //holds all weather info returned from API response
            weather: null
        };
    }
    /**
     * Dynamically creating cities from JSON data
     * @param current_city
     * @param i
     * @returns {*}
     */
    renderMarker = (current_city,i) => {
        const {city,latitude,longitude} = current_city;
        return(
            <Marker key={i} longitude={longitude} latitude={latitude}>
                <div className='city-icon'
                     //updates the popup component with current city's weather details
                     onClick={() =>
                    {
                        if(this.state.weather) {
                            for (let i = 0; i < this.state.weather.list.length ; i++) {
                                if(this.state.weather.list[i].id === current_city.id )
                                    this.setState({popupInfo:this.state.weather.list[i]})
                            }
                        }
                    }
                }
                >
                {city}</div>
            </Marker>
        )
    };

    /**
     * Creates a current city popup with data sourced from the state
     * @returns {null|XML}
     */
    renderPopup = () => {
        return this.state.popupInfo &&(
            <Popup tipSize={6}
                   anchor="top"
                   longitude={this.state.popupInfo.coord.lon}
                   latitude={this.state.popupInfo.coord.lat}
                   onClose={() => this.setState({popupInfo: null})}
            >
                <Weather info={this.state.popupInfo}/>
            </Popup>
        )
    };

    /**
     * Dynamically adding city IDs to prepare for API call.
     * @returns {string}
     */
    getIds = () => {
        let ids = '';
        cities.map((details)=>{
            ids+=details.id+','
        });
        //Stripping off the last ','
        ids = ids.slice(0,-1);
        return ids
    };

    /**
     * Making API call to fetch weather data and updating state.weather with
     * API response.
     */
    componentDidMount(){
        const api_key = process.env.REACT_APP_WEATHER_API_KEY;
        const ids = this.getIds();
        const api_prefix = 'https://api.openweathermap.org/data/2.5/group?&appid=';
        const api_url = api_prefix + api_key + '&id=' + ids;

        axios.get(api_url)
            .then((response) => {
                this.setState({weather: response.data});
            })
            .catch((error) => {
                console.error(error)
            })
    };

    /**
     * Method to detect click outside the popup box.
     * A click outside the popup box will close the currently
     * opened popup.
     */
    handleClick = () => {
        this.setState({popupInfo:null});
    };

    render(){
        const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const mapstyle = "mapbox://styles/mapbox/dark-v9";
        return (
                <div className="map">
                    <ReactMapGL mapboxApiAccessToken = {token}
                                {...this.state.viewport}
                                mapStyle = {mapstyle}
                                onViewportChange = {(viewport) => this.setState({viewport})}
                                onClick = {this.handleClick}
                    >
                        {cities.map(this.renderMarker)}
                        {this.renderPopup()}
                    </ReactMapGL>
                </div>
        );
    }
}


