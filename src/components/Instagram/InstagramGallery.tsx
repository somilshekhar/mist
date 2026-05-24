"use client";

import Image from "next/image";
import styles from "./InstagramGallery.module.css";

const instagramPhotos = [
  { image: "/images/excellence_1.png", alt: "Sushi Platter" },
  { image: "/images/excellence_2.png", alt: "Fresh Ingredients" },
  { image: "/images/excellence_3.png", alt: "Signature Ramen" },
  { image: "/images/excellence_4.png", alt: "Master Chef" },
  { image: "/images/delight_sashimi.png", alt: "Salmon Sashimi" },
  { image: "/images/delight_sushi.png", alt: "Tuna Sushi" },
];

export default function InstagramGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.miniTitle}>@themist</span>
        <h2 className={styles.title}>Follow Our Journey</h2>
      </div>

      <div className={styles.grid}>
        {instagramPhotos.map((photo, idx) => (
          <a
            key={idx}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              className={styles.image}
              sizes="(max-width: 576px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className={styles.overlay}>
              <div className={styles.icon}>📷</div>
              <span className={styles.handle}>@themist</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
