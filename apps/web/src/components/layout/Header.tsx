"use client";

import { useState, useEffect } from "react";
import * as styles from "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={isScrolled ? styles.scrolled : styles.navWrapper}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            Y
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="/" className={`${styles.navLink}`}>
              Home
            </a>
            <a href="/canvas" className={`${styles.navLink}`}>
              Canvas(wip)
            </a>
            {/* <a
              href="/arch"
              className={`${styles.navLink}`}
            >
              Arch
            </a> */}
            <a
              href="https://github.com/YYoooonn"
              className={`${styles.navLinkUnderline}`}
            >
              github
            </a>
            <a
              href="https://velog.io/@yyoooonn"
              className={`${styles.navLinkUnderline}`}
            >
              velog
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            {/* <a
              href="/login"
              className={`${styles.button} ${styles.secondaryButton} ${styles.secondaryButtonDark}`}
            >
              Sign In
            </a>
            <a
              href="/signup"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Get Started
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`${styles.mobileMenuIcon} ${isMobileMenuOpen ? styles.mobileMenuIconOpen : ""}`}
            />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} toggleOpen={toggleMobileMenu} />
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  toggleOpen: (toggle: boolean) => void;
}

function MobileMenu({ isOpen, toggleOpen }: MobileMenuProps) {
  return (
    <div
      className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
    >
      <nav className={styles.mobileNav}>
        <a
          href="/"
          className={styles.mobileNavLink}
          onClick={() => toggleOpen(false)}
        >
          Home
        </a>
        <a
          href="/canvas"
          className={styles.mobileNavLink}
          onClick={() => toggleOpen(false)}
        >
          Canvas(wip)
        </a>
        <a
          href="https://github.com/YYoooonn"
          className={styles.mobileNavLink}
          onClick={() => toggleOpen(false)}
        >
          github
        </a>
        <a
          href="https://velog.io/@yyoooonn"
          className={styles.mobileNavLink}
          onClick={() => toggleOpen(false)}
        >
          velog
        </a>
        {/* <a
          href="https://issuu.com/yoonjonguk/docs/yyoooonn_wip?fr=sMGJjNjgzMzU5NDM"
          className={styles.mobileNavLink}
          onClick={() => toggleOpen(false)}
        >
          arch
        </a> */}
      </nav>

      {/* <div className={styles.mobileActions}>
        <a
          href="/login"
          className={`${styles.button} ${styles.secondaryButton} ${styles.secondaryButtonDark}`}
          onClick={() => toggleOpen(false)}
        >
          Sign In
        </a>
        <a
          href="/signup"
          className={`${styles.button} ${styles.primaryButton}`}
          onClick={() => toggleOpen(false)}
        >
          Get Started
        </a>
      </div> */}
    </div>
  );
}
