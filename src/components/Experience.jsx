const roles = [
  {
    title: 'Software Development Engineer II',
    company: 'PayU Payments Pvt. Ltd.',
    location: 'Bengaluru, Karnataka',
    period: 'April 2025 – Present',
    bullets: [
      'Optimized memory-intensive APIs with async processing (CompletableFuture, Spring Boot); reduced infra cost by $400/month.',
      'Automated RBI audit data extraction (Python, Redshift, chunking, multithreading); 120M+ records, zero data loss, ~6 person-days saved.',
      'Maker–Checker workflow for BBPS Admin (four-eye approval, audit trail); improved governance and compliance.',
      'API throttling with token bucket + Redis.',
    ],
  },
  {
    title: 'Software Development Engineer I',
    company: 'PayU Payments Pvt. Ltd.',
    location: 'Bengaluru, Karnataka',
    period: 'July 2023 – March 2025',
    bullets: [
      'Dual-layer IP whitelisting (CIDR) for BBPS agents; 100% prevention of credential misuse.',
      'Proactive bill fetching & notifications; 20% increase in WhatsApp bill payments, Meta as strategic partner.',
      'Real-time commission calculation & reconciliation (Spring Boot, Kafka, MySQL) for millions of prepaid transactions.',
    ],
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'PayU Payments Pvt. Ltd.',
    location: 'Bengaluru, Karnataka',
    period: 'January 2023 – July 2023',
    bullets: [
      'Agent–BillCategory–Biller mapping in BBPS Admin (Spring Boot, REST, Angular); zero unauthorized access.',
      '10x cron concurrency via async/multithreading.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {roles.map((role, i) => (
            <article key={i} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{role.title}</h3>
                  <p className="experience-company">{role.company} · {role.location}</p>
                </div>
                <span className="experience-period">{role.period}</span>
              </div>
              <ul className="experience-bullets">
                {role.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
