import Link from 'next/link';

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center pr-[300px]">
      <ul className="flex gap-[70px]">
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a
                  className={`${
                    header ? 'text-primary' : 'text-primary'
                  } cursor-pointer hover:text-white transition font-light`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
