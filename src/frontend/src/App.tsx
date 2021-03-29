import { Router } from 'react-router-dom';

import Routes from './pages/routes'
import history from './pages/history'
import GlobalStyle from './styles/global' 
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle/>
      </Router>
    </AuthProvider>
  );
}

export default App;
