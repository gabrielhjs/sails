import { Router } from 'react-router-dom';

import Routes from './pages/routes'
import history from './pages/history'

import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
