import React from 'react';
import Songs from '../components/Songs';

const Album = (props) => {

  const album = props.album;

  // These are the props that this component would need to receive in order to play music!
  // They are optional, and commented out for now.
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs songs={album.songs} />
    </div>
  );
}

export default Album;
