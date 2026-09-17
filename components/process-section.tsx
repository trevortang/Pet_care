import { careSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section
      className="section process-band"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="section-kicker">Care Process</p>
            <h2 id="process-title">每一步，都让它更放松一点。</h2>
          </div>
          <p className="section-intro">
            出现明显紧张、攻击倾向或身体不适时，美容师会暂停操作并及时联系主人，不以完成项目为优先。
          </p>
        </div>

        <ol className="steps reveal">
          {careSteps.map((step) => (
            <li className="step" key={step.index}>
              <span className="step-no">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
