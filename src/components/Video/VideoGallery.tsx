"use client";

import Image from "next/image";
import styles from "./VideoGallery.module.css";

export default function VideoGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        {/* Using hero image as video fallback with overlay */}
        <Image
          src="/images/hero_bg.png"
          alt="Restaurant ambiance"
          fill
          className={styles.fallbackImage}
          sizes="100vw"
        />
        <div className={styles.videoOverlay}>
          <button className={styles.playButton} aria-label="Play video">
            ▶
          </button>
        </div>
      </div>
      {/* Wave overlay for smooth transition */}
      <div className={styles.waveOverlay}>
        <svg
          viewBox="0 0 1440 120"
          className={styles.waveSvg}
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>
    </section>
  );
}
