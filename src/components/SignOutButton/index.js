import { IoExitOutline } from 'react-icons/io5';
import { Container } from './styles';
export function SignOutButton({ handleSignOut, setIsAuth }) {
  
  return (
    <Container onClick={handleSignOut}>
      <IoExitOutline className="signOut-icon"/>
      <p>Sign out</p>
    </Container>
  );
}
