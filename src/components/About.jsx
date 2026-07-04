import { aboutText, profile } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">Who I am</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{aboutText.summary}</p>
            <p>{aboutText.details}</p>
          </div>

          <div className="card about-edu-card">
            <span className="tag">Education</span>
            <div className="about-edu-degree">{profile.education.degree}</div>
            <div className="about-edu-school">{profile.education.school}</div>
            <div className="about-edu-status">{profile.education.status}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
