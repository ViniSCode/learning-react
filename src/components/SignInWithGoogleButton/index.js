import { FcGoogle } from 'react-icons/fc';
import { Container } from './styles';

export function SignInWithGoogleButton({ signInWithGoogle, setIsAuth}) {
  return (
    <Container onClick={signInWithGoogle}>
      <FcGoogle className="google-icon"/>
      <p>Sign in with Google</p>
    </Container>
  );
}
