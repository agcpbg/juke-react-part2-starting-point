import React from 'react';
import Songs from '../components/Songs';
import NavLink from './NavLink';

class Album extends React.Component {

  componentDidMount() {
    this.props.selectAlbum(this.props.params.albumId);
  }

  // These are the props that this component would need to receive in order to play music!
  // They are optional, and commented out for now.
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;

  render () {
    const album = this.props.album;
    return (
      <div className="album">
        <div>
          <h3>{ album.name }
            <NavLink to="mailto:?subject=your%20subject">
              <button type="button" className="btn btn-default btn-xs" aria-label="Left Align">
                <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span>
              </button>
            </NavLink>
            </h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    )
  }
}

export default Album;
