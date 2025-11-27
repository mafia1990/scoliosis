"use client"
// components/BookFlip.js
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './ImageBook.module.css';

const BookFlip = () => {
  const bookRef = useRef(null);
  const [h, setH] = useState(600);
  const [w, setW] = useState(700);
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (!bookRef.current) return;

    const interval = setInterval(() => {
      if (!bookRef.current?.pageFlip) return;

      const api = bookRef.current.pageFlip();
      if (!api) return;
      
      if (document.body.clientWidth < 600) {
        setW(document.body.clientWidth);
      }
      
      setH(document.body.clientHeight);
      clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [bookRef]);

  const imagePages = [
    { id: 1, image: '/images/1.png', title: 'Scoliosis Sisterhood' },
    { id: 2, image: '/images/44.webp', title: 'Scoliosis Sisterhood' },
    { id: 3, image: '/images/3.webp', title: 'Scoliosis Sisterhood' },
    { id: 4, image: '/images/45.jpg', title: 'Scoliosis Sisterhood' },
    { id: 5, image: '/images/5.webp', title: 'Scoliosis Sisterhood' },
    { id: 6, image: '/images/6.png', title: 'Scoliosis Sisterhood' },
    { id: 7, image: '/images/7.webp', title: 'Scoliosis Sisterhood' },
    { id: 8, image: '/images/8.webp', title: 'Scoliosis Sisterhood' },
    { id: 9, image: '/images/9.webp', title: 'Scoliosis Sisterhood' },
    { id: 10, image: '/images/10.webp', title: 'Scoliosis Sisterhood' },
    { id: 11, image: '/images/11.webp', title: 'Scoliosis Sisterhood' },
    { id: 12, image: '/images/12.webp', title: 'Scoliosis Sisterhood' },
  ];

  return (
    <div className={styles.bookContainer}>
      <HTMLFlipBook
        key={h}  
        ref={bookRef}
        width={w}
        height={h}
        size="stretch"
        minWidth={300}
        maxWidth={800}
        minHeight={200}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        usePortrait={true}
        singlePage={true}
        className={styles.flipBook}
        flippingTime={1000}
        startPage={0}
        drawShadow={false}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={false}
        disableFlipByClick={false}
      >
        {imagePages.map((page, index) => (
          <div  
            key={page.id} 
            className={`${styles.page} ${styles.realPage}`}
            data-page-number={index + 1}
          >
            <div className={styles.pageContent}>
              <div className={styles.imageContainer}>
                <img 
                  src={page.image} 
                  alt={page.title}
                  className={styles.responsiveImage}
                />
                
                {/* دکمه زوم */}
                <button 
                  className={styles.zoomButton}
                  onClick={() => setZoomImage(page.image)}
                >
                  🔍
                </button>
              </div>
              
              <div className={styles.pageNumber}>
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Overlay زوم */}
      {zoomImage && (
        <div 
          className={styles.zoomOverlay}
          onClick={() => setZoomImage(null)}
        >
          <img 
            src={zoomImage}
            alt="Zoomed view"
            className={styles.zoomedImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default BookFlip;