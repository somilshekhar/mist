"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./FeaturedItems.module.css";

export default function FeaturedItems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = siteData.featuredItems;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;

      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      const index = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <section className={styles.section} id="featured-items">
      <div className={styles.vhWrap} ref={sectionRef}>
        <div className={styles.sticky}>
          <div className={styles.flex}>
            <div className={styles.leftWrap}>
              <div className={styles.itemsContainer}>
                {items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`${styles.singleItem} ${
                      activeIndex === i ? styles.active : ""
                    }`}
                  >
                    <div className={styles.itemMiniTitle}>
                      {siteData.japaneseAccent}
                    </div>
                    <h2 className={styles.itemName}>{item.name}</h2>
                    <div className={styles.itemImageWrap}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className={styles.itemImage}
                        sizes="160px"
                      />
                    </div>
                    <div className={styles.itemPrice}>{item.price}</div>
                    <p className={styles.itemDescription}>
                      {item.description}
                    </p>
                    <div>
                      <a href="#" className="primary-button">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.progressDots}>
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.dot} ${
                      activeIndex === i ? styles.active : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className={styles.rightWrap}>
              <div className={styles.imagesStack}>
                {items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`${styles.stackImage} ${
                      activeIndex === i ? styles.active : ""
                    }`}
                  >
                    <Image
                      src={item.photo}
                      alt={`${item.name} photo`}
                      fill
                      className={styles.stackImg}
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
