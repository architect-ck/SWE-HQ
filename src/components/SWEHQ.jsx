import { useState, useEffect } from 'react'

const CHANNEL_URL = 'https://youtube.com/@swe_hq'
const VIDEOS_JSON = `${import.meta.env.BASE_URL}swe-hq-videos.json`

function SWEHQ() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(VIDEOS_JSON)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Failed to load videos'))))
      .then((data) => {
        setVideos(Array.isArray(data) ? data.slice(0, 4) : [])
        setError(null)
      })
      .catch((err) => {
        setVideos([])
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="swe-hq" className="section swe-hq-section">
      <div className="container">
        <h2 className="section-title">SWE HQ</h2>
        <p className="swe-hq-intro">
          Tutorials and tips for software engineers. Subscribe for backend, system design, and career content.
        </p>

        {loading && (
          <div className="swe-hq-loading" aria-busy="true">
            Loading latest videos…
          </div>
        )}

        {!loading && videos.length > 0 && (
          <div className="swe-hq-grid" aria-label="Latest videos from SWE HQ">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="swe-hq-card"
              >
                <div className="swe-hq-card-thumb">
                  <img
                    src={video.thumbnail}
                    alt=""
                    loading="lazy"
                    width={320}
                    height={180}
                  />
                </div>
                <h3 className="swe-hq-card-title">{video.title}</h3>
                {video.published && (
                  <time className="swe-hq-card-date" dateTime={video.published}>
                    {formatDate(video.published)}
                  </time>
                )}
              </a>
            ))}
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

function formatDate(iso) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return ''
  }
}

export default SWEHQ
