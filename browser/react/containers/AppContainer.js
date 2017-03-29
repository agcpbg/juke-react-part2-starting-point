import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import { convertAlbum, convertAlbums } from '../utils';

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;

    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
    this.onArtistAlbumLoad = this.onArtistAlbumLoad.bind(this);
    this.onArtistSongLoad = this.onArtistSongLoad.bind(this);
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(album => this.onLoad(convertAlbums(album)));
    axios.get('/api/artists/')
      .then(res => {
        // console.log(res.data)
        this.setState({artists: res.data})
      })
  }

  onLoad (albums) {
    this.setState({
      albums: albums,
      // artists: artists
    });
  }

  onArtistAlbumLoad (albums) {
    this.setState({
      selectedArtistAlbums: albums,
      // artists: artists
    });
  }

  onArtistSongLoad(songs) {
    this.setState({selectedArtistSongs: songs})
  }

  selectAlbum (albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: convertAlbum(album)
      }));
  }

  deselectAlbum () {
    this.setState({ selectedAlbum: {}});
  }

  selectArtist (artistId) {
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({
        selectedArtist: artist})
      )
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
        {
          this.props.children &&
          React.cloneElement(this.props.children, {album: this.state.selectedAlbum, albums: this.state.albums, selectAlbum: this.selectAlbum, artists: this.state.artists, artist: this.state.selectedArtist, selectArtist: this.selectArtist, selectedArtistAlbums: this.state.selectedArtistAlbums, selectedArtistSongs: this.state.selectedArtistSongs, onArtistAlbumLoad: this.onArtistAlbumLoad, onArtistSongLoad: this.onArtistSongLoad})
          /*this.state.selectedAlbum.id ?
          <Album album={this.state.selectedAlbum} /> :
          <Albums albums={this.state.albums} selectAlbum={this.selectAlbum} />*/
        }
        </div>
        <Player />
      </div>
    );
  }
}
