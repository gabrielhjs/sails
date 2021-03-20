
import React, { useContext, useState } from 'react';

import { Context } from '../../Context/AuthContext';
import history from '../../pages/history';
import { Container } from './style';

function initialState() {
  return { email: '', password: '' };
}

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);

  function onChange(event: any) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  async function onSubmit(event: any) {
    event.preventDefault();
    const { token, error } = await handleLogin(values)

    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      history.push('/users');
    }

    if (error) {
      setValues(initialState);
      setError(error.error)
    }

  }

  return (
    <div className="user-login">
      <Container>
        <h1 className="user-login__title">Acessar o Sistema</h1>
        <form>
          <div className="user-login__form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={onChange}
              value={values.email}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          {error && (
            <div className="user-login__error">{error}</div>
          )}
          <button type="button" onClick={onSubmit}>Entrar</button>

        </form>
    </Container>
    </div>
    // <button type="button" onClick={handleLogin}>Entrar</button>
  );
}