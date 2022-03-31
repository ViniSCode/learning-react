import { BiUserCircle } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { auth } from '../../firebase-config';
import { Avatar, Container, CreatePostButton, Logo, NavMenu } from './styles';

export function Header({isAuth, setMenuVisible, menuVisible}) {
  return isAuth ? 
  (
    <Container  isMenuVisible={menuVisible}>
      <nav>
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt="Logo devblog" />
          </Link>
        </Logo>

          <FiMenu onClick={() => setMenuVisible(true)} className="menuOpen" isMenuVisible={menuVisible}/>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/create">
            <CreatePostButton>Create Post</CreatePostButton>
          </Link>
          <Link to="/profile">
            <Avatar>
              <img src={auth.currentUser.photoURL} />  
            </Avatar>  
          </Link> 
        </NavMenu>
      </nav>
    </Container>
  ) :
  (
    <Container isMenuVisible={menuVisible}>
      <nav>
          <Link to="/">
            <img src={LogoImg} alt="Logo devblog" />
          </Link>

          <FiMenu onClick={() => setMenuVisible(true)} className="menuOpen"/>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/create">
            <CreatePostButton>Create Post</CreatePostButton>
          </Link>
          <Link to="/profile">
            <Avatar>
              <BiUserCircle className='login-icon'/>
            </Avatar>  
          </Link> 
        </NavMenu>
      </nav>
    </Container>
  );
}
