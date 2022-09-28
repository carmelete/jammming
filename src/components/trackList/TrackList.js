import React from "react";
import Track from '../track/Track';
import './TrackList.css';

class TrackList extends React.Component {
    render () {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => <Track track={track} key={track.id} />)
                }
            </div>
        )
    }
}

export default TrackList;
