import styles from '@/styles/Profile.module.css';
import ShareLocationButton from './ShareLocationButton';

export default function Profile() {
  return (
    <div className={styles.superDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.profileData}>
          <div className={styles.profilePic}>
            <img
              src={'/icons/profilePicture.png'}
              alt="User Icon"
              className={styles.icon}
            />
          </div>

          <p className={styles.profileName}>Maria</p>
          <p className={styles.profileEmail}>maria@gmail.com</p>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoData}>
            <div className={styles.rewardPoints}>Reward Points</div>
            <div className={styles.randomNumbers}>360</div>
          </div>
          <div className={styles.verticalLine}>
            <img
              src={'/icons/verticalLine.png'}
              alt="vertical line"
              className={styles.verticalLine}
            />
          </div>
          <div className={styles.profileInfoData}>
            <div className={styles.travelTrips}>Travel Trips</div>
            <div className={styles.randomNumbers}>238</div>
          </div>
          <div className={styles.verticalLine}>
            <img
              src={'/icons/verticalLine.png'}
              alt="vertical line"
              className={styles.verticalLine}
            />
          </div>
          <div className={styles.profileInfoData}>
            <div className={styles.bucketList}>Bucket List</div>
            <div className={styles.randomNumbers}>473</div>
          </div>
        </div>
      </div>
      
      <div>
        <ShareLocationButton />
      </div>

      <div className={styles.profileOptions}>
        <div className={styles.bookmarkedDiv}>
          <div className={styles.bookmarkedIcon}>
            <img
              src={'/icons/bookmarkIcon.png'}
              alt="User Icon"
              className={styles.icon}
            />
          </div>
          <div className={styles.bookmarkedText}>Bookmarked</div>

          <div className={styles.rightArrow}>
            <img
              src={'/icons/arrowRightIcon.png'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.previousTripsDiv}>
          <div className={styles.bookmarkedIcon}>
            <img
              src={'/icons/tripsIcon.png'}
              alt="trips Icon"
              className={styles.icon}
            />
          </div>
          <div className={styles.tripsDiv}>Previous Trips</div>
          <div className={styles.rightArrow}>
            <img
              src={'/icons/arrowRightIcon.png'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.settingsDiv}>
          <div className={styles.bookmarkedIcon}>
            <img
              src={'/icons/settingsIcon.png'}
              alt="trips Icon"
              className={styles.icon}
            />
          </div>
          <div className={styles.settingsTextDiv}>Settings</div>
          <div className={styles.rightArrow}>
            <img
              src={'/icons/arrowRightIcon.png'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
