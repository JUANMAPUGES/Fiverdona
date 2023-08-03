import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import ServiceSearchPage from './pages/serviceSearchPage/ServiceSearchPage';
import LoginPage from './pages/loginPage/LoginPage';
import UserProfilePage from './pages/profile/UserProfilePage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ServiceCreate from './pages/ServiceCreatePage/ServiceCreatePage';
import NotFoundPage from './pages/notfound/NotFoundPage';
import Footer from './components/shared/Footer/Footer';
import CommentCreatePage from './pages/CommentCreatePage/CommentCreatePage';
import ServicePage from './pages/ServicePage/ServicePage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<ServiceSearchPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<UserProfilePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='services/service/:id' element={<ServicePage />} />
        <Route path='services' element={<ServiceCreate />} />
        <Route path='services/:id/comment' element={<CommentCreatePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
