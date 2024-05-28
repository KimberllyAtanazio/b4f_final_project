import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Country } from '@/../public/icons/Country';
import { PassportIcon } from '@/../public/icons/PassportIcon';
import { CommunityIcon } from '@/../public/icons/CommunityIcon';
import { ProfileIcon } from '@/../public/icons/ProfileIcon';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/profile" className={styles.button}>
        <ProfileIcon color={'#3C1E42'} />
      </Link>

      <Link href="/country" className={styles.button}>
        <Country color={'#3C1E42'} />
      </Link>

      <Link href="/community" className={styles.button}>
        <CommunityIcon color={'#3C1E42'} />
      </Link>

      <Link href="/passport" className={styles.circle}>
        <PassportIcon color={'white'} />
      </Link>
    </div>
  );
}

// const [hoveredItem, setHovered] = useState(null);
// color={hoveredItem === "profile" ? "#3C1E42" : "#FFB235"}
