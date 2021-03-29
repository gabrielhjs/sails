
import React, { useContext, useState } from 'react';

import { Context } from '../../Context/AuthContext';
import history from '../history';
import { Container } from './style';

function initialState() {
  return { email: '', password: '' };
}

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const btnLogin = document.querySelector(".btn-login");

  btnLogin?.addEventListener("click", event => {
    event.preventDefault();
  })

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
    const form = document.querySelector("form");

    if (form) {
      form.classList.remove('form-hide')
      form.classList.remove('validate-error')

      if (token) {
        // call animation success
        form.classList.add("form-hide");
        localStorage.setItem('token', JSON.stringify(token));
        setTimeout(() => {
          history.push('/users');
        }, 300);
      }

      if (error) {
        setValues(initialState);
        setError(error.error)
        // call animation error
        form.classList.add("validate-error");
      }


    }
  }

  return (
    <Container>
      <div>
        <h1>Enter the Sails</h1>
        <div>
          <form>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={onChange}
              value={values.email}
            />


            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
            <div className="message-error">
              {error ? (
                <small>{error}</small>
              ) : <span>&nbsp;</span>}
            </div>
            <div>
              <button className="btn-login" type="button" onClick={onSubmit}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}