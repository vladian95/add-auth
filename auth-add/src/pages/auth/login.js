import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login() {
  //sign in with google
  return (
    <div className="login">
      <h2>Join Today</h2>
      <div>
        <h3 className="loginH3">Sign in with one of the providers</h3>
      </div>
      <div className="btnBox">
        <button>
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
