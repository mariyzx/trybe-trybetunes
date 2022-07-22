import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      input: '',
      loading: false,
      redirect: false,
    };
  }

  verify = (e) => {
    const tamanho = e.target.value.length;
    const max = 3;

    if (tamanho >= max) {
      this.setState({
        buttonDisabled: false,
        input: e.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        input: e.target.value,
      });
    }
  }

  submit = async () => {
    const { input } = this.state;
    this.setState({ loading: true });
    await createUser({ name: input });
    this.setState({ loading: false, redirect: true });
  }

  render() {
    const { buttonDisabled, loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <div className="divLogin">
          <h1>Trybetunes!</h1>
          {loading ? <Loading />
            : (
              <form>
                <label htmlFor="name" className="nameLabel">
                  Insira seu nome:
                  <input
                    type="text"
                    data-testid="login-name-input"
                    onChange={ this.verify }
                  />
                </label>
                <button
                  type="submit"
                  data-testid="login-submit-button"
                  disabled={ buttonDisabled }
                  onClick={ this.submit }
                  className="submitLogin"
                >
                  Entrar
                </button>
              </form>
            )}
          <div>
            <footer>Desenvolvido por Mariana Werneck em 2022.</footer>
          </div>
          { redirect && <Redirect to="/search" /> }
        </div>
      </div>
    );
  }
}
export default Login;
