import Home from './Pages/Home';

import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
