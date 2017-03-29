'use strict'

import React from 'react'
import axios from 'axios'
import Albums from './Albums'
import Songs from './Songs'
import { convertAlbums } from '../utils'
import { Link } from 'react-router';
import NavLink from './NavLink.js';

class NotFound extends React.Component {

    render() {
        const artist = this.props.artist;
        const children = this.props.children;
        const propsToPassToChildren = {
            albums: this.props.selectedArtistAlbums,
            songs: this.props.selectedArtistSongs,

        }

        return (
            <div>
                <h3>Page not found. Please use the following links to search for albums or artists.</h3>
                    <ul className='nav nav-tabs'>
                        <li><NavLink to={`/albums`}>ALBUMS</NavLink></li>
                        <li><NavLink to={`/artists`}>Artists</NavLink></li>
                    </ul>
                    { children && React.cloneElement(children, propsToPassToChildren) }
            </div>
        )
    }
}

export default NotFound
