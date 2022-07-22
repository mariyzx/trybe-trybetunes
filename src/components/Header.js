import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

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
      <header data-testid="header-component">
        {loading ? <Loading />
          : (
            <div className="header">
              <h3 data-testid="header-user-name" className="name">{ nome }</h3>
              <nav>
                <Link to="/search" data-testid="link-to-search">Home</Link>
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                >
                  Favoritas
                </Link>
                <Link to="/profile" data-testid="link-to-profile">Perfil</Link>

              </nav>
            </div>
          )}
      </header>
    );
  }
}

export default Header;
