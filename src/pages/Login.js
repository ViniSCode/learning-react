import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../contexts/AuthContext';
import { auth, provider } from '../firebase-config';
import { SignInWithGoogleButton } from './../components/SignInWithGoogleButton/index';

const Container = styled.div`
  min-height: 100vh;
`

export function Login() {
  const { onLogIn } = useContext(AuthContext);
  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then( (result) => {
      onLogIn();
      navigate("/");
    })
  }

  return (
    <Container>
      <div onClick={signInWithGoogle}>
        <SignInWithGoogleButton/>
      </div>
    </Container>
  );
}