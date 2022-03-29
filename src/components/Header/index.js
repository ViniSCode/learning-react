import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { Avatar, Container, CreatePostButton, Logo, NavMenu } from './styles';

export function Header({isAuth}) {
 
  return isAuth ? 
  (
    <Container>
      <nav>
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt="Logo devblog" />
          </Link>
        </Logo>

        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/create">
            <CreatePostButton>Create Post</CreatePostButton>
          </Link>
          <Link to="/profile">
            <Avatar>
              <img src="https://www.github.com/viniscode.png" alt="profile image" />  
            </Avatar>  
          </Link> 
        </NavMenu>
      </nav>
    </Container>
  ) :
  (
    <Container>
      <nav>
          <Link to="/">
            <img src={LogoImg} alt="Logo devblog" />
          </Link>

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
