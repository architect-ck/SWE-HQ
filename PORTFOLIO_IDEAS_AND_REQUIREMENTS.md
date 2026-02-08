# Portfolio – Ideas & Requirements

**For:** Chandrakant Sahu  
**YouTube:** [youtube.com/@swe_hq](https://youtube.com/@swe_hq)  
**Content source:** Resume + SWE HQ channel

---

## 1. Purpose & Audience

| Goal | Audience |
|------|----------|
| Showcase 3+ years of backend/BBPS experience at PayU | Recruiters, hiring managers |
| Demonstrate technical depth (Java, Spring Boot, async, Kafka, etc.) | Engineering leads |
| Surface SWE HQ content (tutorials, tips, community) | Viewers, learners, followers |
| One place for contact, links, and credibility | Anyone searching your name |

---

## 2. Suggested Site Structure

### 2.1 Core pages

1. **Home / Hero**
   - Name, one-line tagline (e.g. *Software Engineer · Backend · PayU · IIIT-B*)
   - Short intro (1–2 sentences from resume summary)
   - Primary CTAs: *View work*, *Watch SWE HQ*, *Contact*

2. **About**
   - Professional summary (from resume, slightly narrative)
   - Location: Bengaluru, Karnataka
   - Interests: Algorithms, Data Structures, Agentic AI, complex engineering challenges
   - Optional: short “why SWE HQ” story

3. **Experience**
   - PayU (SDE II → SDE I → Intern) with dates
   - Bullet highlights from resume (optimizations, automation, maker–checker, throttling, IP whitelisting, bill notifications, commission engine, etc.)
   - Keep it scannable: role, dates, 3–5 bullets per role

4. **Projects / Work highlights** (optional but strong)
   - 2–4 “case studies”: e.g. BBPS async optimization, RBI audit automation, Maker–Checker workflow, API throttling
   - For each: problem → approach → tech (Spring Boot, Kafka, Redis, Python, etc.) → outcome (cost/time/accuracy)

5. **Education**
   - M.Tech CS (AI/ML), IIIT-Bangalore, CGPA 7.77, 2021–2023
   - B.Tech CS, CSVTU, CGPA 8.20, 2016–2020

6. **Skills**
   - Grouped as in resume: Languages, Frameworks/Technologies, Tools, Databases
   - Optional: filterable tags or a simple grid

7. **SWE HQ (YouTube)**
   - Dedicated section or page for [youtube.com/@swe_hq](https://youtube.com/@swe_hq)
   - Embed latest or featured videos
   - Link to subscribe + channel
   - Short line: “Tutorials and tips for software engineers”

8. **Certifications & Achievements**
   - Certifications: Agentic AI Architecture, Spring Boot 2.0 (with links)
   - Achievements: GATE 98.82 percentile, CodeRex 2nd place

9. **Contact & Links**
   - Email, phone, LinkedIn
   - LeetCode, HackerRank, EyeEm (Photography)
   - Optional: simple contact form or “mailto” button

---

## 3. Content Mapped from Resume

### 3.1 Copy you can reuse

- **Tagline:** “Results-oriented Software Engineer · 3+ years · PayU · Backend & scalable systems”
- **Summary:** Results-oriented Software Engineer with 3 years of experience at PayU, specializing in scalable backend architectures. Proficient in Java and Spring Boot. Master’s in Computer Science from IIIT-Bangalore. Interested in Algorithms, Data Structures, Agentic AI, and solving complex engineering challenges.

### 3.2 Experience bullets (condensed for web)

**SDE II (Apr 2025 – Present)**  
- Optimized memory-intensive APIs with async processing (CompletableFuture, Spring Boot); reduced infra cost by $400/month  
- Automated RBI audit data extraction (Python, Redshift, chunking, multithreading); 120M+ records, zero data loss, ~6 person-days saved  
- Maker–Checker workflow for BBPS Admin (four-eye approval, audit trail); improved governance and compliance  
- API throttling with token bucket + Redis  

**SDE I (Jul 2023 – Mar 2025)**  
- Dual-layer IP whitelisting (CIDR) for BBPS agents; 100% prevention of credential misuse  
- Proactive bill fetching & notifications; 20% increase in WhatsApp bill payments, Meta as strategic partner  
- Real-time commission calculation & reconciliation (Spring Boot, Kafka, MySQL) for millions of prepaid transactions  

**SDE Intern (Jan–Jul 2023)**  
- Agent–BillCategory–Biller mapping in BBPS Admin (Spring Boot, REST, Angular); zero unauthorized access  
- 10x cron concurrency via async/multithreading  

### 3.3 Links to include

- LinkedIn: `https://linkedin.com/in/chandrakantsahu`
- Email: `chandrakantiiitb@gmail.com`
- Phone: +91 9098669007
- YouTube: `https://youtube.com/@swe_hq`
- LeetCode, HackerRank, EyeEm (as on resume)
- Certification URLs (from resume)

---

## 4. SWE HQ Integration Ideas

- **Hero or About:** “I also run **SWE HQ** on YouTube – tutorials and tips for software engineers.”
- **Dedicated section:** “Latest from SWE HQ” with embedded player + subscribe CTA.
- **Footer:** Channel link and subscribe button.
- **Optional:** “Featured videos” (e.g. 3–4 playlists or videos you’re proud of).

If you use YouTube Data API later, you could show latest uploads automatically; for v1, manual “featured videos” is enough.

---

## 5. Requirements (Functional & Non-Functional)

### 5.1 Must-have

- [ ] Single-page or multi-page site with: Home, About, Experience, Education, Skills, SWE HQ, Certifications/Achievements, Contact/Links  
- [ ] All resume content available (no critical info missing)  
- [ ] SWE HQ section with channel link and at least one embedded video  
- [ ] Mobile-friendly (responsive)  
- [ ] Fast load (minimal heavy assets)  
- [ ] Clear contact: email + LinkedIn (and phone if you want)  
- [ ] No broken links; certification links working  

### 5.2 Nice-to-have

- [ ] Dark/light theme toggle  
- [ ] Simple animations (e.g. on scroll)  
- [ ] Optional blog “Posts” or “Notes” for SWE HQ cross-posts  
- [ ] SEO: meta title, description, Open Graph for sharing  
- [ ] Analytics (e.g. Google Analytics or Plausible)  
- [ ] Optional contact form (e.g. Formspree/Netlify Forms)  

### 5.3 Tech stack (suggestions)

- **Simple:** HTML/CSS/JS, or a static generator (e.g. Astro, 11ty, Hugo).  
- **If you want React:** Next.js (static export) or Vite + React.  
- **Hosting:** GitHub Pages, Netlify, or Vercel (free tier).  
- **Domain:** Optional; `yourname.github.io` or Netlify/Vercel subdomain is fine to start.

---

## 6. Design Direction (optional)

- **Tone:** Professional, clean, engineer-friendly.  
- **Colors:** Neutral base (white/dark gray) + one accent (e.g. blue or green) for links and CTAs.  
- **Typography:** Clear, readable (e.g. Inter, Source Sans, or system fonts).  
- **Layout:** Clear hierarchy: hero → About → Experience → SWE HQ → Rest → Contact.

---

## 7. Next Steps

1. **Confirm:** Which sections do you want on the first version (all above vs. minimal)?  
2. **Choose stack:** Static HTML vs. React/Next.js vs. Astro (I can align to your preference).  
3. **Content:** Use this doc as copy source; we can trim or expand per section.  
4. **Build:** Implement structure, then add SWE HQ block and polish responsive + links.  
5. **Deploy:** Connect repo to GitHub Pages / Netlify / Vercel and add your custom domain if desired.

---

*Once you confirm sections and tech stack, we can move on to actual structure and code (e.g. component layout and content files).*
