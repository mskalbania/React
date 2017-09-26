import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather, logStateToConsole, clearState} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ""};

    }

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.term) {
            this.props.fetchWeather(this.state.term);
            this.setState({term: ''})
        }
    }

    render() {
        return (
            <div id="search-bar">
                <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                    <input
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        placeholder="Enter city name..."
                        className="form-control"
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
                <div id="dev-btns">
                    <label id="con-log-btn" className="btn btn-warning btn-sm"
                            onClick={() => this.props.logStateToConsole()}>Console log state
                    </label>
                    <label id="con-clear-btn" className="btn btn-danger btn-sm"
                            onClick={() => this.props.clearState()}>Clear state
                    </label>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather, logStateToConsole, clearState}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);