import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      user: {},
    };
  }

  componentDidMount() {
    this.returnUser();
  }

  returnUser = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    const { description, email, image, name } = user;
    return (
      <div data-testid="page-profile">
        <Header />
        <div className="divProfile">
          <h1>Perfil</h1>
          {loading && <Loading />}
          <Link to="/profile/edit">Editar perfil</Link>
          <img
            data-testid="profile-image"
            src={ image }
            alt={ name }
            className="imgProfile"
          />
          <div className="info">
            <h4>
              Nome:
              {' '}
              {name}
            </h4>
            <h5>
              Email:
              {' '}
              {email}
            </h5>
            <h4>
              Descrição:
              {' '}
              {description}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
