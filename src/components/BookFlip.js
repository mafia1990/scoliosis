"use client"
// components/BookFlip.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './ImageBook.module.css';

const BookFlip = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [h, setH] = useState(600);
  const [w, setW] = useState(700);
  
  // حالت‌های زوم
  const [scale, setScale] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const [lastTouchDistance, setLastTouchDistance] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startTouches, setStartTouches] = useState([]);

  // غیرفعال کردن اسکرول
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  // تنظیم ارتفاع
  useEffect(() => {
    if (!bookRef.current) return;

    const interval = setInterval(() => {
      if (!bookRef.current?.pageFlip) return;

      const api = bookRef.current.pageFlip();
      if (!api) return;
      const realHeight = api.getSettings().height;
      
      if (realHeight) {
        if (document.body.clientWidth < 600) {
          setW(document.body.clientWidth);
        }
        
        setH(document.body.clientHeight);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [bookRef]);

  // محاسبه فاصله بین دو نقطه تاچ
  const getTouchDistance = useCallback((touches) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  }, []);

  // هندلر شروع تاچ
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      setIsZooming(true);
      setLastTouchDistance(getTouchDistance(e.touches));
      setStartTouches([...e.touches]);
      e.preventDefault();
    }
  }, [getTouchDistance]);

  // هندلر حرکت تاچ
  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 2 && isZooming) {
      const touchDistance = getTouchDistance(e.touches);
      
      if (lastTouchDistance !== null) {
        const scaleChange = touchDistance / lastTouchDistance;
        const newScale = Math.max(0.5, Math.min(3, scale * scaleChange));
        setScale(newScale);
      }
      
      setLastTouchDistance(touchDistance);
      e.preventDefault();
    }
  }, [isZooming, lastTouchDistance, scale, getTouchDistance]);

  // هندلر پایان تاچ
  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length < 2) {
      setIsZooming(false);
      setLastTouchDistance(null);
      
      // ریست کردن موقعیت اگر زوم 1 باشد
      if (scale === 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  }, [scale]);

  // هندلر دابل کلیک برای زوم
  const handleDoubleClick = useCallback((e) => {
    e.preventDefault();
    if (scale === 1) {
      setScale(2);
      // مرکز کردن موقعیت روی نقطه کلیک
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.width / 2 - (e.clientX - rect.left)) / 2;
      const y = (rect.height / 2 - (e.clientY - rect.top)) / 2;
      setPosition({ x, y });
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  // ریست کردن زوم
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // استایل داینامیک برای زوم
  const zoomStyle = {
    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
    transformOrigin: 'center center',
    transition: isZooming ? 'none' : 'transform 0.3s ease',
    width: '100%',
    height: '100%',
    touchAction: 'none'
  };

  const imagePages = [
    {
      id: 1,
      image: '/images/1.png',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 2,
      image: '/images/44.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 3,
      image: '/images/3.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 4,
      image: '/images/45.jpg',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 5,
      image: '/images/5.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 6,
      image: '/images/6.png',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 7,
      image: '/images/7.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 8,
      image: '/images/8.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 9,
      image: '/images/9.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 10,
      image: '/images/10.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 11,
      image: '/images/11.webp',
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 12,
      image: '/images/12.webp',
      title: 'Scoliosis Sisterhood'
    },
  ];

  return (
    <div className={styles.bookContainer}>
      {/* دکمه ریست زوم */}
      {scale !== 1 && (
        <button 
          className={styles.zoomResetButton}
          onClick={resetZoom}
          title="Reset Zoom"
        >
          ↺
        </button>
      )}
      
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imagePages.map((page, index) => (
          <div  
            key={page.id} 
            className={`${styles.page} ${styles.realPage}`}
            data-page-number={index + 1}
          >
            <div className={styles.pageContent}>
              <div 
                className={styles.imageContainer}
                onDoubleClick={handleDoubleClick}
                style={zoomStyle}
              >
                <img 
                  id={`page-image-${index + 1}`}
                  src={page.image} 
                  alt={page.title}
                  className={styles.responsiveImage}
                />
              </div>
              
              <div className={styles.pageNumber}>
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default BookFlip;