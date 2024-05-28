import { useState } from 'react';
import styles from '../styles/ShareLocationButton.module.css';
const ShareLocationButton = () => {
  const [locationUrl, setLocationUrl] = useState('');

  const getLocationAndShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
          setLocationUrl(url);

          if (navigator.share) {
            navigator
              .share({
                title: 'My Location',
                text: 'Check out my current location:',
                url,
              })
              .then(() => console.log('Location shared successfully'))
              .catch((error) => console.error('Error sharing location', error));
          } else {
            alert(`Copy this link to share your location: ${url}`);
          }
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={getLocationAndShare}>
        Share your location with other roammies!
        <img
          src="/shareimg.png"
          alt="Share Icon"
          width={15}
          height={15}
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default ShareLocationButton;
