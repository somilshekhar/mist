"use client";

import { useEffect, useRef } from "react";
import { siteData } from "@/data/siteData";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.2 }
    );

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.titleFlex}>
          <div className={styles.titleLeft}>
            <h2 className={styles.sectionTitle}>
              Handcrafted Sushi, Made with Passion.
            </h2>
          </div>
          <div className={styles.detailsRight}>
            <p className={styles.sectionDetails}>
              Craving sushi? We&apos;ve got you covered! From classic rolls to chef&apos;s
              special creations, our menu is packed with fresh, flavorful, and
              mouthwatering Japanese dishes.
            </p>
          </div>
        </div>

        <div className={styles.contactBar}>
          <div
            className={styles.infoBlock}
            ref={(el) => {
              blocksRef.current[0] = el;
            }}
          >
            <div className={styles.infoTitle}>Find Us</div>
            <div className={styles.infoText}>{siteData.contact.address}</div>
            <div className={styles.infoText}>{siteData.contact.phone}</div>
            <div className={styles.infoText}>{siteData.contact.email}</div>
          </div>
          <div
            className={styles.infoBlock}
            ref={(el) => {
              blocksRef.current[1] = el;
            }}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className={styles.infoTitle}>Opening Hours</div>
            <div className={styles.infoText}>{siteData.hours.closed}</div>
            <div className={styles.infoText}>{siteData.hours.weekday}</div>
            <div className={styles.infoText}>{siteData.hours.weekend}</div>
          </div>
          <div
            className={styles.reservationWrap}
            ref={(el) => {
              blocksRef.current[2] = el;
            }}
            style={{ transitionDelay: "0.3s" }}
          >
            <a href="/reservation" className={styles.reservationBtn}>
              Make a Reservation
            </a>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {siteData.whyChooseUs.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.featureDetails}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
