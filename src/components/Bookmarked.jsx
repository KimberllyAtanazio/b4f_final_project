import Link from 'next/link'
import styles from '@/styles/Profile.module.css';

export default function Bookmarked(){
    return (
<div className={styles.bookmarkedText}>
    <Link href={'/profile/bookmarked'} className={styles.bookmarkedLink}>Bookmarked</Link>
    <div className={styles.rightArrow}>
            <img
              src={'/icons/arrow-right-icon.svg'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
</div>
    );
}