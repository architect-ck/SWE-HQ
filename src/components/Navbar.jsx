function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">Chandrakant Sahu</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#swe-hq">SWE HQ</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
