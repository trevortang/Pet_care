import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        src="/assets/hero-grooming.jpg"
        alt="完成洗护后的狗狗在店内安静休息"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow">专业犬猫洗护 · 一宠一室</p>
          <h1 id="hero-title">
            干净，蓬松，
            <br />
            <span>刚刚好。</span>
          </h1>
          <p className="hero-lede">
            从皮肤检查、洗护到吹整收尾，尊重每只宠物的情绪和节奏。全程可视化，不赶单，不套模板。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#booking">
              立即预约
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="#services">
              查看服务
            </a>
          </div>
        </div>
        <aside className="hero-note">
          <strong>一宠一毛巾</strong>
          <p>
            独立消毒工位、低敏浴液和专业烘干设备，减少交叉接触与等待焦虑。
          </p>
        </aside>
      </div>
    </section>
  );
}
