import { profile } from '../data/portfolioData'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.38-2.02 1.02-2.73-.1-.26-.44-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.71 1.02 1.62 1.02 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6M7.5 7.75v.01M11.5 16.5v-3.6c0-1.32.9-2.4 2.25-2.4S16 11.58 16 12.9v3.6M11.5 10.5v6" />
    </svg>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            Open to Flutter and AI development roles, internships, and freelance collaborations.
          </p>
        </div>

        <div className="contact-grid">
          <a className="card contact-card" href={`mailto:${profile.links.email}`}>
            <span className="contact-card-icon">
              <MailIcon />
            </span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">{profile.links.email}</span>
          </a>

          <a className="card contact-card" href={profile.links.github} target="_blank" rel="noreferrer">
            <span className="contact-card-icon">
              <GithubIcon />
            </span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">MuhammadHusnain572</span>
          </a>

          <a className="card contact-card" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-card-icon">
              <LinkedinIcon />
            </span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">muhammad-husnain572</span>
          </a>
        </div>

        <div className="contact-cta">
          <div className="contact-cta-title">Have a project in mind?</div>
          <p className="contact-cta-sub">I usually reply within a day. Let&apos;s turn your idea into a working app.</p>
          <div className="contact-cta-actions">
            <a className="btn btn-primary" href={`mailto:${profile.links.email}`}>
              Send an Email
            </a>
            <a className="btn btn-outline" href={profile.resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
