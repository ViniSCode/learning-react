import { FcGoogle } from 'react-icons/fc';
import { Container } from './styles';

export function SignInWithGoogleButton() {
  return (
    <Container>
      <FcGoogle className="google-icon"/>
      <p>Sign in with Google</p>
    </Container>
  );
}
