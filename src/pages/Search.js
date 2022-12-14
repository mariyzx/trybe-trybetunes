import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ListAlbums from '../components/ListAlbums';
import { MainSearch, NotFound } from '../styles/pages/Search';
import { Button } from '../styles/components/Button';
import { MainForm } from '../styles/components/Form';
import { Input } from '../styles/components/Input';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      artistInput: '',
      loading: false,
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
    this.setState({ loading: true });
    const response = await searchAlbumsAPI(artistInput);
    this.setState({ loading: false, response, artistInput: ' ' });
  }

  render() {
    const { buttonDisabled, artistInput, loading, response } = this.state;
    return (
      <MainSearch>
        <Header />
        {loading ? <Loading />
          : (
            <MainForm>
              <h1>Search the artist:</h1>
              <label htmlFor="artist">
                <Input
                  type="text"
                  placeholder='Artist, album, song..'
                  value={ artistInput }
                  onChange={ this.inputArtist }
                />
              </label>
              <Button
                type="submit"
                disabled={ buttonDisabled }
                onClick={ this.fetchArtist }
                className="searchButton"
              >
                Search
              </Button>
            </MainForm>
          )}
        {(response.length > 0 && artistInput !== '')
          ? <ListAlbums { ...this.state } />
          : <NotFound><p>Sorry, not found! :(</p></NotFound>}
      </MainSearch>
    );
  }
}

export default Search;
