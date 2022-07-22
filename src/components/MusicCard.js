import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
    };
  }

  componentDidMount() {
    this.returnFavs();
  }

  addFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({ loading: false });
  }

  removeFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await removeSong(song);
    this.setState({ loading: false });
  }

  handleFavs = ({ target }) => {
    if (target.checked) {
      this.setState({ checked: target.checked }, this.addFav);
    } else {
      this.setState({ checked: target.checked }, this.removeFav);
    }
  }

  returnFavs = async () => {
    const { song } = this.props;
    const favs = await getFavoriteSongs();
    const favsSongs = favs.some((msc) => msc.trackId === song.trackId);
    this.setState({ checked: favsSongs });
  }

  render() {
    const { song } = this.props;
    const { trackName, previewUrl, trackId } = song;
    const { loading, checked } = this.state;
    return (
      <div>
        {loading && <Loading /> }
        <div className="fav">
          <h4>{ trackName }</h4>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
          </audio>
          <label htmlFor="favorite" className="labelFav">
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
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MusicCard;
