import React, {Component} from 'react';
import './WeatherDetails.css';

export default class Weather extends Component {
    /**
     * Converting temperature from Kelvin to Fahrenheit
     * @param props
     * @returns {string}
     */
    convertTemperature = (props) => {
        let val =  (9/5)*(props.main.temp-273)+32;
        return Number.parseFloat(val).toPrecision(4);
    };
    /**
     * Method to determine the color of the temperature
     * indicator band on the weather details popup.
     * The indicator band shows blue for really cold
     * weather, green for a mild weather and red for
     * hot weather.
     * @param temperature
     * @returns {string}
     */
    setTemperature = (temperature) => {
        if(temperature<60){
            return 'temperature-cold'
        }
        if(temperature<80){
            return 'temperature-good'
        }
        return 'temperature-hot'
    };
    render() {
        const {info} = this.props;
        const temp = this.convertTemperature(info);
        const temperature_class = this.setTemperature(temp)+' temperature-box';
        const displayContent =
            <div className='text'>
                <div className='city-name'>{info.name}
                </div>
                <div>Description&nbsp;
                    <span className='weather-info'>
                        {info.weather[0].description}</span>
                </div>
                <div>Wind Speed&nbsp;
                    <span className='weather-info'>{info.wind.speed} m/s</span>
                </div>
                <div>Humidity&nbsp;
                    <span className='weather-info'>{info.main.humidity}%</span>
                </div>
                <div>
                    <span className='temperature-current'> {temp} F</span>
                </div>
            </div>;
        return (
            <div className='weather-box'>
                {displayContent}
                <div className={temperature_class}></div>
            </div>
        );
    }
}