import React, {Component} from "react";

export default class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;
        const imgUrl = video.snippet.thumbnails.default.url;


        return (
            <li onClick={() => this.props.onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}