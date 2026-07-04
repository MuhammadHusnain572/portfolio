import { achievements } from '../data/portfolioData'

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" />
      <path d="M12 13v3M9 20h6M9.5 20c0-1.7.7-2.7 2.5-3s2.5 1.3 2.5 3" />
    </svg>
  )
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M7.5 8h9M7.5 11.5h5.5" />
    </svg>
  )
}

function AchievementCard({ item }) {
  const CardTag = item.credentialUrl ? 'a' : 'div'
  const linkProps = item.credentialUrl ? { href: item.credentialUrl, target: '_blank', rel: 'noreferrer' } : {}
  const Icon = item.category === 'certification' ? CertificateIcon : TrophyIcon

  return (
    <CardTag className="card achievement-card" {...linkProps}>
      <span className="achievement-icon">
        <Icon />
      </span>
      <div>
        <div className="achievement-title">{item.title}</div>
        <div className="achievement-org">{item.org}</div>
        <p className="achievement-desc">{item.description}</p>
      </div>
    </CardTag>
  )
}

function Achievements() {
  const recognition = achievements.filter((item) => item.category === 'recognition')
  const certifications = achievements.filter((item) => item.category === 'certification')

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Achievements</span>
          <h2 className="section-title">Recognition &amp; certifications</h2>
        </div>

        <div className="achievements-group">
          <h3 className="achievements-group-title">Recognition</h3>
          <div className="achievements-grid">
            {recognition.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="achievements-group">
          <h3 className="achievements-group-title">Certifications</h3>
          <div className="achievements-grid">
            {certifications.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
