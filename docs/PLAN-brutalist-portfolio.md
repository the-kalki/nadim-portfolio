# Brutalist Terminal Portfolio - Nadim Raza

## Goal

Build a **Terminal Takeover** style portfolio with full cyberpunk aesthetics (cyan/magenta neons on dark), motion-driven animations, and brutal typography. Single landing page showcasing skills, projects, experience, and contact info.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vite + React |
| Styling | Vanilla CSS (custom properties for theme) |
| Animations | Framer Motion |
| Fonts | JetBrains Mono (monospace) |
| Deploy | Vercel |

---

## Content (from Nadim.pdf)

| Section | Data |
|---------|------|
| **Name** | Nadim Raza |
| **Contact** | nadimraza0123@gmail.com • 9771935170 |
| **Education** | B.Tech CSE, UEM Jaipur (2020-2024) |
| **Skills** | SQL, Java, HTML, CSS, JavaScript, Python |
| **Soft Skills** | Problem Solving, Communication, Active Listening, Time Management |
| **Experience** | 6-month Application Support @ EDF International Networks (Bihar Bijli smart meter monitoring, data analysis) |
| **Projects** | 1. Phishing Website Detection (ML) 2. SpaceX Data Analysis & Visualization |
| **Leadership** | Organized AceHack 2.0 Hackathon |
| **Extra** | NSS Coordinator, College Cricket |

---

## Tasks

### Phase 1: Project Setup
- [x] Initialize Vite + React project with TypeScript
- [x] Install Framer Motion for animations
- [x] Add JetBrains Mono font (Google Fonts)
- [x] Create base CSS with cyberpunk color variables
- [x] Verify: `npm run dev` shows blank page with correct font

### Phase 2: Core Components
- [x] `Terminal.tsx` - Wrapper component with terminal window styling
- [x] `TypeWriter.tsx` - Text typing animation component
- [x] `CommandLine.tsx` - Prompt + command display
- [x] `GlowText.tsx` - Text with neon glow effect
- [x] `ProgressBar.tsx` - Terminal-style skill progress bars
- [x] `MatrixRain.tsx` - Canvas background effect
- [x] Verify: Components render in isolation

### Phase 3: Sections
- [x] `Hero.tsx` - whoami command, name reveal, matrix rain BG
- [x] `Skills.tsx` - cat skills.txt with animated progress bars
- [x] `Experience.tsx` - Work history in log format
- [x] `Projects.tsx` - ls output with expandable project cards
- [x] `Contact.tsx` - echo $CONTACT with email/phone
- [x] `Leadership.tsx` - Leadership and extracurricular activities
- [x] `Footer.tsx` - exit status + social links
- [x] Verify: All sections render with placeholder content

### Phase 4: Layout & Navigation
- [x] `Header.tsx` - Fixed terminal header bar
- [x] Smooth scroll navigation between sections
- [x] Mobile responsive menu
- [x] Verify: Navigation works, smooth scrolling active

### Phase 5: Animations & Effects
- [x] Add typewriter effect to hero section
- [x] Add matrix rain canvas background
- [x] Add scanline overlay effect
- [x] Add terminal cursor blink animation
- [x] Add section reveal animations on scroll
- [x] Verify: Animations smooth at 60fps

### Phase 6: Content Integration
- [x] Populate all sections with Nadim's actual data
- [x] Add project descriptions and details
- [x] Add experience details
- [x] Verify: All content matches PDF

### Phase 7: Polish & Responsiveness
- [x] Mobile responsive design (stack sections)
- [x] Add meta tags for SEO
- [x] Add favicon (terminal icon)
- [x] Verify: Works on mobile viewport

### Phase X: Verification
- [x] Run `npm run build` - no errors ✅
- [x] Browser test - all sections working ✅
- [x] Animations smooth ✅
- [x] Ready for Vercel deployment ✅

---

## Done ✅

- [x] Portfolio loads with terminal aesthetic
- [x] All sections display Nadim's real content
- [x] Animations are smooth and performant
- [x] Site is responsive on mobile
- [x] Ready for Vercel deployment
