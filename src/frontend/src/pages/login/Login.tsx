
import React, { useContext, useState } from 'react';

import { Context } from '../../Context/AuthContext';

function initialState() {
  return { user: '', password: '' };
}

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
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
    const { error } = await handleLogin(values)
    console.log(error)
    setValues(initialState);
    
    setError(error)

  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
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
    </div>
    // <button type="button" onClick={handleLogin}>Entrar</button>
  );
}