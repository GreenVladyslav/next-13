import Link from 'next/link';
import { FC, ReactNode } from 'react';

type layoutProps = {
  children: ReactNode;
};

const AboutLayout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
// children - соседние страниці
// layout - можно создавать неограниченое количество
