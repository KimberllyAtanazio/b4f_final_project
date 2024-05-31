import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from '@/styles/Passport.module.css';

const getRandomPosition = (pageWidth, pageHeight) => {
  const stampWidth = 100; // Largura do carimbo
  const stampHeight = 100; // Altura do carimbo

  const maxLeft = pageWidth - stampWidth; // Limite máximo para a posição left
  const maxTop = pageHeight - stampHeight; // Limite máximo para a posição top

  return {
    top: `${Math.random() * maxTop}px`,
    left: `${Math.random() * maxLeft}px`,
  };
};

const PageFlip = forwardRef((props, ref) => {
  const bookRef = useRef();
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [stamps, setStamps] = useState({}); // State to hold stamps for each page
  const [showStampsContainer, setShowStampsContainer] = useState(false); // State to show/hide stamps container

  useImperativeHandle(ref, () => ({
    nextPage: () => {
      if (currentPageIndex < pages.length - 1) {
        setCurrentPageIndex(currentPageIndex + 1);
      }
    },
    previousPage: () => {
      if (currentPageIndex > 0) {
        setCurrentPageIndex(currentPageIndex - 1);
      }
    },
  }));

  useEffect(() => {
    // Fetch page data
    const fetchPages = async () => {
      const response = await fetch('/api/passport'); // Assuming your API endpoint is /api/pages
      const data = await response.json();
      setPages(data.pages);
    };

    fetchPages();
  }, []);

  const availableStamps = [
    '/passportAssets/portugal-stamp.svg',
    '/passportAssets/brasil-stamp.svg',
    '/passportAssets/china-stamp.svg',
    '/passportAssets/germany-stamp.svg',
    '/passportAssets/morocco-stamp.svg',
    '/passportAssets/japan-stamp.svg',
    // Add more stamp URLs as needed
  ];

  const handleAddStamp = (stamp) => {
    setStamps((prevStamps) => {
      const currentStamps = prevStamps[currentPageIndex] || [];
      return {
        ...prevStamps,
        [currentPageIndex]: [
          ...currentStamps,
          { url: stamp, position: getRandomPosition(354, 524) },
        ],
      };
    });
  };

  return (
    <div className={styles['container']}>
      <HTMLFlipBook width={354} height={524} ref={bookRef} >
        <div className={`${styles['page']}`}>
          <img src="/passportAssets/passportCover.svg" alt="Passport Cover" />
        </div>
        {pages.map((page, index) => (
          <div
            key={index}
            className={`page ${
              currentPageIndex === index ? styles['active-page'] : ''
            }`}
          >
            <h2>{page.title}</h2>
            <p>{page.content}</p>

            {/* Display stamps */}
            {(stamps[index] || []).map((stamp, stampIndex) => (
              <div
                key={stampIndex}
                className={`${styles.stamp}`}
                style={{
                  backgroundImage: `url(${stamp.url})`,
                  ...stamp.position,
                }}
              />
            ))}
          </div>
        ))}
      </HTMLFlipBook>
      <button
        onClick={() => setShowStampsContainer(!showStampsContainer)}
        className={styles['add-stamp-button']}
      >
        {showStampsContainer ? 'Hide Stamps' : 'Show Stamps'}
      </button>
      {showStampsContainer && (
        <div className={styles['stamps-container']}>
          {availableStamps.map((stamp, index) => (
            <img
              key={index}
              src={stamp}
              alt={`Stamp ${index + 1}`}
              className={styles['stamp-image']}
              onClick={() => handleAddStamp(stamp)}
            />
          ))}
        </div>
      )}
    </div>
  );
});

PageFlip.displayName = 'PageFlip';

export default PageFlip;
