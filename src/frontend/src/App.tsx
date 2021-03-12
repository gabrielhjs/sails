import GlobalStyles from '../src/styles/global';
import Login from './pages/login/Login';
import { Router } from 'react-router-dom';

import Routes from './pages/routes'
import history from './pages/history'

import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        {/* <Login /> */}
        <Routes />
        <GlobalStyles />
      </Router>
    </AuthProvider>
  );
}

export default App;
