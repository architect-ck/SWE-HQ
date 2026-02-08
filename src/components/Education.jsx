const education = [
  {
    degree: 'Master of Technology in Computer Science (AI/ML)',
    school: 'International Institute of Information Technology Bangalore',
    cgpa: 'CGPA: 7.77',
    period: 'July 2021 – July 2023',
    location: 'Karnataka, India',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Chhattisgarh Swami Vivekanand Technical University',
    cgpa: 'CGPA: 8.20',
    period: 'July 2016 – October 2020',
    location: 'Chhattisgarh, India',
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, i) => (
            <article key={i} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-meta">{edu.cgpa} · {edu.period} · {edu.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
