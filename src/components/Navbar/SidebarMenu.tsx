"use client";

import { useEffect } from "react";
import { siteData } from "@/data/siteData";
import styles from "./SidebarMenu.module.css";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      />
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.closeWrapper}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <div className={styles.closeIcon}>
              <div className={styles.closeLine} />
              <div className={styles.closeLine} />
            </div>
            <span className={styles.closeText}>Close</span>
          </button>
        </div>
        <div className={styles.menuBox}>
          <div className={styles.subTitle}>{siteData.japaneseAccent}</div>
          <h4 className={styles.mainTitle}>
            Reserve your table for an amazing dining experience.
          </h4>
          <div className={styles.findWrapper}>
            <div className={styles.findSection}>
              <div className={styles.findTitle}>Find Us</div>
              <div>
                <div className={styles.findText}>{siteData.contact.address}</div>
                <div className={styles.findText}>{siteData.contact.phone}</div>
                <div className={styles.findText}>{siteData.contact.email}</div>
              </div>
            </div>
            <div className={styles.findSection}>
              <div className={styles.findTitle}>Opening Hours</div>
              <div>
                <div className={styles.findText}>{siteData.hours.closed}</div>
                <div className={styles.findText}>{siteData.hours.weekday}</div>
                <div className={styles.findText}>{siteData.hours.weekend}</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <a href="/reservation" className="primary-button">
              Book a Table
            </a>
          </div>
          <div className={styles.socialWrapper}>
            <a
              href={siteData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href={siteData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href={siteData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
