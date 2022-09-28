import React from "react";
import TrackList from '../trackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={ this.props.searchResults }/>
            </div>
        )
    }
}

export default SearchResults;
