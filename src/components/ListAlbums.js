import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DivAlbums, MainAlbums } from '../styles/components/ListAlbums';

class ListAlbums extends React.Component {
  render() {
    const { response, artistInput } = this.props;
    return (
      <MainAlbums>
        <p className="result">
          Results of
          {' '}
          {artistInput}
          {' '}
        </p>
        <DivAlbums className="listAlbums">
          { response.map((album, index) => (
            <div key={ index } className="album">
              <img src={ album.artworkUrl100 } alt="Álbum" className="img" />
              <h2>{album.collectionName}</h2>
              <h3>{album.artistName}</h3>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                Mais
              </Link>
            </div>
          )) }
        </DivAlbums>
      </MainAlbums>
    );
  }
}

ListAlbums.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistInput: PropTypes.string.isRequired,
};

export default ListAlbums;
