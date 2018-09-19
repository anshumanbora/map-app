import React, { Component } from 'react';
import ReactMapGL,{Popup,Marker} from 'react-map-gl';
import cities from './data/cities';
import Weather from "./Weather";
import axios from 'axios';
import './App.css'


const key = '561b7aecc5fc33566fc0d540ee8c3e07';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          viewport: {
              width: 1500,
              height: 750,
              latitude: 37.7577,
              longitude: -99,
              zoom: 3.5
          },
          popupInfo: null,
          weather: null

      };

  }

    /**
     *
     * @param current_city
     * @param i
     * @returns {*}
     */
    renderMarker = (current_city,i) =>{
      const {city,latitude,longitude} = current_city;
      return(
          <Marker key={i} longitude={longitude} latitude={latitude}>
            <div className='city-icon' onClick={() =>
                                {
                                    // console.log(this.state.weather.list[0]);
                                    if(this.state.weather) {
                                    for (let i = 0; i < this.state.weather.list.length ; i++) {
                                        // console.log(this.state.weather.list[i]);
                                        if(this.state.weather.list[i].id === current_city.id )
                                        this.setState({popupInfo:this.state.weather.list[i] })
                                    }
                                }
                                }
                            }
            >
                {city}</div>
          </Marker>
      )
    }

    /**
     *
     * @returns {null|*}
     */
    renderPopup(){
        const {city_info} = this.state;
        if(this.state.popupInfo) {
            // console.log(city_info,this.state.popupInfo);
        }

        return this.state.popupInfo &&(

          <Popup tipSize={5}
                 anchor="bottom"
                 longitude={this.state.popupInfo.coord.lon}
                 latitude={this.state.popupInfo.coord.lat}
                 onClose={() => this.setState({popupInfo: null})} >
              <Weather info={this.state.popupInfo}/>
          </Popup>
      )
    }

    /**
     *
     * @returns {string}
     */
    getAllId(){
        let ids = '';
        //Dynamically adding city IDs.
        cities.map((details)=>{
            ids+=details.id+','
        });
        //Stripping off the last ','
        ids = ids.slice(0,-1);
        return ids
    }

    /**
     *
     */
    componentDidMount(){

      console.log(ids);
      const ids = this.getAllId();


          axios.get('https://api.openweathermap.org/data/2.5/group?&appid=' + key + '&id=' + ids)
              .then((response) => {
                  this.setState({weather: response.data});
                  console.log(response);
              })
              .catch((error) => {
                  console.log(error)
              })

    }

    render() {
    return (

          <ReactMapGL mapboxApiAccessToken={"pk.eyJ1Ijoic2hhbmUtcGlvbmVlciIsImEiOiJjampyN2YwZ3MzeGQxM3JteGh6YWM3Yjg5In0.joFZOIVkzx9ZVpX5B0BsZA"}
              {...this.state.viewport}
              mapStyle="mapbox://styles/mapbox/dark-v9"
              onViewportChange={(viewport) => this.setState({viewport})}
          >
              {cities.map(this.renderMarker)}

              {this.renderPopup()}
          </ReactMapGL>




    );
  }
}

export default App;
