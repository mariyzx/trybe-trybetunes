import React from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ListAlbums from '../components/ListAlbums';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      artistInput: '',
      loading: false,
      clear: false,
      response: [],
    };
  }

  inputArtist = (e) => {
    const tamanho = e.target.value.length;

    if (tamanho >= 2) {
      this.setState({
        buttonDisabled: false,
        artistInput: e.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        artistInput: e.target.value,
      });
    }
  }

  fetchArtist = async () => {
    const { artistInput } = this.state;
    this.setState({ loading: true, clear: true });
    const response = await searchAlbumsAPI(artistInput);
    this.setState({ loading: false, response });
  }

  render() {
    const { buttonDisabled, artistInput, loading, clear, response } = this.state;
    return (
      <div data-testid="page-search" className="divSearch">
        <Header />
        {loading ? <Loading />
          : (
            <form>
              <h1>Procure o artista:</h1>
              <label htmlFor="artist">
                <input
                  type="text"
                  data-testid="search-artist-input"
                  value={ clear ? '' : artistInput }
                  onChange={ this.inputArtist }
                />
              </label>
              <button
                type="submit"
                data-testid="search-artist-button"
                disabled={ buttonDisabled }
                onClick={ this.fetchArtist }
                className="searchButton"
              >
                Pesquisar
              </button>
            </form>
          )}
        {(response.length > 0 && artistInput !== '')
          ? <ListAlbums { ...this.state } />
          : <p>Nenhum álbum foi encontrado</p>}
      </div>
    );
  }
}

export default Search;
