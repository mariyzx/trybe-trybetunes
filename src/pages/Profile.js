import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import { MainProfile } from '../styles/pages/Profile';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      user: {
      },
    };
  }

  componentDidMount() {
    this.returnUser();
  }

  returnUser = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({ loading: false, user, user: { image:  'https://iev.com.br/wp-content/uploads/2020/03/the-office-2-1.jpg'
  } });
  }

  render() {
    const { loading, user } = this.state;
    const { description, email, image, name } = user;
    return (
      <div>
        <Header />
        <MainProfile>
          <h1>Profile</h1>
          {loading && <Loading />}
          <Link to="/profile/edit">Edit Profile</Link>
          <img
            src={ image }
            width="400px"
            alt={ name }
          />
          <div className="info">
            <h4>
              Name:
              {' '}
              {name}
            </h4>
            <h5>
              Email:
              {' '}
              {email}
            </h5>
            <h4>
              Description:
              {' '}
              {description}
            </h4>
          </div>
        </MainProfile>
      </div>
    );
  }
}

export default Profile;
