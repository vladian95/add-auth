import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import '../src/styles/Home.module.css';

const Nav = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="navBar">
      <Link href={'/'} className="logo">
        Logo
      </Link>
      {!user && (
        <Link href={'/auth/login '} className="join">
          join now
        </Link>
      )}
      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <Link href={'/dashboard'}>AVATAR</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
