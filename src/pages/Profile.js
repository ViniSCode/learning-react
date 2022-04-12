import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../contexts/AuthContext';
import { auth } from '../firebase-config';
import { SignOutButton } from './../components/SignOutButton/index';

const Container = styled.div`
    min-height: 100vh;
`

export function Profile() {
  const { onLogOut } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then( () => {
      onLogOut();
      navigate("/login");
    });
  }

  return (
    <Container>
      <div onClick={handleSignOut}>
        <SignOutButton  />
      </div>
    </Container>
  );
}
