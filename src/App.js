import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Miapp from './components/Miapp';

import ProtectedRoute from './components/utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

function App() {

  const [user, setUser] = useLocalStorage('user');

  return (
    <BrowserRouter>
      <div className="container mt-5 mx-auto">
        <Routes>
            <Route element={<ProtectedRoute canActivate={user} redirectPath='/login' />}>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='miapp' element={<Miapp />} />
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
