"use client"
// components/BookFlip.js
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
// import styles from './BookFlip.module.css';
// import Image from 'next/image';
import styles from './ImageBook.module.css';

const BookFlip = () => {
   const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState();
  const [h, setH] = useState(600);
  const [w, setW] = useState(700);
// در صفحه اصلی
useEffect(() => {
  // غیرفعال کردن اسکرول در سطح document
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  
  return () => {
    // برگردوندن اسکرول هنگام unmount
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };
}, []);
  // آرایه عکس‌ها - می‌تونید آدرس عکس‌های خودتون رو قرار بدید
  const imagePages = [
    {
      id: 1,
      // type: 'cover',
      image: '/images/1.png', // جایگزین کنید با آدرس عکس واقعی
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 2,
      image: '/images/44.webp', // جایگزین کنید با آدرس عکس واقعی
      title: 'Scoliosis Sisterhood'
    },
    {
      id: 3,
      image: '/images/3.webp', // جایگزین کنید با آدرس عکس واقعی
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
useEffect(() => {
  if (!bookRef.current) return;

  const interval = setInterval(() => {
    if (!bookRef.current?.pageFlip) return;

    const api = bookRef.current.pageFlip();
    if (!api) return;
    const realHeight = api.getSettings().height;
  console.log(document.body.clientWidth )
    if (realHeight) {
       const img = document.body;
      if(document.body.clientWidth < 600){
        setW(document.body.clientWidth);
      }
      
      setH(img.clientHeight);
      clearInterval(interval);
    }
  }, 50);

  return () => clearInterval(interval);
}, [bookRef]);
  return (
    <div className={styles.bookContainer}>
      <HTMLFlipBook
        key={h}  
        ref={bookRef}
        width={w} // عرض ثابت برای کتاب
        height={h} // ارتفاع ثابت برای کتاب
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
                <img id={`page-image-${index + 1}`}
                  src={page.image} 
                  alt={page.alt}
                  className={styles.responsiveImage}
                />
              </div>
              
              {/* شماره صفحه */}
              <div className={styles.pageNumber}>
                {index + 1}
              </div>
              
              {/* افکت لبه ورق خورده */}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
      
      {/* <div className={styles.controls}>
        <button 
          className={styles.navButton}
          onClick={() => {
            if (bookRef.current?.pageFlip) {
              bookRef.current.pageFlip().flipPrev();
            }
          }}
        >
          ◀ Back
        </button>
        
        <div className={styles.pageIndicator}>
          {imagePages.map((_, index) => (
            <button
              key={index}
              className={styles.pageDot}
              onClick={() => {
                if (bookRef.current?.pageFlip) {
                  bookRef.current.pageFlip().flip(index);
                }
              }}
            />
          ))}
        </div>

        <button 
          className={styles.navButton}
          onClick={() => {
            if (bookRef.current?.pageFlip) {
              bookRef.current.pageFlip().flipNext();
            }
          }}
        >
          Next ▶
        </button>
      </div> */}
    </div>
  );
};

export default BookFlip;