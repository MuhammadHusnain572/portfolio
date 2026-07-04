import { skillGroups } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">Tools I work with</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.id} className="card skill-card">
              <div className="skill-card-label">{group.label}</div>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
