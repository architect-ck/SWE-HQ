const projects = [
  {
    title: 'BBPS async optimization',
    problem: 'Memory-intensive APIs were driving high infrastructure cost.',
    approach: 'Introduced async processing with CompletableFuture in Spring Boot.',
    tech: 'Spring Boot, CompletableFuture',
    outcome: 'Reduced infrastructure cost by $400/month.',
  },
  {
    title: 'RBI audit data extraction',
    problem: 'Manual extraction of 120M+ transaction records for RBI audit was error-prone and time-consuming.',
    approach: 'Python-based script with chunking, multithreading, and resumable disk persistence from Amazon Redshift.',
    tech: 'Python, Amazon Redshift, multithreading',
    outcome: 'Zero data loss, ~6 person-days saved; Cursor AI–accelerated development.',
  },
  {
    title: 'Maker–Checker workflow (BBPS Admin)',
    problem: 'Sensitive configuration changes needed four-eye approval and audit traceability.',
    approach: 'Designed Maker–Checker workflow with state transitions and full audit trail in BBPS Admin Portal.',
    tech: 'Spring Boot, Claude Opus 4.5 LLM for design/code assistance',
    outcome: 'Improved operational governance, compliance, and risk control.',
  },
  {
    title: 'API throttling with token bucket',
    problem: 'APIs needed rate limiting to protect backend and ensure fair usage.',
    approach: 'Engineered token bucket–based throttling with Redis cache.',
    tech: 'Redis, Spring Boot',
    outcome: 'Robust, configurable rate limiting for production APIs.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Work highlights</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <h3 className="project-title">{p.title}</h3>
              <p><strong>Problem:</strong> {p.problem}</p>
              <p><strong>Approach:</strong> {p.approach}</p>
              <p className="project-meta"><strong>Tech:</strong> {p.tech}</p>
              <p className="project-outcome"><strong>Outcome:</strong> {p.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
