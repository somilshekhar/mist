"use client";

import { siteData } from "@/data/siteData";
import styles from "./Footer.module.css";

const tickerContent = [
  "The Mist The Mist",
  "a tradition of Japanese foods",
  "reserve your table",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.ticker}>
        <div className={styles.tickerFlex}>
          {[0, 1, 2].map((repeatIndex) => (
            <div key={repeatIndex} className={styles.tickerItem}>
              {tickerContent.map((text, i) => (
                <span key={`${repeatIndex}-${i}`}>
                  <span className={styles.tickerText}>{text}</span>
                  <span className={styles.tickerSep}> ~ </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.aboutCol}>
              <div className={styles.logo}>
                The <span>Mist</span>
              </div>
              <p className={styles.aboutText}>
                Experience fine Japanese dining. A harmonious blend of traditional
                sushi craftsmanship and modern culinary innovation.
              </p>
              <div className={styles.socials}>
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
                  📸
                </a>
                <a
                  href={siteData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>

            <div>
              <h4 className={styles.colTitle}>Links</h4>
              <ul className={styles.linksList}>
                {siteData.nav.map((link, idx) => (
                  <li key={idx} className={styles.linkItem}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Hours</h4>
              <ul className={styles.hoursList}>
                <li>{siteData.hours.weekday}</li>
                <li>{siteData.hours.weekend}</li>
                <li>{siteData.hours.closed}</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Contact</h4>
              <ul className={styles.contactList}>
                <li>{siteData.contact.address}</li>
                <li>
                  <a href={`tel:${siteData.contact.phone}`}>
                    {siteData.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteData.contact.email}`}>
                    {siteData.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.copyright}>
              © {currentYear} The Mist. All rights reserved.
            </div>
            <div className={styles.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
