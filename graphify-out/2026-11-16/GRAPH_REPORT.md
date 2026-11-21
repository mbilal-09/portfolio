# Graph Report - portfolio  (2026-11-16)

## Corpus Check
- 19 files · ~4,877 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .xml 1, .css 1)

## Summary
- 212 nodes · 369 edges · 13 communities
- Extraction: 92% EXTRACTED · 7% INFERRED · 1% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8145b5a4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- npm Dependencies
- React Page Components
- CV Skills and Roles
- Identity and Profile
- Portfolio Projects
- Employers and Roles
- Education History
- White Background Portrait
- Vite React Tooling
- Studio Portrait
- Favicon Headshot
- Vercel Deploy Config
- npm Scripts

## God Nodes (most connected - your core abstractions)
1. `Stack` - 23 edges
2. `Muhammad Bilal` - 16 edges
3. `Muhammad Bilal` - 16 edges
4. `Reveal()` - 13 edges
5. `Freelancer (June 2024–Present)` - 12 edges
6. `Mid-Level Full Stack Developer (May 2024–Present)` - 12 edges
7. `SectionHeading()` - 11 edges
8. `Junior Full Stack Developer (Jan 2024–May 2024)` - 10 edges
9. `App()` - 9 edges
10. `MERN Stack Intern (Oct 2023–Dec 2023)` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Stack` --shares_data_with--> `Skills`  [INFERRED]
  public/cv.html → public/resume.pdf
- `Muhammad Bilal` --references--> `Portfolio Website`  [INFERRED]
  public/resume.pdf → index.html
- `Muhammad Bilal` --conceptually_related_to--> `Muhammad Bilal`  [INFERRED]
  index.html → public/cv.html
- `Muhammad Bilal` --references--> `Portfolio Website`  [INFERRED]
  public/cv.html → index.html
- `Muhammad Bilal` --conceptually_related_to--> `Muhammad Bilal`  [INFERRED]
  public/resume.pdf → public/cv.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Schema.org site identity** — index_website, index_profile_page, index_muhammad_bilal [EXTRACTED 1.00]
- **Professional experience timeline** — public_cv_mid_level_full_stack_developer, public_cv_freelancer, public_cv_junior_full_stack_developer, public_cv_mern_stack_intern [EXTRACTED 1.00]
- **Portfolio project set** — public_cv_jadwa_investment, public_cv_ectotrack, public_cv_ask_me_anything, public_cv_dream_meaning_pro, public_cv_dono_volunteering, public_cv_gi_connect, public_cv_pharma_asia [EXTRACTED 1.00]

## Communities (13 total, 0 thin omitted)

### Community 0 - "npm Dependencies"
Cohesion: 0.07
Nodes (41): dependencies, lenis@^1.3.27, react@^19.3.1, react-dom@^19.3.1, react-router-dom@^7.18.5, devDependencies, @babel/core@^7.29.7, babel-plugin-react-compiler@^1.0.0 (+33 more)

### Community 1 - "React Page Components"
Cohesion: 0.19
Nodes (17): react, App(), Contact(), durationFor(), Experience(), months, GlassCursor(), Hero() (+9 more)

### Community 2 - "CV Skills and Roles"
Cohesion: 0.20
Nodes (27): CI/CD, Dart, Experience, Express, Firebase, Flutter, Freelancer (June 2024–Present), Gemini (+19 more)

### Community 3 - "Identity and Profile"
Cohesion: 0.11
Nodes (21): Firebase, Flutter, GitHub mbilal-09, JavaScript, Karachi, Pakistan, LinkedIn m-bilaal, Muhammad Bilal, Next.js (+13 more)

### Community 4 - "Portfolio Projects"
Cohesion: 0.14
Nodes (18): Ask Me Anything, Dono Volunteering, Dream Meaning PRO, EctoTrack, GI Connect, Jadwa Investment, OpenAI, Pharma Asia (+10 more)

### Community 5 - "Employers and Roles"
Cohesion: 0.17
Nodes (12): DigiTrends, BNG Labs, DigiApp Solutions, DigiTrends, BNG Labs, DigiApp Solutions, DigiTrends, Experience (+4 more)

### Community 6 - "Education History"
Cohesion: 0.22
Nodes (11): Saylani Mass IT Training, Bachelor of Science in Computer Science (2024–2028), Education, Saylani Mass IT Training, Sir Syed University of Engineering and Technology, Web and Mobile Development (2022–2023), Bachelor of Science in Computer Science (2024–2028), Education (+3 more)

### Community 7 - "White Background Portrait"
Cohesion: 0.20
Nodes (10): Portrait Photograph, Young Adult Appearance, Full Dark Beard and Mustache, Black Collared Button-Down Shirt, Slight Closed-Mouth Smile, Chest-Up Head and Shoulders Crop, Textured Upward Dark Hair, Professional Headshot (+2 more)

### Community 8 - "Vite React Tooling"
Cohesion: 0.22
Nodes (10): Babel, ESLint, Oxc, @vitejs/plugin-react, @vitejs/plugin-react-swc, React Compiler, React + Vite, SWC (+2 more)

### Community 9 - "Studio Portrait"
Cohesion: 0.32
Nodes (8): Front-facing studio portrait photograph, Full dark beard and mustache, Solid black background, Black collared button-up shirt, Thin reddish outline along hair and shoulders, Professional studio headshot, Dark upswept hair, Young man facing the camera

### Community 10 - "Favicon Headshot"
Cohesion: 0.29
Nodes (7): Portfolio Favicon, Black, Headshot of a Bearded Man in a Black Shirt, Light Gray, Medium Brown, No Lettermark or Text, Personal Identity Mark

### Community 11 - "Vercel Deploy Config"
Cohesion: 0.29
Nodes (6): buildCommand, framework, installCommand, outputDirectory, rewrites, $schema

### Community 12 - "npm Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Ambiguous Edges - Review These
- `Young Adult Appearance` → `Man Facing the Camera`  [AMBIGUOUS]
  public/portrait.jpg · relation: appears_to_be
- `Solid black background` → `Thin reddish outline along hair and shoulders`  [AMBIGUOUS]
  src/assets/portrait.png · relation: conceptually_related_to

## Knowledge Gaps
- **47 isolated node(s):** `Black`, `Light Gray`, `Medium Brown`, `No Lettermark or Text`, `Personal Identity Mark` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 64 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Muhammad Bilal` connect `CV Skills and Roles` to `Identity and Profile`, `Portfolio Projects`, `Education History`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Muhammad Bilal` (e.g. with `Muhammad Bilal` and `Portfolio Website`) actually correct?**
  _`Muhammad Bilal` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Black`, `Light Gray`, `Medium Brown` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `npm Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.0708245243128964 - nodes in this community are weakly interconnected._
- **Why does `react` connect `React Page Components` to `npm Dependencies`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Young Adult Appearance` and `Man Facing the Camera`?**
  _Edge tagged AMBIGUOUS (relation: appears_to_be) - confidence is low._
- **What is the exact relationship between `Solid black background` and `Thin reddish outline along hair and shoulders`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._