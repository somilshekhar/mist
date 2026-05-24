"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    const bgImg = bgImgRef.current;
    if (!section || !overlay) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;
      
      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      // Clip-path animation: reveal from bottom
      const clipTop = 100 - progress * 100;
      overlay.style.clipPath = `inset(${clipTop}% 0 0 0)`;

      // Parallax zoom out on background image
      if (bgImg) {
        const scale = 1.15 - progress * 0.15;
        bgImg.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.bannerSection} ref={sectionRef}>
      <div className={styles.bannerSticky}>
        {/* Layer 1: Dark background */}
        <div className={styles.bannerBg}>
          <Image
            src="/images/hero_bg.png"
            alt="The Mist restaurant interior"
            fill
            priority
            className={styles.bannerBgImage}
            ref={bgImgRef}
            sizes="100vw"
            style={{ transition: "transform 0.1s ease-out" }}
          />
          <div className={styles.bannerBgOverlay} />
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.bannerContentWrap}>
            <div className={styles.bannerTagFlex}>
              <span className={styles.bannerTagText}>
                {siteData.heroTags[0]}
              </span>
              <span className={styles.bannerTagDot} />
              <span className={styles.bannerTagText}>
                {siteData.heroTags[1]}
              </span>
            </div>
            <h1 className={styles.bannerTitle}>Sushi bar</h1>
            <h2 className={styles.bannerSubTitle}>{siteData.tagline}</h2>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll</span>
          <div className={styles.scrollLine} />
        </div>

        {/* Layer 2: Cream overlay with clip-path reveal */}
        <div className={styles.overlayWrap} ref={overlayRef}>
          <div className={styles.overlayInner}>
            <div className={styles.overlayContent}>
              <div className={styles.overlayContentWrap}>
                <div className={styles.bannerTagFlex}>
                  <span
                    className={`${styles.bannerTagText} ${styles.overlayTagText}`}
                  >
                    {siteData.heroTags[0]}
                  </span>
                  <span className={styles.bannerTagDot} />
                  <span
                    className={`${styles.bannerTagText} ${styles.overlayTagText}`}
                  >
                    {siteData.heroTags[1]}
                  </span>
                </div>
                <h1 className={styles.overlayTitle}>Sushi bar</h1>
                <h2 className={styles.overlaySubTitle}>{siteData.tagline}</h2>
                <div className={styles.buttonWrap}>
                  <a href="/reservation" className="primary-button">
                    Make a Reservation
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.copyright}>©2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
