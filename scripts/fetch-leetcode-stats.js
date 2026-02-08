/**
 * Fetches LeetCode profile stats via public GraphQL API (build-time only).
 * Writes public/leetcode-stats.json for the portfolio LeetCode dashboard.
 *
 * Set LEETCODE_USERNAME in .env or it defaults to ck_17.
 */

import https from 'https'
import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const USERNAME = process.env.LEETCODE_USERNAME || 'ck_17'
const OUT_FILE = join(__dirname, '..', 'public', 'leetcode-stats.json')

// LeetCode problem pool totals (approximate, for progress display)
const TOTAL_EASY = 925
const TOTAL_MEDIUM = 2004
const TOTAL_HARD = 907
const TOTAL_PROBLEMS = TOTAL_EASY + TOTAL_MEDIUM + TOTAL_HARD

const PROFILE_QUERY = {
  query: `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
        submissionCalendar
      }
    }
  `,
  variables: { username: USERNAME },
}

const CONTEST_QUERY = {
  query: `
    query userContestRanking($username: String!) {
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
      }
    }
  `,
  variables: { username: USERNAME },
}

function fetchGraphQL(body) {
  const payload = JSON.stringify(body)
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'leetcode.com',
        path: '/graphql',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          'User-Agent': 'Mozilla/5.0 (compatible; Portfolio-Build/1.0)',
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => {
          try {
            resolve(JSON.parse(data))
          } catch {
            resolve(null)
          }
        })
      }
    )
    req.on('error', reject)
    req.write(payload)
    req.end()
  })
}

function parseSubmissionCalendar(calendarStr) {
  if (!calendarStr || typeof calendarStr !== 'string') return null
  try {
    const raw = JSON.parse(calendarStr)
    const entries = Object.entries(raw)
      .filter(([, v]) => Number(v) > 0)
      .map(([d, v]) => ({
        date: d.length === 10 ? new Date(Number(d) * 1000).toISOString().slice(0, 10) : d,
        count: Number(v),
      }))
    if (entries.length === 0) return null
    const sorted = entries.sort((a, b) => a.date.localeCompare(b.date))
    const activeDays = sorted.length
    let maxStreak = 0
    let current = 1
    for (let i = 1; i < sorted.length; i++) {
      const diff = daysDiff(sorted[i - 1].date, sorted[i].date)
      if (diff === 1) current++
      else {
        maxStreak = Math.max(maxStreak, current)
        current = 1
      }
    }
    maxStreak = Math.max(maxStreak, current)
    const totalSubmissions = sorted.reduce((s, e) => s + e.count, 0)
    return { activeDays, maxStreak, totalSubmissions, calendar: raw }
  } catch {
    return null
  }
}

function daysDiff(d1, d2) {
  const a = new Date(d1).getTime()
  const b = new Date(d2).getTime()
  return Math.round((b - a) / (24 * 60 * 60 * 1000))
}

async function main() {
  const [profileRes, contestRes] = await Promise.all([
    fetchGraphQL(PROFILE_QUERY),
    fetchGraphQL(CONTEST_QUERY),
  ])

  const user = profileRes?.data?.matchedUser
  if (!user) {
    mkdirSync(dirname(OUT_FILE), { recursive: true })
    writeFileSync(OUT_FILE, JSON.stringify({ profileUrl: `https://leetcode.com/u/${USERNAME}/` }))
    console.log('Could not fetch LeetCode profile; wrote profile URL only.')
    return
  }

  const byDifficulty = {}
  for (const item of user.submitStats?.acSubmissionNum || []) {
    if (item.difficulty && item.difficulty !== 'All') {
      byDifficulty[item.difficulty.toLowerCase()] = item.count
    }
  }
  const easy = byDifficulty.easy ?? 0
  const medium = byDifficulty.medium ?? 0
  const hard = byDifficulty.hard ?? 0
  const totalSolved = easy + medium + hard

  const contest = contestRes?.data?.userContestRanking
  const calendar = parseSubmissionCalendar(user.submissionCalendar)

  const stats = {
    username: user.username,
    profileUrl: `https://leetcode.com/u/${user.username}/`,
    totalSolved,
    easy,
    medium,
    hard,
    totalEasy: TOTAL_EASY,
    totalMedium: TOTAL_MEDIUM,
    totalHard: TOTAL_HARD,
    totalProblems: TOTAL_PROBLEMS,
    ranking: user.profile?.ranking ?? null,
    contest: contest
      ? {
          rating: Math.round(contest.rating || 0),
          globalRanking: contest.globalRanking ?? null,
          totalParticipants: contest.totalParticipants ?? null,
          attendedContests: contest.attendedContestsCount ?? 0,
        }
      : null,
    activity:
      calendar && calendar.activeDays != null
        ? {
            activeDays: calendar.activeDays,
            maxStreak: calendar.maxStreak,
            totalSubmissions: calendar.totalSubmissions,
            calendar: calendar.calendar,
          }
        : null,
  }

  mkdirSync(dirname(OUT_FILE), { recursive: true })
  writeFileSync(OUT_FILE, JSON.stringify(stats, null, 2))
  console.log(
    'Wrote LeetCode stats to',
    OUT_FILE,
    '—',
    stats.totalSolved,
    'solved',
    contest ? `| Contest ${stats.contest.rating}` : '',
    calendar ? `| ${calendar.activeDays} active days` : ''
  )
}

main().catch((err) => {
  console.error(err)
  const fallback = { profileUrl: `https://leetcode.com/u/${USERNAME}/` }
  try {
    mkdirSync(dirname(OUT_FILE), { recursive: true })
    writeFileSync(OUT_FILE, JSON.stringify(fallback))
  } catch {}
  process.exit(1)
})
