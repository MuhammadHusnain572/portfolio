import { projects } from '../data/portfolioData'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="M14 4h6v6M10 14 20 4M19 13v5.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H12" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 8.5h17" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.7" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="m8 13 2.5 2-2.5 2M13 17h3.5" />
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`card project-card${project.featured ? ' featured' : ''}`}>
      <div className="project-card-head">
        <span className="project-icon">
          <ProjectIcon />
        </span>
        {project.featured && <span className="tag">Featured</span>}
      </div>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.liveUrl && (
          <a className="btn btn-outline btn-sm" href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalIcon /> Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a className="btn btn-outline btn-sm" href={project.codeUrl} target="_blank" rel="noreferrer">
            <CodeIcon /> View Code
          </a>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A mix of production apps and AI systems built to solve real problems, not just demos.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
