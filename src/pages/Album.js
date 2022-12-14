import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { InfoDetails, MainDetails, MusicList } from '../styles/pages/Album';

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
      <div>
        <Header />
        <MainDetails>
          <h1 data-testid="artist-name">{artistName}</h1>
          <InfoDetails>
            <div>
              <h2 data-testid="album-name">{collectionName}</h2>
              <img src={ artworkUrl100 } alt={ collectionName } />
            </div>
            <MusicList>
                {songs.filter((song) => song !== info)
                  .map((song) => (<MusicCard
                    song={ song }
                    key={ song.trackId }
                  />))}
            </MusicList>
          </InfoDetails>
        </MainDetails>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Album;
