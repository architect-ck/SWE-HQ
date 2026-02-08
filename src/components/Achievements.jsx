const achievements = [
  'Secured 98.82 percentile in GATE-CS (2021).',
  'Secured 2nd position in CodeRex coding competition at Agresita, SSIPMT (2019).',
]

function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
