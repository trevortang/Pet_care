import { PawPrint } from "lucide-react";

import { navItems, siteInfo } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a
            className="brand"
            href="#top"
            aria-label={`${siteInfo.name}首页`}
          >
            <span className="brand-mark" aria-hidden="true">
              <PawPrint />
            </span>
            <span>
              <span className="brand-name">{siteInfo.shortName}</span>
              <span className="brand-sub">{siteInfo.englishName}</span>
            </span>
          </a>
          <p>
            一间把清洁做细，也把宠物情绪放在前面的社区洗护店。全预约制，犬猫分区，一宠一室。
          </p>
        </div>
        <div>
          <h2 className="footer-title">快速导航</h2>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">到店信息</h2>
          <ul className="footer-list">
            <li>
              <span>{siteInfo.address}</span>
            </li>
            <li>
              <a href={`tel:${siteInfo.phone}`}>{siteInfo.phoneDisplay}</a>
            </li>
            <li>
              <span>{siteInfo.hours}</span>
            </li>
            <li>
              <span>建议提前 1 至 3 天预约</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {siteInfo.name}</span>
        <span>网站内容仅作门店展示，不替代兽医诊断</span>
      </div>
    </footer>
  );
}
