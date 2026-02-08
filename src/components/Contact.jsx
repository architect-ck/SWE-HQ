const email = 'chandrakantiiitb@gmail.com'
const phone = '+91 9098669007'
const linkedIn = 'https://linkedin.com/in/chandrakantsahu'
const youTube = 'https://youtube.com/@swe_hq'
const leetCode = 'https://leetcode.com/ck_17/'
const hackerRank = 'https://www.hackerrank.com/_ck_17_'
const eyeEm = 'https://www.eyeem.com/u/chandrakant_sahu'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact & Links</h2>
        <div className="contact-grid">
          <a href={`mailto:${email}`} className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">{email}</span>
          </a>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">{phone}</span>
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/chandrakantsahu</span>
          </a>
          <a href={youTube} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">YouTube (SWE HQ)</span>
            <span className="contact-value">youtube.com/@swe_hq</span>
          </a>
          <a href={leetCode} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">LeetCode</span>
            <span className="contact-value">leetcode.com/ck_17</span>
          </a>
          <a href={hackerRank} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">HackerRank</span>
            <span className="contact-value">hackerrank.com/_ck_17_</span>
          </a>
          <a href={eyeEm} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">EyeEm (Photography)</span>
            <span className="contact-value">eyeem.com/u/chandrakant_sahu</span>
          </a>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Chandrakant Sahu · SWE HQ on <a href={youTube} target="_blank" rel="noopener noreferrer">YouTube</a></p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
