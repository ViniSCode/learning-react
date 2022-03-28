import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { SignOutButton } from './../components/SignOutButton/index';

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
    <SignOutButton handleSignOut={handleSignOut} setIsAuth={setIsAuth}/>
  );
}
