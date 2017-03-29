'use strict'

import React from 'react'
import { Link } from 'react-router';
import NavLink from './NavLink.js';

class Artists extends React.Component {
    render() {
        console.log('props in Artists: ', this.props)
        return (
            <div>
                <h3>Artists</h3>
                    <div className="list-group">
                    {
                    this.props.artists.map(artist => {
                        return (
                        <div className="list-group-item" key={artist.id}>
                            {/* determine where to actually Link to later! */}
                            <NavLink to={`/artists/${artist.id}`}>{ artist.name }</NavLink>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Artists
