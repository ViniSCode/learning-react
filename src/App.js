import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';
import { Profile } from './pages/Profile';

export function App() {
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <Router>
        <Header isAuth={isAuth}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />


        // if user logged in load Profile.js page
        // otherwise load Login Page
        <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>} />
        <Route path="/create" element={isAuth ? <CreatePost /> : <Login setIsAuth={setIsAuth} />} />
        <Route path="/profile" element={isAuth ? <Profile setIsAuth={setIsAuth} /> : <Login setIsAuth={setIsAuth}/>} />
      </Routes>

      <Footer />
    </Router>
  );
}