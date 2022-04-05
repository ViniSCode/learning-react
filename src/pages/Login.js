import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, provider } from '../firebase-config';
import { SignInWithGoogleButton } from './../components/SignInWithGoogleButton/index';

const Container = styled.div`
  min-height: 100vh;
`

export function Login({setIsAuth}) {
  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then( (result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <Container>
      <SignInWithGoogleButton signInWithGoogle={signInWithGoogle} setIsAuth={setIsAuth}/>
    </Container>
  );
}