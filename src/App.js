import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';

export function App() {
  const [isAuth, setIsAuth] = useState(false);

  let loginOrCreatePost = isAuth ? <CreatePost /> : <Login />;
  return (
    <Router>
        <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />


        // if user logged in load Profile.js page
        // otherwise load Login Page
        <Route path="/create" element={loginOrCreatePost} />
        <Route path="/profile" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>

      <Footer />
    </Router>
  );
}