import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {},
      songs: [],
    };
  }

  componentDidMount() {
    this.fetchMusics();
  }

  fetchMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const songs = await getMusics(id);
    const info = songs[0];
    this.setState({ info, songs });
  }

  render() {
    const { info, songs } = this.state;
    const { artistName, collectionName, artworkUrl100 } = info;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="divAlbum">
          <h1 data-testid="artist-name">{artistName}</h1>
          <h2 data-testid="album-name">{collectionName}</h2>
          <img src={ artworkUrl100 } alt={ collectionName } className="teste" />
          <ul>
            <li>
              {songs.filter((song) => song !== info)
                .map((song) => (<MusicCard
                  song={ song }
                  key={ song.trackId }
                />))}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Album;
