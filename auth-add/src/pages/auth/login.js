import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../utils/firebase';

export default function Login() {
  //sign in with google

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

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
