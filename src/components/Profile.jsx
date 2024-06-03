import styles from '@/styles/Profile.module.css';
import ShareLocationButton from './ShareLocationButton';
import Bookmarked from './Bookmarked';
import Link from 'next/link';


export default function Profile() {
  return (
    <div className={styles.superDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.profileData}>
          <div className={styles.profilePic}>
            <img
              src={'/icons/profile-picture.svg'}
              alt="User Icon"
              className={styles.icon}
            />
          </div>

          <p className={styles.profileName}>Hey, traveler girl!</p>
          <p className={styles.profileEmail}>What's the next trip?</p>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileInfoData}>
            <div className={styles.rewardPoints}>Reward Points</div>
            <div className={styles.randomNumbers}>360</div>
          </div>
          <div className={styles.verticalLine}>
            <img
              src={'/icons/verticalLine.svg'}
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
              src={'/icons/verticalLine.svg'}
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


        <div className={styles.previousTripsDiv}>
          <div className={styles.bookmarkedIcon}>
            <img
              src={'/icons/bookmarked-icon.svg'}
              alt="trips Icon"
              className={styles.icon}
            />
          </div>
          <div>
          <Link href="/profile/termsconditions" className={styles.bookmarkedLink}>
            Terms and Conditions
          </Link>
          </div>
          <div className={styles.rightArrow}>
            <img
              src={'/icons/arrow-right-icon.svg'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.settingsDiv}>
          <div className={styles.bookmarkedIcon}>
            <img
              src={'/icons/settings-icon.svg'}
              alt="trips Icon"
              className={styles.icon}
            />
          </div>
          <div>
          <Link href="/profile/privacy" className={styles.bookmarkedLink}>
          Privacy Policy
          </Link>
          </div>
          <div className={styles.rightArrow}>
            <img
              src={'/icons/arrow-right-icon.svg'}
              alt="arrow Icon"
              className={styles.icon}
            />
          </div>
        </div>
      </div>

      <div className={styles.developed}>
        <p>© Developed by: <span>Ana Carolina Moura, Eunice Gordon, Kimberlly Atanazio & Selma Marega.</span> </p>
      </div>

    </div>
  );
}
