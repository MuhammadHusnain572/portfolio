import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <span className="timeline-dot" />
              <div className="card timeline-card">
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-org">{item.org}</div>
                <span className="timeline-period">{item.period}</span>
                <ul className="timeline-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
