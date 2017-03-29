'use strict'

import React from 'react'
import axios from 'axios'
import Albums from './Albums'
import Songs from './Songs'
import { convertAlbums } from '../utils'
import { Link } from 'react-router';
import NavLink from './NavLink.js';

class Artist extends React.Component {
    componentDidMount() {
        this.props.selectArtist(this.props.params.artistId);
        const artistId = this.props.params.artistId;

        axios.get(`/api/artists/${artistId}/albums/`)
            .then(res => res.data)
            .then(artistAlbum => this.props.onArtistAlbumLoad(convertAlbums(artistAlbum)));

        axios.get(`/api/artists/${artistId}/songs/`)
            .then(res => this.props.onArtistSongLoad(res.data))
    }

    // console.log('params.artistId in Artist: ', this.props.params.artistId)
    render() {
        const artist = this.props.artist;
        const children = this.props.children;
        const propsToPassToChildren = {
            albums: this.props.selectedArtistAlbums,
            songs: this.props.selectedArtistSongs,

        }

        return (
            <div>
                <h3>{artist.name}</h3>
                    <ul className='nav nav-tabs'>
                        <li><NavLink to={`/artists/${artist.id}/albums`}>ALBUMS</NavLink></li>
                        <li><NavLink to={`/artists/${artist.id}/songs`}>SONGS</NavLink></li>
                    </ul>
                    { children && React.cloneElement(children, propsToPassToChildren) }
            </div>
        )
    }
}

export default Artist
