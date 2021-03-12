import React, { useState, useContext } from 'react';
import { Container } from './style'
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context/AuthContext'

function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }: any) {
    if (user === 'admin' && password === 'admin') {
        return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
}

const UserLogin: React.FC = () => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    // const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event: any) {
        const { value, name } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event: any) {
        event.preventDefault();

        const { token, error }: any = login(values);

        if (token) {
            // setToken(token);
            return history.push('/');
        }

        setError(error);
        setValues(initialState);
    }

    return (
        <div className="user-login">
            <h1 className="user-login__title">Acessar o Sistema</h1>
            <form onSubmit={onSubmit}>
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
                <button
                    type="submit"
                    // theme="contained-green"
                    className="user-login__submit-button"
                    // rounded
                >
                    Entrar
          </button>
            </form>
        </div>
    )

}

export default function Login() {
    const { authenticated, handleLogin } = useContext(Context);

    return <button type="button" onClick={handleLogin}>Entrar</button>
}



// export default UserLogin;