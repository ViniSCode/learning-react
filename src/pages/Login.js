import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config';
import { SignInWithGoogleButton } from './../components/SignInWithGoogleButton/index';
import { SignOutButton } from './../components/SignOutButton/index';

export function Login({setIsAuth}) {
  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then( (result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate("/");
    })
  }

  const handleSignOut = () => {
    signOut(auth).then( () => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  }
  
  return (
    <>
      <SignInWithGoogleButton signInWithGoogle={signInWithGoogle} setIsAuth={setIsAuth}/>
      <SignOutButton handleSignOut={handleSignOut} setIsAuth={setIsAuth}/>
    </>
  );
}