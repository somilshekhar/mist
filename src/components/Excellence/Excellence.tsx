"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./Excellence.module.css";

export default function Excellence() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const leafRef = useRef<HTMLDivElement>(null);
  const sushiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (leafRef.current) {
        // Floating leaf drift downwards and rotate
        leafRef.current.style.transform = `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`;
      }
      if (sushiRef.current) {
        // Sushi drift upwards and rotate opposite direction
        sushiRef.current.style.transform = `translateY(${scrollY * -0.05}px) rotate(${scrollY * -0.03}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section} id="excellence">
      <div className={styles.floatingLeaf} ref={leafRef} style={{ fontSize: "5rem" }}>
        🍃
      </div>
      <div className={styles.floatingSushi} ref={sushiRef} style={{ fontSize: "6rem" }}>
        🍣
      </div>
      <div className="container">
        <div className={styles.titleWrapper}>
          <div className={styles.tagWrapper}>
            <span className="title-tag">Explore our Sushi</span>
          </div>
          <h3 className={styles.detailTitle}>
            Whether you&apos;re savoring delicate sashimi, signature sushi rolls, or a
            comforting bowl of ramen, all dish is crafted with precision. Where
            Japanese hospitality meets modern elegance.
          </h3>
          <div className={styles.miniTitle}>{siteData.japaneseAccent}</div>
        </div>
        <div className={styles.grid}>
          {siteData.excellence.map((item, i) => (
            <div
              key={item.name}
              className={`${styles.card} ${styles.cardAnimated}`}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardName}>{item.name}</div>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardNumber}>{item.number}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrap}>
          <a href="/about" className="primary-button">
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
