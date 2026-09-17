"use client";

import { CalendarDays, Menu, PawPrint, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems, siteInfo } from "@/lib/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);

    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a
          className="brand"
          href="#top"
          aria-label={`${siteInfo.name}首页`}
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <PawPrint />
          </span>
          <span>
            <span className="brand-name">{siteInfo.shortName}</span>
            <span className="brand-sub">{siteInfo.englishName}</span>
          </span>
        </a>

        <nav
          className={`main-nav${menuOpen ? " open" : ""}`}
          id="main-nav"
          aria-label="主导航"
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#booking" onClick={closeMenu}>
          <CalendarDays aria-hidden="true" />
          预约洗护
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-controls="main-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
