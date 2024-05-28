import { Country } from '@/../public/icons/Country';
import styles from '../styles/Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingRotate}>
        <Country color={'#FFB235'} />
      </div>
    </div>
  );
}
