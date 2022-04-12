import { IoExitOutline } from 'react-icons/io5';
import { Container } from './styles';
export function SignOutButton() {
  
  return (
    <Container>
      <IoExitOutline className="signOut-icon"/>
      <p>Sign out</p>
    </Container>
  );
}
