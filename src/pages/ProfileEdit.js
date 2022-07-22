import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

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
      <div data-testid="page-profile-edit">
        <Header />
        <div className="editProfile">
          <h1>Editar perfil</h1>
          {loading && <Loading />}
          <form className="formEdit">
            <img src={ inputPic } alt={ inputName } className="imgProfile2" />
            <label htmlFor="changeName">
              Nome:
              <input
                name="inputName"
                type="text"
                value={ inputName }
                onChange={ this.handleChange }
                id="changeName"
                data-testid="edit-input-name"
              />
            </label>
            <label htmlFor="changeEmail">
              Email:
              <input
                type="text"
                name="inputEmail"
                value={ inputEmail }
                id="changeEmail"
                onChange={ this.handleChange }
                data-testid="edit-input-email"
              />
            </label>
            <label htmlFor="changeInfo">
              Descrição:
              <input
                type="text"
                name="inputInfo"
                value={ inputInfo }
                onChange={ this.handleChange }
                id="changeInfo"
                data-testid="edit-input-description"
              />
            </label>
            <label htmlFor="changePic">
              Foto
              <input
                type="text"
                name="inputPic"
                value={ inputPic }
                onChange={ this.handleChange }
                id="changePic"
                data-testid="edit-input-image"
              />
            </label>
            <div className="divButton">
              <button
                type="submit"
                data-testid="edit-button-save"
                disabled={ disabled }
                onClick={ this.updateInfo }
                className="updateButton"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default ProfileEdit;
