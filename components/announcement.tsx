import { siteInfo } from "@/lib/content";

export function Announcement() {
  return (
    <div className="announcement">
      <div className="wrap">
        <span>广州番禺 · 新桥村泰安路西 11 巷</span>
        <span>{siteInfo.hours} · 全预约制，减少等待</span>
      </div>
    </div>
  );
}
