import Passport from '@/components/Passport';
import NavBar from '@/components/NavBar';
import styles from '@/pages/passport.module.css'

export default () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Explore the world!</h1>
      </div>
      <div className={styles.passport}>
        <Passport />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
