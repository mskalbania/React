import React, {Component} from "react"

export default class VideoDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;

        if (!video) {
            return <div>Loading...</div>
        }

        const videoId = video.id.videoId;
        const url = "https://www.youtube.com/embed/" + videoId;

        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}/>
                </div>
                <div className="details">
                    <div className="font-weight-bold">{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }

}
