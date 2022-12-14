import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';
import { MainEdit, MainProfile } from '../styles/pages/Profile';
import { Input } from '../styles/components/Input';
import { Button } from '../styles/components/Button';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      disabled: true,
      inputName: '',
      inputEmail: '',
      inputInfo: '',
      inputPic: '',
    };
  }

  componentDidMount() {
    this.returnUser();
  }

  returnUser = async () => {
    this.setState({ loading: true });
    const userInfo = await getUser();
    this.setState({ loading: false,
      inputName: userInfo.name,
      inputEmail: userInfo.email,
      inputInfo: userInfo.description,
      inputPic: userInfo.image }, this.submitButton);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value }, this.submitButton);
  }

  submitButton = () => {
    const { inputName, inputEmail, inputInfo, inputPic } = this.state;
    if (inputName !== ''
    && inputEmail !== ''
    && inputInfo !== ''
    && inputPic !== '') {
      this.setState({ disabled: false });
    }
  }

  updateInfo = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { inputName, inputEmail, inputInfo, inputPic } = this.state;
    const { history } = this.props;
    const user = { name: inputName,
      image: inputPic,
      email: inputEmail,
      description: inputInfo };
    updateUser(user);
    this.setState({ loading: false });
    history.push('/profile');
  }

  render() {
    const { loading, disabled } = this.state;
    const { inputName, inputEmail, inputInfo, inputPic } = this.state;
    return (
      <div>
        <Header />
        <MainProfile>
          <h1>Edit Profile</h1>
          {loading && <Loading />}
          <MainEdit>
            <img src={ inputPic } alt="Profile" />
            <label htmlFor="changeName">
              Name:
              <Input
                name="inputName"
                type="text"
                value={ inputName }
                onChange={ this.handleChange }
                id="changeName"
              />
            </label>
            <label htmlFor="changeEmail">
              Email:
              <Input
                type="text"
                name="inputEmail"
                value={ inputEmail }
                id="changeEmail"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="changeInfo">
              Description:
              <Input
                type="text"
                name="inputInfo"
                value={ inputInfo }
                onChange={ this.handleChange }
                id="changeInfo"
              />
            </label>
            <label htmlFor="changePic">
              Profile pic path:
              <Input
                type="text"
                name="inputPic"
                value={ inputPic }
                onChange={ this.handleChange }
                id="changePic"
              />
            </label>
              <Button
                type="submit"
                disabled={ disabled }
                onClick={ this.updateInfo }
              >
                Save
              </Button>
          </MainEdit>
        </MainProfile>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default ProfileEdit;
