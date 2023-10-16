import Link from 'next/link';
import '../src/styles/Home.module.css';

const Nav = () => {
  return (
    <nav className="navBar">
      <Link href={'/'} className="logo">
        Logo
      </Link>

      <Link href={'/auth/login '} className="join">
        join now
      </Link>
    </nav>
  );
};

export default Nav;
