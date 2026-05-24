"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./Excellence.module.css";

export default function Excellence() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <section className={styles.section}>
      <div className={styles.floatingLeaf}>🍃</div>
      <div className="container">
        <div className={styles.titleWrapper}>
          <div className={styles.tagWrapper}>
            <span className="title-tag">Explore our Menu</span>
          </div>
          <h3 className={styles.detailTitle}>
            Whether you&apos;re savoring delicate sashimi, signature rolls, or a
            comforting bowl of ramen, every dish is crafted with precision. Where
            Japanese hospitality meets modern elegance.
          </h3>
          <div className={styles.miniTitle}>{siteData.japaneseAccent}</div>
        </div>
        <div className={styles.grid}>
          {siteData.excellence.map((item, i) => (
            <div
              key={item.name}
              className={`${styles.card} ${styles.cardAnimated}`}
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{ transitionDelay: `${i * 0.15}s` }}
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
