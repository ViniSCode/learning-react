import { Link } from 'react-router-dom';
import { Avatar, Container, CreatePostButton, Logo, NavMenu } from './styles';
export function Header() {
 
  return (
    <Container>
      <nav>
        <Logo>
          <Link to="/">DevBlog</Link>
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
  );
}
