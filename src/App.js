import { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import { MobileMenu } from './components/MobileMenu/index';
import AuthContext from './contexts/AuthContext';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';
import { Profile } from './pages/Profile';

export function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuth } = useContext(AuthContext);

  return (
    <Router>
        <MobileMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/login" element={<Login />} />
        <Route path="/create" element={isAuth ? <CreatePost /> : <Login />} />
        <Route path="/profile" element={isAuth ? <Profile /> : <Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}