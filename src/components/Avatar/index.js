import { BiUserCircle } from 'react-icons/bi';
import { Container } from './styles';

export function Avatar(props) {
  const username = props.post.name;
  const userImage = props.post.userImage ? props.post.userImage : '';

  return (
    <Container>
      {
        userImage ? <img src={userImage} alt="" />
        : <BiUserCircle className='login-icon'/>
      }
      <p>{username}</p>
    </Container>
  )
}