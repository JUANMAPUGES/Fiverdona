import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import SignUpAvatar from './pages/sign-up-avatar/SignUpAvatar';
import ServiceCreate from './pages/ServiceCreatePage/ServiceCreatePage';
import NotFound from './pages/not-found/NotFound';
import Footer from './components/shared/Footer/Footer';

import './index.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='register' element={<Register />} />
        <Route path='avatar' element={<SignUpAvatar />} />
        {/*  <Route path="services/:id" element={<Services />} /> */}
        <Route path='services' element={<ServiceCreate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
