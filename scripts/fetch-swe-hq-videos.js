/**
 * Fetches the latest 3–5 videos from the SWE HQ YouTube channel via public RSS.
 * Run before build: npm run fetch-videos (or prebuild).
 * No API key required. View counts are not available in the public RSS feed.
 *
 * Set YOUTUBE_CHANNEL_ID in .env or pass as env var if auto-resolve fails.
 * To get your channel ID: YouTube → Your channel → About → Share channel → Copy channel ID.
 */

import https from 'https'
import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CHANNEL_HANDLE = 'swe_hq'
const MAX_VIDEOS = 4
const OUT_FILE = join(__dirname, '..', 'public', 'swe-hq-videos.json')

function fetchUrl(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: opts.method || 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Portfolio-Build/1.0)',
          ...opts.headers,
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => resolve({ statusCode: res.statusCode, data }))
      }
    )
    req.on('error', reject)
    req.end()
  })
}

function extractChannelIdFromHtml(html) {
  const m = html.match(/"channelId"\s*:\s*"(UC[\w-]+)"/) || html.match(/channel_id=([UC][\w-]{21,})/)
  return m ? m[1] : null
}

async function resolveChannelIdFromHandle(handle) {
  const { statusCode, data } = await fetchUrl(`https://www.youtube.com/@${handle}`)
  if (statusCode !== 200) return null
  return extractChannelIdFromHtml(data)
}

function parseRssEntries(xml) {
  const entries = []
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
  let m
  while ((m = entryRegex.exec(xml)) !== null) {
    const block = m[1]
    const videoId = block.match(/<yt:videoId>([^<]+)</)?.[1]
    const title = block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.replace(/<!\[CDATA\[|\]\]>/g, '').trim()
    const published = block.match(/<published>([^<]+)</)?.[1]
    const link = block.match(/<link[^>]+href="([^"]+)"/)?.[1]
    if (videoId && title) {
      entries.push({
        id: videoId,
        title,
        published: published || null,
        url: link || `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      })
    }
  }
  return entries
}

async function main() {
  let channelId = process.env.YOUTUBE_CHANNEL_ID || process.env.VITE_YOUTUBE_CHANNEL_ID

  if (!channelId) {
    console.log('YOUTUBE_CHANNEL_ID not set, resolving from handle @' + CHANNEL_HANDLE + '...')
    channelId = await resolveChannelIdFromHandle(CHANNEL_HANDLE)
  }

  if (!channelId) {
    console.warn('Could not get channel ID. Create .env with YOUTUBE_CHANNEL_ID=UC... (from YouTube channel About → Share → Copy channel ID)')
    writeFileSync(OUT_FILE, JSON.stringify([]))
    return
  }

  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
  const { statusCode, data } = await fetchUrl(rssUrl)

  if (statusCode !== 200) {
    console.warn('RSS fetch failed:', statusCode)
    writeFileSync(OUT_FILE, JSON.stringify([]))
    return
  }

  const entries = parseRssEntries(data).slice(0, MAX_VIDEOS)
  mkdirSync(dirname(OUT_FILE), { recursive: true })
  writeFileSync(OUT_FILE, JSON.stringify(entries, null, 2))
  console.log('Wrote', entries.length, 'videos to', OUT_FILE)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
