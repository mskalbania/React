import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from "../components/WeatherChart";
import MiniMap from "../components/MiniMap";

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr>
                <td>
                    <MiniMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/>
                </td>
                <td>
                    <WeatherChart data={temps} colour="blue"/>
                </td>
                <td>
                    <WeatherChart data={pressures} colour="orange"/>
                </td>
                <td>
                    <WeatherChart data={humidity} colour="black"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div id="weather-list">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature [°C]</th>
                        <th>Pressure [hPa]</th>
                        <th>Humidity [%]</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(city => this.renderWeather(city))}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList)