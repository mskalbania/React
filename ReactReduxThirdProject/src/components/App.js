import React from "react";
import {Component} from "react";
import SearchBar from "../containers/SeachBar";
import WeatherList from "../containers/WeatherList";

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}
