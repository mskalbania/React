import React, {Component} from "react";

import VideoListItem from "./VideoListItem";

export default class VideoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem
                onVideoSelect={this.props.onVideoSelect}
                key={video.etag}
                video={video}/>
        });

        return (
            <ul className="list-group">
                {videoItems}
            </ul>
        );
    }
}
