import React from 'react';
import FavoriteCards from '../components/FavoriteCards';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import { DivFavorites } from '../styles/pages/Favorites';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favs: [],
    };
  }

  componentDidMount() {
    this.returnFavs();
  }

  returnFavs = async () => {
    this.setState({ loading: true });
    const favsSongs = await getFavoriteSongs();
    this.setState({ loading: false, favs: favsSongs });
  }

  render() {
    const { loading, favs } = this.state;
    return (
      <DivFavorites>
        <Header />
        <h1 className="titleFavs">Favoritas</h1>
        <div className="divFavorites">
          {loading ? <Loading />
            : favs.map((msc) => <FavoriteCards song={ msc } key={ msc.trackId } />) }
        </div>
      </DivFavorites>
    );
  }
}

export default Favorites;
