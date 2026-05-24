"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="blogs">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.miniTitle}>{siteData.japaneseAccent}</span>
            <h2 className={styles.title}>Latest News & Articles</h2>
          </div>
          <a href="/blogs" className="primary-button">
            View All Posts
          </a>
        </div>

        <div className={styles.grid}>
          {siteData.blogs.map((post, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`${styles.card} fade-up`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <span className={styles.date}>• {post.date}</span>
                </div>
                <h3 className={styles.postTitle}>
                  <a href="#">{post.title}</a>
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <a href="#" className={styles.readMore}>
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
