# ROLE

You are a senior frontend engineer, UI/UX designer, technical writer, and code reviewer.

Your task is to design and build a production-quality personal developer portfolio for:

**Name:** Bagus Kurniawan
**Brand/handle:** Kurngxtech
**Primary target:** Software Engineer
**Career direction:** Backend Developer / Cloud Engineer
**Target employment:** Full-time
**Target companies:** International startups, remote international companies, and software/technology companies
**Current positioning:** Developer with internship and production experience

This portfolio is intended to be used as an actual job-search portfolio, not as a design experiment.

The primary objective is:

> Make recruiters and technical interviewers quickly understand who Bagus is, what he has built, what he personally contributed, and what direction his engineering career is moving toward.

Do not optimize the website merely for visual impressiveness.

Prioritize:

1. Credibility
2. Clarity
3. Technical evidence
4. Professional presentation
5. Accessibility
6. Performance
7. Responsive design
8. Maintainability
9. Subtle modern interaction
10.   Visual polish

---

# IMPORTANT CONTEXT ABOUT THE DEVELOPER

Bagus Kurniawan is an IT / Information Systems student with hands-on experience building web and mobile applications.

He has internship/production experience through the Saint Ink Tattoo project.

His current technical interests are:

- Backend development
- Cloud engineering
- Application security
- Software engineering
- Web application development

His longer-term career direction is:

> Cloud and Security career with application/software engineering.

Do NOT falsely present him as an experienced cloud engineer or security engineer.

The portfolio should communicate:

> Current evidence: Web / Full-stack development
> Current professional experience: Production internship project
> Future direction: Backend + Cloud + Security

This distinction is important for credibility.

---

# CORE PROFESSIONAL POSITIONING

Use this as the foundation of the website:

## Primary headline

**Software Engineer**

## Supporting positioning

**Building reliable web applications and production-ready systems, with a growing focus on backend engineering, cloud infrastructure, and application security.**

## Personal philosophy

**I build software that goes beyond modern design—focused on usability, reliability, security, and real-world impact.**

The wording may be refined slightly if necessary for visual rhythm, but preserve the meaning.

Avoid generic statements such as:

- "Passionate developer"
- "Coding enthusiast"
- "Technology lover"
- "I love solving problems"
- "Future AI engineer"
- "Full-stack ninja"
- "10x developer"

Do not use exaggerated marketing language.

---

# TECHNOLOGY STACK

Build the portfolio with:

- Astro
- TypeScript
- Tailwind CSS
- React only where interactive client-side components genuinely require it
- Framer Motion only if compatible with the architecture and genuinely useful
- MDX or Astro Content Collections for project case studies and technical notes
- Vercel for deployment

Do not introduce unnecessary libraries.

Prefer Astro-native solutions.

The website should remain mostly static/server-rendered and highly performant.

---

# DESIGN DIRECTION

Visual direction:

**Minimal Professional + Modern Developer**

The design should feel like a serious software engineer's portfolio in 2026.

Reference the general design principles of modern developer products and engineering websites, but do NOT copy any company's exact design.

Desired qualities:

- Minimal
- Technical
- Clean
- Editorial
- Precise
- Modern
- Professional
- Slightly developer-oriented
- Strong typography
- Excellent spacing
- Strong visual hierarchy

Avoid:

- Excessive glassmorphism
- Huge gradients
- Neon cyberpunk aesthetics
- Excessive 3D
- Particle backgrounds
- Fake terminal animations
- Excessive floating elements
- Giant animated blobs
- Overly colorful interfaces
- Excessive rounded cards
- Generic SaaS landing page appearance

The website should communicate:

> "This person is an engineer who cares about the product."

Not:

> "This person spent all their time making their portfolio flashy."

---

# COLOR SYSTEM

Choose a restrained professional color system.

Primary:

- Near-black / charcoal for primary text
- Off-white / white for main backgrounds
- Neutral gray for secondary text
- One restrained technical accent color

Suggested accent:

**#2563EB**

You may adjust the exact accent if needed, but keep it restrained.

Dark mode:

- Near-black background
- Off-white text
- Neutral gray secondary text
- Same accent system

Do not use multiple competing accent colors.

---

# TYPOGRAPHY

Use a professional sans-serif for normal content.

Use a monospace font for:

- Technology labels
- Project metadata
- Code snippets
- Technical tags
- Small UI labels
- Section metadata

Suggested combination:

Primary:
**Inter**

Monospace:
**JetBrains Mono**

If these create unnecessary loading overhead, choose optimized system fallbacks.

Typography must prioritize readability.

---

# DARK / LIGHT MODE

Implement both:

- Light mode
- Dark mode

Requirements:

- Respect system preference on first visit
- Allow manual toggle
- Persist user preference
- Avoid flash of incorrect theme
- Ensure sufficient contrast
- Test all components in both themes

Do not simply invert colors.

Review every section independently for dark-mode readability.

---

# RESPONSIVE DESIGN

The website must be fully responsive.

Test at minimum:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Mobile is not an afterthought.

On mobile:

- Navigation becomes compact
- Project cards stack correctly
- Typography scales appropriately
- Code blocks remain readable
- Images do not overflow
- Buttons remain accessible
- Touch targets are large enough
- No horizontal scrolling

---

# SITE STRUCTURE

Create:

/

/projects

/projects/saint-ink-tattoo

/projects/smartwaste

/projects/cinema-ticketing

/projects/android-health

/projects/seed-of-hope

/experience

/about

/notes

/contact

Optional:

/resume

Use Astro content collections or MDX for project case studies.

---

# NAVIGATION

Desktop:

Home
Work
Experience
About
Notes
Contact

Right side:

Theme toggle

Optional:

Download CV

Mobile:

Compact navigation menu.

Navigation should remain visually simple.

---

# HOMEPAGE STRUCTURE

The homepage should follow this hierarchy:

1. Navigation
2. Hero
3. Selected Work
4. Experience
5. Technical Focus
6. Currently Learning
7. Notes
8. About preview
9. Contact CTA
10.   Footer

Do not put every piece of information on the homepage.

The homepage should function as a high-quality summary.

---

# HERO SECTION

Create a strong but restrained hero.

Content:

**Bagus Kurniawan**

**Software Engineer**

Supporting text:

> Building reliable web applications and production-ready systems, with a growing focus on backend engineering, cloud infrastructure, and application security.

Small availability indicator:

**Open to full-time opportunities**

Buttons:

**View Projects**
**GitHub**
**Download CV**

Optional secondary text:

> Based in Indonesia · Open to remote international opportunities

Do not make the hero excessively tall.

Avoid a giant animated background.

---

# HERO TECHNICAL DETAIL

Include subtle technical metadata somewhere in the hero.

Example:

```text
Currently working with

TypeScript
React
Angular
Node.js
PostgreSQL
Supabase
Docker
```

But don't make this look like a skill bar.

---

# SELECTED WORK

Title:

**Selected Work**

Subtitle:

> Projects built through academic, personal, and production experience.

Feature three primary projects prominently.

Order:

1. Saint Ink Tattoo
2. Cinema Ticketing System
3. SmartWaste

Then show secondary projects:

4. Android Health Tracking
5. Seed of Hope Orphanage

Do not rank projects using labels like:

- Best
- #1
- Winner
- Top project

The visual prominence is sufficient.

---

# PROJECT 01 — SAINT INK TATTOO

This is the most important portfolio project.

Title:

**Saint Ink Tattoo**

Category:

**Production Web Platform · Custom CMS**

Technology:

- React
- TypeScript
- Supabase
- PostgreSQL
- RLS
- Playwright
- GitHub Actions
- Vercel

Context:

This was both:

- A real client/company project
- An internship project

Team:

**2 developers**

Bagus's role:

**Backend Developer**

Important functionality:

- Serverless web application
- Landing page
- Custom CMS
- Admin login/authentication
- CMS content management
- Email/contact system through landing page
- Supabase database
- PostgreSQL Row Level Security
- Automated testing
- CI/CD
- Production deployment

Project description:

> A production web platform developed during an internship to provide a public-facing landing page and a custom CMS that allows administrators to manage website content without directly accessing the database.

Important challenge:

The admin login initially had a usability/performance issue where successful authentication could take several seconds before the CMS page became available, leading users to repeatedly click the login button.

The issue was eventually resolved.

IMPORTANT:

Do NOT invent the technical root cause or exact solution.

Create a placeholder:

```text
[TECHNICAL ROOT CAUSE AND SOLUTION TO BE DOCUMENTED]
```

until the developer provides the actual implementation details.

Project result:

> The system was completed and deployed, including the landing page, custom CMS, authentication, email functionality, database access controls, testing, and CI/CD.

Important limitation:

> Real-world user testing was limited because there were not enough volunteer users available for broader testing.

Present this as a project limitation, not as a failure.

Repository:

Private.

Do not display a fake GitHub link.

Live deployment:

Currently deployed using Vercel free plan.

There is currently no custom domain.

Do not invent a domain.

---

# SAINT INK CASE STUDY STRUCTURE

The project page must contain:

## Overview

What the application is.

## Context

Internship + real client/company project.

## My Role

Backend Developer.

## Team

2 developers.

## Problem

Explain the initial business/product requirement.

## What I Built

List actual contributions.

## Architecture

Create a clean architecture diagram.

Example:

```text
User
  ↓
Landing Page
  ↓
Application
  ↓
Supabase
  ├── Authentication
  ├── PostgreSQL
  ├── RLS
  └── Data
```

Only include architecture components that are actually present.

## Security

Explain:

- Authentication
- Authorization
- PostgreSQL RLS
- Protected CMS access

Do not make security claims that cannot be verified.

## Testing

Explain:

- Playwright
- Automated test coverage where known
- CI quality checks

Do not invent coverage percentages.

## Engineering Challenge

Explain the login-delay issue.

## Solution

Placeholder until exact implementation is supplied.

## Result

Explain what was delivered.

## Limitations

Mention limited real-user testing.

## Links

- Live deployment
- Repository if eventually made public
- Screenshots

---

# PROJECT 02 — CINEMA TICKETING SYSTEM

Title:

**Cinema Ticketing System**

Category:

**Multi-role Web Application**

Technology:

- Angular
- TypeScript
- MongoDB

The system has three major roles:

Customer
Cinema Organizer
Admin

Visualize this relationship.

Customer:

- Browse movies
- Select movie/show
- Book tickets
- Other features based on actual project implementation

Cinema Organizer:

- Manage movie-related operations based on actual implementation

Admin:

- Manage system-level operations based on actual implementation

IMPORTANT:

Do not invent features.

The project page should initially contain placeholders for exact functionality until the project report is provided.

Highlight:

> A multi-role cinema booking system designed around different workflows for customers, cinema organizers, and administrators.

Case study structure:

- Problem
- Solution
- User roles
- Features
- My contribution
- Architecture
- Database
- Technical challenges
- Result
- Links

---

# PROJECT 03 — SMARTWASTE

Title:

**SmartWaste**

Category:

**Food Waste Management Web Application**

Technology:

- Angular
- TypeScript
- MongoDB

Core idea:

> A web application designed to help maximize food utilization and reduce unnecessary food waste.

Do not claim measured environmental impact unless evidence is provided.

Case study:

- Problem
- Target users
- Solution
- Features
- My contribution
- Architecture
- Database
- Technical challenge
- Result
- Links

Leave exact features as placeholders until the project report is provided.

---

# PROJECT 04 — ANDROID HEALTH TRACKING

Title:

**Android Health Tracking**

Technology:

- Kotlin

Category:

**Android Mobile Application**

Keep this project visually smaller than the first three.

Case study:

- Problem
- Features
- My contribution
- Architecture
- Technical implementation
- Result
- Screenshots
- GitHub

Do not invent medical/health capabilities.

Use only verified information from the project report.

---

# PROJECT 05 — SEED OF HOPE ORPHANAGE

Title:

**Seed of Hope Orphanage**

Technology:

- HTML
- CSS
- JavaScript

Category:

**Nonprofit Landing Page**

This should be a secondary project.

Focus on:

- Purpose
- Website structure
- Responsive UI
- Frontend implementation
- Real organization context if confirmed

Do not overstate technical complexity.

---

# EXPERIENCE SECTION

Create a professional experience section.

Entry:

**Software Development Intern**

2026

Company:

[Company name — placeholder until provided]

Description:

> Contributed to a production web platform as part of a two-person development team, with responsibilities spanning backend-oriented development, CMS functionality, authentication, database integration, security controls, testing, CI/CD, and production deployment.

Role:

**Backend Developer**

Project:

**Saint Ink Tattoo**

Add:

**View Case Study →**

Do not fabricate company name, internship dates, achievements, or metrics.

---

# TECHNICAL SKILLS

Create a visually clean technical skills section.

Categories:

## Languages

Python
Java
JavaScript
TypeScript
Kotlin

## Frontend

React
Angular
Vue
Astro

## Backend

Node.js
Laravel

## Databases

PostgreSQL
MySQL
MongoDB
Supabase

## Testing

Playwright
Cypress
Selenium

## DevOps / Tools

Docker
Ubuntu
Git
GitHub
GitHub Actions
Vercel

Do not use:

- Star ratings
- Percentage bars
- "Expert"
- "Master"
- Arbitrary proficiency numbers

Instead, provide evidence through project links.

---

# CURRENTLY LEARNING

Create a section communicating career direction without exaggerating expertise.

## Backend Engineering

APIs
System architecture
Database design
Server-side development

## Cloud Engineering

Linux
Docker
Deployment
Infrastructure fundamentals

## Application Security

Authentication
Authorization
Secure data access
Web security fundamentals

## AI Engineering

AI-assisted applications
LLM APIs
AI application architecture

Use wording such as:

**Currently learning**

not:

**Expertise**

---

# ABOUT SECTION

Create a concise professional About page.

Base content:

> I'm Bagus Kurniawan, an Information Systems student and software developer with hands-on experience building web and mobile applications, including a production project developed during my internship.

> My current focus is backend engineering, cloud infrastructure, and application security. I'm interested in building systems that are not only functional and maintainable, but also reliable and trustworthy when handling user data.

> My longer-term goal is to work at the intersection of software engineering, cloud infrastructure, and security.

Keep this concise.

Do not write a generic motivational essay.

---

# AI-ASSISTED DEVELOPMENT DISCLOSURE

Bagus uses AI coding tools and AI agents during development.

Do not hide this.

Do not make AI usage the centerpiece of the portfolio.

If appropriate, include a small statement in the About or Notes section:

> I use AI-assisted development tools to accelerate implementation, debugging, documentation, and exploration. I remain responsible for reviewing, testing, integrating, and validating the resulting software.

Do not claim that AI-generated work was manually written entirely by Bagus.

---

# NOTES / TECHNICAL WRITING

Create a lightweight technical notes section using Astro content collections/MDX.

Initial entries can be placeholders:

1. What I Learned Implementing PostgreSQL Row Level Security
2. Debugging an Authentication Delay in a Production Application
3. What I Learned From My First Production Deployment
4. Understanding Docker as a Beginner
5. Building My First Backend API
6. Lessons From Using AI-Assisted Development

Each article should have:

- Title
- Date
- Reading time
- Category
- Short summary
- Content
- Related technologies

Do not generate fake personal experiences.

If an article describes something Bagus has not actually done, mark it as a placeholder rather than inventing the experience.

---

# CONTACT SECTION

Headline:

**Let's build something useful.**

Supporting text:

> I'm currently open to full-time Software Engineering opportunities.

Provide:

- Email
- GitHub
- LinkedIn
- Instagram
- WhatsApp
- CV download

Only show actual URLs once supplied.

Do not invent contact details.

Create a contact form if practical, but prioritize a direct email link.

If implementing a contact form, protect it against:

- Spam
- Invalid input
- Injection
- Excessive requests

Do not create unnecessary backend infrastructure for the contact form unless required.

---

# GITHUB

Primary GitHub:

https://github.com/kurngxtech/

Use the GitHub profile link.

Featured repositories should eventually include:

- Saint Ink Tattoo — if repository can be made public
- Cinema Ticketing System
- SmartWaste
- SavePlateApp if confirmed as a project Bagus wants publicly featured

Do not expose private repositories.

Do not create fake repository links.

The portfolio should support GitHub links through project frontmatter/data.

---

# CV

Provide:

**Download CV**

Use a placeholder until the actual CV is provided.

Do not generate fake qualifications.

---

# PROJECT DATA ARCHITECTURE

Do not hardcode every project directly into page components.

Create structured project data.

Example concept:

```ts
interface Project {
   slug: string;
   title: string;
   category: string;
   description: string;
   featured: boolean;
   technologies: string[];
   role: string;
   team?: string;
   year: string;
   status: string;
   liveUrl?: string;
   repositoryUrl?: string;
   image?: string;
   highlights: string[];
}
```

Store project case studies separately using Astro Content Collections or MDX.

This should make adding future projects easy.

---

# FUTURE PROJECT SUPPORT

The portfolio must be designed so that future projects can be added without redesigning the site.

Potential future projects:

- AI application
- Cloud infrastructure project
- Security project
- Backend API
- VPSentinel
- PhishGuard

Do not include these as completed projects.

If there is a "Currently Learning" section, future projects may be referenced as goals, but clearly mark them as:

**In progress**
or
**Planned**

only if appropriate.

---

# INTERACTION DESIGN

Use subtle interactions.

Allowed:

- Smooth hover transitions
- Project card elevation/transform
- Text reveal
- Section entrance animations
- Navigation transitions
- Theme transition
- Image hover
- Subtle underline animations
- Small technical UI interactions

Avoid:

- Full-screen loading animation
- Long intro animation
- Scroll hijacking
- Excessive parallax
- Cursor replacement
- Infinite animations
- Distracting background motion

Animation should enhance hierarchy, not become the content.

Respect:

```css
prefers-reduced-motion
```

Users who prefer reduced motion must receive an accessible experience.

---

# DEVELOPER AESTHETIC

Include subtle developer-oriented visual language.

Examples:

```text
01 / PROJECT
02 / EXPERIENCE
03 / ABOUT
```

or:

```text
~/projects/saint-ink
```

or small monospace metadata.

Use this sparingly.

Do not make the entire site look like a terminal.

---

# PROJECT VISUALS

Every project should support:

- Hero image
- Screenshot gallery
- Architecture diagram
- Technical metadata
- Optional code snippet

For Saint Ink specifically, prioritize:

1. Landing page screenshot
2. CMS screenshot
3. Authentication screenshot
4. Architecture diagram
5. Database/RLS technical visualization
6. Testing/CI screenshot if available

Do not create fake screenshots.

Use placeholders until real assets are provided.

---

# ACCESSIBILITY

Meet strong accessibility standards.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible links
- Alt text
- Good contrast
- Reduced motion support
- Form labels
- No color-only communication
- Mobile accessibility

Do not sacrifice accessibility for visual aesthetics.

---

# PERFORMANCE

This is a developer portfolio.

Performance matters.

Target:

- Minimal client-side JavaScript
- Optimized images
- Responsive images
- Lazy loading where appropriate
- Proper font loading
- No unnecessary dependencies
- Static generation wherever possible
- Good Core Web Vitals
- Good Lighthouse performance

Do not ship a 500KB JavaScript bundle for a static portfolio.

Astro should remain the primary rendering strategy.

---

# SEO

Implement:

- Page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter/X metadata
- Sitemap
- robots.txt
- Structured metadata where useful
- Semantic HTML

Create a reusable SEO component.

Each project page should have unique metadata.

---

# SECURITY

Apply normal web security practices.

Do not expose:

- API keys
- Supabase secrets
- private repository URLs
- credentials
- personal sensitive information

Validate contact form inputs if a contact form is implemented.

Do not put secrets in client-side JavaScript.

---

# ANALYTICS

Do not add invasive analytics by default.

If analytics are implemented later, structure the code so the provider can be added without changing the site's architecture.

---

# FOOTER

Keep it minimal.

Example:

```text
Bagus Kurniawan
Software Engineer

Built with Astro · TypeScript · Tailwind CSS

GitHub
LinkedIn
Email

© 2026 Bagus Kurniawan
```

Do not add unnecessary footer clutter.

---

# CONTENT RULES

This is extremely important.

Never invent:

- Job experience
- Company names
- Metrics
- Users
- Performance improvements
- Revenue
- Security claims
- Cloud experience
- Certifications
- Awards
- GPA
- Project features
- Technical architecture
- Technologies
- Business results

If information is missing, use:

```text
[PLACEHOLDER — INFORMATION REQUIRED]
```

rather than fabricating content.

---

# PROFESSIONAL HONESTY

The portfolio must distinguish:

### Proven experience

- Web development
- React
- Angular
- TypeScript
- Supabase
- PostgreSQL
- MongoDB
- Kotlin
- Testing
- GitHub
- Docker
- Production deployment
- Internship experience

### Growing skills

- Backend engineering
- Cloud engineering
- Application security
- AI engineering

Do not blur these categories.

---

# RECRUITER UX

A recruiter should understand the following within approximately 30 seconds:

1. Who Bagus is
2. What role he wants
3. Whether he has professional experience
4. What technologies he uses
5. What his strongest project is
6. Where to see his work
7. How to contact him

Optimize the information hierarchy around these questions.

---

# TECHNICAL RECRUITER UX

A technical reviewer should be able to discover:

- Source code
- Architecture
- Database choices
- Security implementation
- Testing
- CI/CD
- Deployment
- Personal contribution
- Technical challenges
- Engineering decisions

This is why every major project needs a case study.

---

# PROJECT CARD DESIGN

Project cards should show:

```text
PROJECT TYPE

Project Name

Short one-line problem/solution description.

React · TypeScript · Supabase

[View Case Study]
```

Do not display 15 technology logos.

Limit visible technology tags to the most relevant ones.

---

# ENGINEERING DECISIONS

For major projects, include an "Engineering Decisions" section.

Example:

```text
Why PostgreSQL RLS?

[Actual explanation]

Why Playwright?

[Actual explanation]

Why this architecture?

[Actual explanation]
```

Only write explanations supported by actual project evidence.

If unknown, create placeholders.

---

# ARCHITECTURE VISUALIZATION

Architecture diagrams should be:

- Simple
- Clean
- Monochrome/neutral
- Consistent with site design
- Readable on mobile
- Technically accurate

Do not create decorative architecture diagrams that don't represent the real system.

---

# DESIGN SYSTEM

Create reusable components:

- Navbar
- Button
- Badge
- SectionHeading
- ProjectCard
- ProjectHero
- TechStack
- CaseStudySection
- ArchitectureDiagram
- ExperienceItem
- NoteCard
- ThemeToggle
- ContactCTA
- Footer
- SEO component

Use consistent spacing and typography tokens.

Avoid component duplication.

---

# CODE QUALITY

Use:

- TypeScript
- Strong typing
- Reusable components
- Clean folder structure
- Clear naming
- Small components
- No unnecessary abstractions
- No duplicated data
- No dead code
- No unused dependencies

Run linting and formatting.

---

# RECOMMENDED DIRECTORY STRUCTURE

Use an architecture similar to:

```text
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── projects/
│   └── sections/
│
├── content/
│   ├── projects/
│   └── notes/
│
├── layouts/
│
├── pages/
│   ├── index.astro
│   ├── projects/
│   ├── experience/
│   ├── about/
│   ├── notes/
│   └── contact/
│
├── styles/
│
├── data/
│
└── utils/
```

Adapt the exact structure to Astro conventions.

---

# DEVELOPMENT WORKFLOW

Do not immediately start writing hundreds of lines of code.

First:

## Phase 1 — Inspect

Inspect the current repository.

Determine:

- Existing files
- Existing Astro setup
- Package manager
- Existing dependencies
- Existing components
- Existing assets
- Existing configuration

Do not destroy existing work without understanding it.

## Phase 2 — Plan

Create:

- Information architecture
- Component architecture
- Content model
- Design tokens
- Responsive strategy
- Project data structure

## Phase 3 — Implement foundation

Build:

- Astro setup
- Global styles
- Typography
- Theme
- Layout
- Navbar
- Footer
- SEO

## Phase 4 — Homepage

Implement:

- Hero
- Selected Work
- Experience
- Skills
- Currently Learning
- Notes
- Contact CTA

## Phase 5 — Case studies

Implement project pages.

Saint Ink Tattoo receives the most detailed treatment.

## Phase 6 — Responsive polish

Test every breakpoint.

## Phase 7 — Accessibility

Keyboard navigation, semantic structure, contrast, reduced motion, forms.

## Phase 8 — Performance

Optimize:

- JS
- Images
- Fonts
- CSS
- Loading

## Phase 9 — SEO

Implement metadata, sitemap, robots, OG.

## Phase 10 — QA

Check:

- Build
- TypeScript
- Lint
- Links
- Navigation
- Theme
- Mobile
- Desktop
- Accessibility
- Console errors
- Performance

---

# IMPORTANT: DO NOT OVERENGINEER

This is a portfolio.

Do not create:

- Complex database
- Authentication system
- CMS
- Admin dashboard
- Custom backend
- Microservices
- GraphQL
- WebSocket infrastructure
- AI chatbot
- Complex user accounts

unless a concrete requirement appears later.

The portfolio itself should demonstrate engineering judgment through simplicity.

---

# VISUAL QUALITY BAR

Before considering the project finished, inspect the actual rendered website.

Look for:

- awkward spacing
- inconsistent typography
- poor mobile layouts
- weak hierarchy
- excessive card borders
- excessive rounded corners
- inconsistent button sizes
- unreadable code
- excessive empty space
- insufficient empty space
- poor dark mode
- accessibility issues
- broken links
- generic template appearance

Do not declare success simply because the build passes.

---

# FINAL ACCEPTANCE CRITERIA

The portfolio is considered complete only when:

### Content

- Bagus's professional positioning is clear
- Internship experience is visible
- Saint Ink is clearly the strongest project
- Projects accurately represent actual work
- No fabricated achievements
- AI-assisted development is represented honestly
- Career direction toward backend/cloud/security is clear but not exaggerated

### Design

- Minimal professional aesthetic
- Modern developer personality
- Strong typography
- Consistent spacing
- Excellent visual hierarchy
- Light and dark mode
- Responsive layout

### Engineering

- Astro-first architecture
- TypeScript
- Reusable components
- Content-driven project pages
- Minimal client-side JS
- Good performance
- Accessibility
- SEO
- Clean code

### Recruiter usability

A recruiter can reach:

- Projects
- Experience
- GitHub
- CV
- Contact

within one or two interactions.

### Technical reviewer usability

A technical reviewer can inspect:

- Project architecture
- Technology
- Contribution
- Testing
- Security
- Engineering challenges
- Deployment
- Source code where public

---

# IMPORTANT NEXT-STEP BEHAVIOR

There are still missing pieces of information for SmartWaste, Cinema Ticketing, Android Health Tracking, Seed of Hope, company information, exact Saint Ink architecture, contact information, CV, screenshots, and project URLs.

Do NOT invent them.

Create the website using the verified information available now.

For missing information, use clearly marked content placeholders.

After the initial implementation is complete, produce a concise report containing:

1. What was implemented
2. Files/components created
3. Missing content
4. Technical decisions
5. Potential problems
6. Recommended next steps
7. How to run the project locally
8. How to deploy to Vercel

The final implementation must be maintainable enough that new projects and content can be added later without restructuring the entire application.

Build this as a portfolio that can realistically remain Bagus Kurniawan's professional portfolio for the next 2–3 years, not as a one-month disposable student project.
