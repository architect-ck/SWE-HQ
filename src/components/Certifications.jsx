const certs = [
  {
    name: 'Agentic AI Architecture Foundations',
    skills: 'AI Agents, Software Architecture, AI Solutions',
    url: 'https://www.linkedin.com/learning/certificates/c69885e12b652ab03001215b6a40b6bd89329d34f8434c4f70de740001b1fc1e?trk=share_certificate',
  },
  {
    name: 'Spring Boot 2.0 Essential Training',
    skills: 'Spring Boot',
    url: 'https://www.linkedin.com/learning/certificates/808c965897a0385a6c81b8dabeb9167430561c0713581ef8221d60854e1eac6d?trk=share_certificate',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section" data-alt>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <ul className="certs-list">
          {certs.map((c, i) => (
            <li key={i}>
              <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a>
              <span className="cert-skills"> — {c.skills}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
