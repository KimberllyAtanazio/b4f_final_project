import styles from '../styles/Profile.module.css';
import userIcon from '@/../public/icons/ProfileIcon';

export default function Profile() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.profileData}>
          <div className={styles.profilePic}>
            <img src={userIcon} alt="User Icon" className={styles.icon} />
          </div>

          <p className={styles.profileName}>Maria</p>
          <p className={styles.profileEmail}>maria@gmail.com</p>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.rewardPoints}>Reward Points</div>
          <div className={styles.travelTrips}>Travel Trips</div>
          <div className={styles.bucketList}>Bucket List</div>
        </div>
      </div>
      <div className={styles.bookmarkedDiv}>Bookmarked</div>
      <div className={styles.tripsDiv}>Previous Trips</div>
      <div className={styles.settingsDiv}>Settings</div>
    </>
  );
}
