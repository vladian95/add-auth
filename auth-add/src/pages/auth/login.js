import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  //sign in with google

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push('/dashboard');
    } else {
      console.log('/login');
    }
  }, [user]);

  return (
    <div className="login">
      <h2>Join Today</h2>
      <div>
        <h3 className="loginH3">Sign in with one of the providers</h3>
      </div>
      <div className="btnBox">
        <button onClick={GoogleLogin}>
          <FcGoogle />
          <span>Sign in with Google</span>
        </button>
        <button>
          <AiFillFacebook /> <span>Sign in with Facebook</span>
        </button>
      </div>
    </div>
  );
}
