"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./Testimonials.module.css";

// Photos representing client avatars or relevant restaurant imagery
const testimonialPhotos = [
  "/images/excellence_1.png",
  "/images/excellence_2.png",
  "/images/excellence_3.png",
  "/images/excellence_4.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { testimonials } = siteData;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Love for Our Sushi Speaks for Itself.</h2>
          <p className={styles.details}>
            From delicate sashimi and handcrafted sushi rolls to comforting ramen
            and flavorful donburi, every dish is a celebration of authentic flavors.
          </p>
        </div>

        <div className={styles.sliderContainer}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`${styles.slide} ${
                idx === activeIndex ? styles.slideActive : ""
              }`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={testimonialPhotos[idx % testimonialPhotos.length]}
                  alt={t.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.typography}>
                <blockquote className={styles.quote}>“{t.quote}”</blockquote>

                <div className={styles.authorBio}>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>

                <div className={styles.controls}>
                  <button
                    onClick={handlePrev}
                    className={styles.arrowBtn}
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>

                  <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`${styles.dot} ${
                          i === activeIndex ? styles.dotActive : ""
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className={styles.arrowBtn}
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerFlex}>
          {[0, 1, 2, 3, 4].map((repeatIndex) => (
            <div key={repeatIndex} className={styles.tickerItem}>
              <span className={styles.tickerText}>client&apos;s review</span>
              <span className={styles.tickerText}>~</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
