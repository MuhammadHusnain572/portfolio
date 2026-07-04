import { profile, projects } from '../data/portfolioData'

function Hero() {
  const featuredCount = projects.length

  return (
    <section id="home" className="section hero" style={{ borderBottom: 'none' }}>
      <div className="container">
        <span className="hero-eyebrow">
          <span className="hero-dot" />
          Available for opportunities
        </span>

        <h1 className="hero-title">
          Hi, I'm {profile.name.split(' ')[0]} <span>{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
          <a href={profile.resumeUrl} className="btn btn-outline" download>
            Resume
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <div className="hero-meta-value">{featuredCount}+</div>
            <div className="hero-meta-label">Shipped Projects</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">Top 10</div>
            <div className="hero-meta-label">of 173 projects · HEC GenAI Hackathon</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-value">2027</div>
            <div className="hero-meta-label">BS Software Engineering, NUML</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
