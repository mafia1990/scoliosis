// components/SinglePageBook.js
"use client"
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './SinglePageBook.module.css';
import Image from 'next/image';

const SinglePageBook = () => {
  const pages = [
    {
      id: 1,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
             <div className='relative aspect-auto w-full h-full'>
                       <Image src={"/images/image_9.png"} alt="ad" fill  unoptimized className='object-contain'/>
                       </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>فصل اول: شروع ماجرا</h2>
            <p className={styles.text}>
              روزی روزگاری در سرزمینی دور، گروهی از دوستان کارتونی 
              تصمیم گرفتند به یک ماجراجویی بزرگ بروند...
            </p>
            <div className={styles.cartoonCloud}></div>
            <div className={styles.pageNumber}>صفحه 2</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>شخصیت‌های اصلی</h2>
            <div className={styles.characterGrid}>
              <div className={styles.character}>
                <div className={styles.characterIcon}></div>
                <span className={styles.characterName}>باب اسفنجی</span>
              </div>
              <div className={styles.character}>
                <div className={styles.characterIcon}></div>
                <span className={styles.characterName}>میکی موس</span>
              </div>
              <div className={styles.character}>
                <div className={styles.characterIcon}></div>
                <span className={styles.characterName}>تام و جری</span>
              </div>
            </div>
            <div className={styles.pageNumber}>صفحه 3</div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>ماجراجویی در جنگل</h2>
            <p className={styles.text}>
              آنها وارد جنگلی جادویی شدند که درختانش آبنبات بودند 
              و رودخانه‌ها از شیر شکلات تشکیل شده بودند...
            </p>
            <div className={styles.cartoonTree}></div>
            <div className={styles.pageNumber}>صفحه 4</div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>کشف گنج</h2>
            <p className={styles.text}>
              پس از گذشتن از موانع مختلف، سرانجام به صندوقچه 
              گنج رسیدند که پر از شکلات و اسباب‌بازی بود!
            </p>
            <div className={styles.treasureChest}></div>
            <div className={styles.pageNumber}>صفحه 5</div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div className={styles.singlePage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>پایان خوش</h2>
            <p className={styles.text}>
              و آنها با شادی و خوشبختی به خانه بازگشتند 
              و این ماجراجویی زیبا را هرگز فراموش نکردند...
            </p>
            <div className={styles.cartoonSun}></div>
            <div className={styles.theEnd}>پایان</div>
            <div className={styles.pageNumber}>صفحه 6</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={styles.bookContainer}>
      <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        minWidth={400}
        maxWidth={800}
        minHeight={600}
        maxHeight={900}
        maxShadowOpacity={0.3}
        showCover={true}
        mobileScrollSupport={true}
        singlePage={true} // این خط باعث میشه تک‌برگ بشه
        className={styles.flipBook}
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((page) => (
          <div key={page.id} className={styles.demoPage}>
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>
      
      <div className={styles.controls}>
        <button 
          className={styles.navButton}
          onClick={() => {
            const flipBook = document.querySelector('.react-pageflip');
            if (flipBook) {
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
            if (flipBook) {
              flipBook.pageFlip().flipNext();
            }
          }}
        >
          صفحه بعدی ▶
        </button>
      </div>
    </div>
  );
};

export default SinglePageBook;