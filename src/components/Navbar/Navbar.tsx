"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import SidebarMenu from "./SidebarMenu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={styles.navInner}>
          <div className={styles.navLeft}>
            <button
              className={styles.burgerButton}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation menu"
            >
              <div className={styles.burgerIcon}>
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
              </div>
              <span className={styles.burgerText}>Explore</span>
            </button>
            <div className={styles.navLinks}>
              {siteData.nav.map((item) => (
                <a key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.logoWrap}>
            <a href="/" className={styles.logo}>
              The <span className={styles.logoAccent}>Mist</span>
            </a>
          </div>
          <div className={styles.navRight}>
            <a href="#" className={styles.cartLink}>
              Cart (0)
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.headBorder} />
      <SidebarMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
