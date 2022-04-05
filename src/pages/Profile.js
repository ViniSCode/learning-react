import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase-config';
import { SignOutButton } from './../components/SignOutButton/index';

const Container = styled.div`
    min-height: 100vh;
`

export function Profile({ setIsAuth }) {
  let navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then( () => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  }

  return (
    <Container>
      <SignOutButton handleSignOut={handleSignOut} setIsAuth={setIsAuth}/>
    </Container>
  );
}
