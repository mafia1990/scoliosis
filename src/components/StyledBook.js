// components/StyledBook.js
"use client"
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './StyledBook.module.css';
import Image from 'next/image';

const StyledBook = () => {
  const pages = [
    {
      id: 1,
      type: 'cover',
      content: (
       
            <div className='relative aspect-auto w-full h-[92vh] rounded-7xl! '>
                                   <Image src={"/images/1.png"} alt="ad" fill  unoptimized className='object-contain'/>
                                   </div>
        
      )
    },
    {
      id: 2,
      content: (
       <div className='relative aspect-auto w-full h-[85vh] rounded-7xl! '>
                                   <Image src={"/images/2.png"} alt="ad" fill  unoptimized className='object-contain'/>
                                   </div>
      )
    },
    {
      id: 3,
      content: (
         <div className='relative aspect-auto w-full h-[85vh] rounded-7xl! '>
                                   <Image src={"/images/3.webp"} alt="ad" fill  unoptimized className='object-contain'/>
                                   </div>
      )
    },
    {
      id: 4,
      content: (
       <div className='relative aspect-auto w-full h-[85vh] rounded-7xl! '>
                                   <Image src={"/images/45.webp"} alt="ad" fill  unoptimized className='object-contain'/>
                                   </div>
      )
    },
    {
      id: 5,
      content: (
        <div className={styles.page}>
          <div className={styles.pageContent}>
            <div className={styles.pageHeader}>چالش‌ها</div>
            <div className={styles.pageImage} style={{backgroundImage: 'url("/api/placeholder/300/200")'}}></div>
            <div className={styles.pageText}>
              <p>در راه رسیدن به گنج، با چالش‌های زیادی روبرو شدند. از رودخانه‌های خروشان گرفته تا کوه‌های بلند.</p>
            </div>
            <div className={styles.pageFooter}>صفحه 4</div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div className={styles.page}>
          <div className={styles.pageContent}>
            <div className={styles.pageHeader}>پیروزی</div>
            <div className={styles.pageText}>
              <p>سرانجام پس از گذر از تمام موانع، به صندوقچه گنج رسیدند. اما بزرگ‌ترین گنج آنها دوستی و همکاری بود.</p>
              <p>و آنها در شادی و خوشبختی به زندگی خود ادامه دادند.</p>
            </div>
            <div className={styles.pageFooter}>صفحه 5</div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      type: 'cover',
      content: (
        <div className={`${styles.page} ${styles.hard} ${styles.pageCover} ${styles.pageCoverBottom}`}>
          <div className={styles.pageContent}>
            <h2>پایان</h2>
            <div className={styles.pageFooter}>
              تا ماجرای بعدی...
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={styles.bookContainer}>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={400}
        maxWidth={800}
        minHeight={600}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        singlePage={true}
        className={styles.flipBook}
        flippingTime={1000}
        usePortrait={true}
      >
        {pages.map((page) => (
          <div key={page.id} className={styles.demoPage}>
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>

      {/* <div className={styles.controls}>
        <button 
          className={styles.navButton}
          onClick={() => {
            const flipBook = document.querySelector('.react-pageflip');
            if (flipBook && flipBook.pageFlip) {
              flipBook.pageFlip().flipPrev();
            }
          }}
        >
          ◀ صفحه قبلی
        </button>
        <span className={styles.help}>برای ورق زدن روی صفحه کلیک کنید</span>
        <button 
          className={styles.navButton}
          onClick={() => {
            const flipBook = document.querySelector('.react-pageflip');
            if (flipBook && flipBook.pageFlip) {
              flipBook.pageFlip().flipNext();
            }
          }}
        >
          صفحه بعدی ▶
        </button>
      </div> */}
    </div>
  );
};

export default StyledBook;