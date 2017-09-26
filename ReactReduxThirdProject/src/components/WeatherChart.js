import React, {Component} from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default class WeatherChart extends Component {

    constructor(props) {
        super(props);
    }

    average(data) {
        return _.round(_.sum(data) / data.length);
    }

    render() {
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.colour}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>
                    <span>Average: {this.average(this.props.data)}</span>
                </div>
            </div>
        );
    }
}
