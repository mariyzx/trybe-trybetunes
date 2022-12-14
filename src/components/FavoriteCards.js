import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { removeSong, addSong } from '../services/favoriteSongsAPI';
import { AiFillStar } from 'react-icons/ai';
import { CardMusic } from '../styles/pages/Album';

class FavoriteCards extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: true,
      loading: false,
    };
  }

  removeFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await removeSong(song);
    this.setState({ loading: false });
  }

  returnFavs = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({ loading: false });
  }

  handleFavs = ({ target }) => {
    if (!target.checked) {
      this.setState({ checked: target.checked }, this.removeFav);
    } else {
      this.setState({ checked: target.checked }, this.returnFavs);
    }
  }

  render() {
    const { song } = this.props;
    const { trackName, previewUrl, trackId, artistName, artworkUrl100 } = song;
    const { checked, loading } = this.state;
    return (
      <div>
        {loading && <Loading />}
        {checked && (
          <CardMusic>
            <img src={ artworkUrl100 } alt="" />
            <h3 className="songName">{ trackName }</h3>
            <h4>{ artistName }</h4>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              Your browser doesn't support the element!
              {' '}
              <code>audio</code>
            </audio>
            <label htmlFor="favorite" className="checkedFav">
              Favorita
              <input
                type="checkbox"
                id="favorite"
                data-testid={ `checkbox-music-${trackId}` }
                onChange={ this.handleFavs }
                name="favorite"
                checked={ checked }
              />
              <AiFillStar />
            </label>
          </CardMusic>
        )}
      </div>
    );
  }
}

FavoriteCards.propTypes = {
  song: PropTypes.array,
}.isRequired;

export default FavoriteCards;
