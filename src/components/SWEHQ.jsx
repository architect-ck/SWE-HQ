const CHANNEL_URL = 'https://youtube.com/@swe_hq'
// Replace with your YouTube video ID (from channel) for the embed below
const FEATURED_VIDEO_ID = '' // e.g. 'abc123' from https://youtube.com/watch?v=abc123

function SWEHQ() {
  return (
    <section id="swe-hq" className="section swe-hq-section">
      <div className="container">
        <h2 className="section-title">SWE HQ</h2>
        <p className="swe-hq-intro">
          Tutorials and tips for software engineers. Subscribe for backend, system design, and career content.
        </p>
        {FEATURED_VIDEO_ID && (
        <div className="swe-hq-embed">
          <iframe
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
            title="SWE HQ – Featured video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="swe-hq-video"
          />
        </div>
        )}
        <div className="swe-hq-cta">
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Watch on YouTube · Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}

export default SWEHQ
