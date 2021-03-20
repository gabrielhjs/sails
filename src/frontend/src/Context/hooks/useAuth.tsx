import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../pages/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(event: any) {
    const request = await api.post('/login', event)
      .then(
        resp => {
          api.defaults.headers.Authorization = `Bearer ${resp.data.token}`;
          setAuthenticated(true);
          return { token: resp.data.token };
        }
      ).catch(
        function (error) {
          setAuthenticated(false);
          return { error: error.response.data };
        }
      );
      
    return request;
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}