import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';

export function App() {
  return (
    <Router>
        <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />

        // if user logged in load Profile.js page
        // otherwise load Login Page
        <Route path="/profile" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}