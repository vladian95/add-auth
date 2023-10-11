import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href={'/auth/login'}>Logo</Link>
      <ul>
        <Link href={'/'}>join now</Link>
      </ul>
    </div>
  );
};

export default Nav;
