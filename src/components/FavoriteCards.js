import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { removeSong, addSong } from '../services/favoriteSongsAPI';

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
    const { trackName, previewUrl, trackId, artistName } = song;
    const { checked, loading } = this.state;
    return (
      <div>
        {loading && <Loading />}
        {checked && (
          <div className="songFav">
            <h4 className="songName">{ trackName }</h4>
            <h4>{ artistName }</h4>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
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
            </label>
          </div>
        )}
      </div>
    );
  }
}

FavoriteCards.propTypes = {
  song: PropTypes.array,
}.isRequired;

export default FavoriteCards;
