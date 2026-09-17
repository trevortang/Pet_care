import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

import { carePoints } from "@/lib/content";

export function CareSection() {
  return (
    <section className="care-section" aria-labelledby="care-title">
      <div className="care-layout">
        <figure className="care-photo reveal">
          <Image
            src="/assets/cat-care.jpg"
            alt="猫咪在安静环境中接受护理"
            fill
            sizes="(max-width: 860px) 100vw, 47vw"
          />
        </figure>
        <div className="care-copy reveal">
          <p className="section-kicker">Less Stress, More Care</p>
          <h2 id="care-title">
            不赶时间，
            <br />
            不套模板。
          </h2>
          <p>
            每只宠物对水声、吹风和陌生人的接受度都不同。我们会先观察，再决定如何开始；该停的时候停，该等的时候等。
          </p>
          <ul className="check-list">
            {carePoints.map((point) => (
              <li key={point}>
                <Check aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#booking">
            为它预约一次
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
