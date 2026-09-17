import Image from "next/image";

import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="section-kicker">Grooming Services</p>
            <h2 id="services-title">
              不只洗干净，
              <br />
              还要照顾它的节奏。
            </h2>
          </div>
          <p className="section-intro">
            洗护方案会根据毛发、皮肤、性格和当日状态调整。首次到店建议预留
            2 至 3 小时，让宠物有充分适应时间。
          </p>
        </div>

        <div className="service-layout">
          <figure className="service-photo reveal">
            <div className="service-photo-frame">
              <Image
                src="/assets/dog-clean.jpg"
                alt="洗护后毛发蓬松的狗狗"
                fill
                sizes="(max-width: 860px) 100vw, 42vw"
              />
            </div>
          </figure>

          <div className="service-list reveal">
            {services.map((service) => (
              <article className="service-row" key={service.index}>
                <span className="service-index">{service.index}</span>
                <div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-copy">{service.description}</p>
                </div>
                <span className="service-price">{service.price}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
