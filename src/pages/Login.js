import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import MainLogin from '../styles/pages/Login';
import Loading from '../components/Loading';
import logo from '../assets/images/logo.png';
import { MainForm } from '../styles/components/Form';
import { Button } from '../styles/components/Button';
import {Input} from '../styles/components/Input';

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
      <MainLogin>
        <img src={logo} alt="" />
        {loading ? <Loading />
          : (
            <MainForm>
              <Input
                type="text"
                onChange={ this.verify }
                placeholder="Insert your name.."
              />
              <Button
                type="submit"
                disabled={ buttonDisabled }
                onClick={ this.submit }
              >
                Login
              </Button>
            </MainForm>
          )}
        { redirect && <Redirect to="/search" /> }
      </MainLogin>
    );
  }
}
export default Login;
