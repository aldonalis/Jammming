import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: '', artist: '', album: '', id: 1},
        {name: '', artist: '', album: '', id: 2},
        {name: '', artist: '', album: '', id: 3},
      ],
      playlistName: 'Jammming Playlist',
      playlistTracks: [
        {name: '', artist: '', album: '', id: 4},
        {name: '', artist: '', album: '', id: 5},
        {name: '', artist: '', album: '', id: 6}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    //this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }


addTrack(track) {
  let tracks = this.state.playListTracks;
  if (!tracks.includes(track.id)) {
    tracks.push(track.id);
    }
  this.setState({
    playListTracks: tracks
  })
}

removeTrack(track) {
    let tracks = this.state.playListTracks;
    if (tracks.includes(track.id)) {
      let position = tracks.indexOf(track.id);
      tracks.splice(position, 1);
    }
    this.setState({
      playListTracks: tracks
    })
}

/*updatePlaylistName(name) {
  this.setState({
    playlistName: name
  })
}*/

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              //onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
