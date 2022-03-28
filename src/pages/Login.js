import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config';
import { SignInWithGoogleButton } from './../components/SignInWithGoogleButton/index';

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
    <>
      <SignInWithGoogleButton signInWithGoogle={signInWithGoogle} setIsAuth={setIsAuth}/>
    </>
  );
}