const PROFILE_IMAGE = `${import.meta.env.BASE_URL}profile.png`

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-inner">
        <div className="hero-avatar-wrap reveal">
          <img
            src={PROFILE_IMAGE}
            alt="Chandrakant Sahu"
            className="hero-avatar"
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <span className="hero-badge reveal">Software Engineer · PayU · IIIT-B</span>
        <h1 className="hero-name reveal reveal-delay-1">
          Hi, I'm <span className="gradient-text">Chandrakant Sahu</span>
        </h1>
        <p className="hero-tagline reveal reveal-delay-2">
          Results-oriented Software Engineer · 3+ years · PayU · Backend & scalable systems
        </p>
        <p className="hero-intro reveal reveal-delay-3">
          Building and optimizing scalable backend architectures. Master’s in Computer Science from IIIT-Bangalore.
          I also run <strong>SWE HQ</strong> on YouTube – tutorials and tips for software engineers.
        </p>
        <div className="hero-cta reveal reveal-delay-3">
          <a href="#experience" className="btn btn-primary">View work</a>
          <a href="#swe-hq" className="btn btn-secondary">Watch SWE HQ</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
