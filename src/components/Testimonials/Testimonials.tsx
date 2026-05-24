"use client";

import { useState, useEffect, useRef } from "react";
import { siteData } from "@/data/siteData";
import styles from "./Testimonials.module.css";

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
      6000
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
      <div className={styles.bgAccent} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.miniTitle}>{siteData.japaneseAccent}</span>
          <h2 className={styles.title}>What Our Guests Say</h2>
        </div>

        <div className={styles.sliderContainer}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`${styles.slide} ${
                idx === activeIndex ? styles.slideActive : ""
              }`}
            >
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.quoteText}>{t.quote}</p>
              
              <div className={styles.rating}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <h4 className={styles.author}>{t.name}</h4>
              <span className={styles.role}>{t.role}</span>
            </div>
          ))}
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
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.dot} ${
                  idx === activeIndex ? styles.dotActive : ""
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
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
    </section>
  );
}
