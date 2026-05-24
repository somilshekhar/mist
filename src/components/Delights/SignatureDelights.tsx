"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./SignatureDelights.module.css";

export default function SignatureDelights() {
  const [current, setCurrent] = useState(0);
  const plateRef = useRef<HTMLDivElement>(null);

  const slides = siteData.delights;

  const prev = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const handleScroll = () => {
      if (!plateRef.current) return;
      const rect = plateRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const plateImg = plateRef.current.querySelector(`.${styles.plateImage}`) as HTMLElement;
      if (!plateImg) return;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Rotate plate based on scroll progress
        const rotation = (scrolled * 0.15) % 360;
        // Translate up slightly as it approaches viewport center
        const translateY = Math.max(0, 40 - scrolled * 0.1);
        plateImg.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
        plateImg.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tickerContent = siteData.tickerTexts;

  return (
    <section className={styles.section} id="signature-delights">
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>
          Freshness in Sushi. Authentic Taste.
        </h2>
        <p className={styles.sectionDetails}>
          Absolutely delightful! The sushi here is always fresh and beautifully
          presented, with a fantastic variety of rolls and sashimi to choose from.
        </p>
      </div>

      <div className={styles.slider}>
        <div
          className={styles.slideContainer}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.name} className={styles.slide}>
              <div className={styles.slideContent}>
                <h2 className={styles.slideName}>{slide.name}</h2>
                <div className={styles.slideImageWrap}>
                  <div className={styles.slideImageBg} />
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    className={styles.slideImage}
                    sizes="500px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.arrowsWrap}>
        <button
          className={styles.arrowButton}
          onClick={prev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          className={styles.arrowButton}
          onClick={next}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className={styles.plateWrap} ref={plateRef}>
        <Image
          src="/images/delight_sushi.png"
          alt="Sushi platter"
          width={1200}
          height={600}
          className={styles.plateImage}
        />
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerFlex}>
          {[0, 1, 2].map((repeatIndex) => (
            <div key={repeatIndex} className={styles.tickerItem}>
              {tickerContent.map((text, i) => (
                <span key={`${repeatIndex}-${i}`}>
                  <span className={styles.tickerText}>{text}</span>
                  <span className={styles.tickerSep}> ~ </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
