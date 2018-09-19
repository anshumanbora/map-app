import React, {Component} from 'react';
import './Weather.css';

export default class Weather extends Component {
    /**
     *
     * @param props
     * @returns {string}
     */
    convertTemperature(props){
        let val =  (9/5)*(props.main.temp-273)+32;
        return Number.parseFloat(val).toPrecision(4);
    }

    /**
     *
     * @param temperature
     * @returns {string}
     */
    setTemperature(temperature){
        if(temperature<60){
            return 'temperature-cold'
        }
        if(temperature<80){
            return 'temperature-good'
        }
        return 'temperature-hot'

    }
    render() {
        const {info} = this.props;
        const temp = this.convertTemperature(info);
        let temperature_class = this.setTemperature(temp)+' temperature-box';
        const displayContent =
            <div className='text'>
                <div className='city-name'>{info.name}</div>
                <div className='content-text'>Description <span className='weather-description'>{info.weather[0].description}</span></div>
                <div className='content-text'>Wind Speed <span className='wind-speed'>{info.wind.speed} m/s</span></div>
                <div className='content-text'>Humidity <span className='humidity'>{info.main.humidity}%</span></div>
                <div className='content-text'><span className='temperature-current'> {temp} F</span></div>

            </div>


        let content = <div><div>{info.name}</div>{temp}</div>
        console.log(displayContent);
        return (

                <div className='weather-box'>
                    {displayContent}
                    <div className={temperature_class}></div>
                </div>


        );
    }
}