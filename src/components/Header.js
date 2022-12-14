import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import { MainHeader } from '../styles/components/Header';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      nome: user.name,
      loading: false,
    });
  }

  render() {
    const { nome, loading } = this.state;
    return (
      <header>
        {loading ? <Loading />
          : (
            <MainHeader>
              <h3 data-testid="header-user-name" className="name">{ nome }</h3>
              <nav>
                <Link to="/search" data-testid="link-to-search">Home</Link>
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                >
                  Favorites
                </Link>
                <Link to="/profile" data-testid="link-to-profile">Profile</Link>

              </nav>
            </MainHeader>
          )}
      </header>
    );
  }
}

export default Header;
