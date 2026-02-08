const skillGroups = [
  {
    label: 'Programming / Markup',
    items: ['C++', 'Java', 'Python', 'HTML'],
  },
  {
    label: 'Frameworks / Technologies',
    items: ['Spring Boot', 'JPA', 'REST API', 'JUnit', 'Microservices', 'Angular', 'Prompt Engineering'],
  },
  {
    label: 'Tools / Software',
    items: ['Git', 'MySQL', 'Redis', 'SonarQube', 'OpenSearch', 'Grafana', 'Kafka', 'Cursor AI', 'AWS EC2', 'Docker'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'Redshift'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section" data-alt>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className="skills-group">
              <h4 className="skills-label">{group.label}</h4>
              <div className="skills-tags">
                {group.items.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
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
