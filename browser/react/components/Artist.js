'use strict'

import React from 'react'
import axios from 'axios'
import Albums from './Albums'
import Songs from './Songs'
import { convertAlbums } from '../utils'

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
        const artistAlbums = this.props.selectedArtistAlbums;
        const artistSongs = this.props.selectedArtistSongs;

        return (
            <div>
                <h3>{artist.name}</h3>
                <Albums albums={artistAlbums} />
                <Songs songs={artistSongs} />
            </div>
        )
    }
}

export default Artist