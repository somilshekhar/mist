"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./OurMenu.module.css";

export default function OurMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <div className={styles.miniTitle}>{siteData.japaneseAccent}</div>
          <h3 className={styles.sectionTitle} ref={titleRef}>
            Experience the artistry of Japanese cuisine with our carefully
            curated menu.
          </h3>
        </div>

        <div className={styles.menuWrapper}>
          {siteData.menuCategories.map((category, index) => (
            <div key={category.name} className={styles.category}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggle(index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggle(index);
                }}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h2 className={styles.categoryName}>{category.name}</h2>
                <div
                  className={`${styles.categoryArrow} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  ▾
                </div>
              </div>
              <div
                className={`${styles.itemsWrapper} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <div className={styles.itemsGrid}>
                  {category.items.map((item) => (
                    <div key={item.name} className={styles.menuItem}>
                      <div className={styles.menuItemImageWrap}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className={styles.menuItemImage}
                          sizes="80px"
                        />
                      </div>
                      <div className={styles.menuItemContent}>
                        <div className={styles.menuItemName}>{item.name}</div>
                        <div className={styles.menuItemDesc}>
                          {item.description}
                        </div>
                        <div className={styles.menuItemPrice}>{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
