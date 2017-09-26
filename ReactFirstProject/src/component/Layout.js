import React, {Component} from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const API_KEY = "AIzaSyBvQs_qkzoP01dWWB-OimBzTK0TaM1LS90";

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("React JS")
    }

    videoSearch(text) {
        if (text) {
            YTSearch({key: API_KEY, term: text},
                (data) => {
                    this.setState({
                        videos: data,
                        selectedVideo: data[0]
                    });
                }
            );
        }
    }

    xd(text){
        alert(text)
    }

    render() {

        const videoSearch = _.debounce((text) => {
            this.videoSearch(text)
        }, 500);

        return (
            <div>
                <SearchBar onSearchBoxChange={text => videoSearch(text)}/>
                <div className="row">
                    <div className="col-lg-7">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-lg-5">
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}
