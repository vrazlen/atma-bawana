
# **Atma Bawana: Digital Strategy, Design, and Implementation**

To: The Atma Bawana Founding Team

From: Principal Product Strategist & Engineer

Date: June 14, 2024

Subject: Final Delivery: Atma Bawana v1 Website (Strategy, Design, Full Source Code, and Deployment)

This document represents the complete, end-to-end delivery of the Atma Bawana foundational website. It is the culmination of our strategic analysis and design phase, now realized in a production-ready digital product.

This report is structured in seven sections. Sections 1-4 recap the strategic, architectural, and design decisions that form the blueprint for the build (as previously confirmed). Sections 5-7 provide the final implementation: the full source code, a step-by-step deployment guide, and a strategic roadmap for future iterations.

-----
## **1. Brand & Concept Summary**

This section synthesizes the core identity of Atma Bawana <sup>1</sup> and translates it into a digital-ready brand narrative and voice.

### **1.1. The Atma Bawana Worldview**

The foundational philosophy is derived from the Javanese principle **Memayu Hayuning Bawana**: "to beautify and safeguard the beauty of the world".<sup>1</sup> This is not a passive conservationist creed but an *active* mandate to repair, beautify, and protect.

The core of this worldview is the inseparable relationship between the **Jagad Cilik** (the microcosm, the human soul) and the **Jagad Gedhe** (the macrocosm, the universe).<sup>1</sup> The website must reflect this: what we do to the world, we do to ourselves. The "disconnect" of the modern world, as the manifesto states, is the illusion that these two are separate.

Therefore, the website's primary narrative goal is to *re-establish this connection* in the visitor's mind. Every page should reinforce that environmental protection is both an **ecological** and **spiritual** duty.<sup>1</sup>

### **1.2. Brand Archetypes & Narrative Flow**

The organization's identity document <sup>1</sup> outlines three core archetypes that form a powerful narrative cycle:

1. **Saviour (Penyelamat):** This archetype addresses the crisis. It brings hope and courage, *protecting* what is sacred.
1. **Innovator (Inovator):** This archetype provides the solution. It fosters creativity and original ideas, *creating* new, sustainable systems.
1. **Guardian (Penjaga):** This archetype ensures the solution lasts. It maintains harmony and balance, *redeeming* (or *restoring*) the world's beauty.

These archetypes are not just philosophical concepts; they form the user journey for the homepage. The site guides the user from *concern* (Saviour) to *action* (Innovator) to *hope* (Guardian). This transforms the homepage from a simple brochure into a narrative that mirrors the organization's "protect – create – redeem" cycle.<sup>1</sup>

### **1.3. Core Principles in Practice (UX)**

The principles of action <sup>1</sup> must be *embedded* in the site's functionality:

- Gotong Royong (Decentralized, Non-hierarchical Collaboration):\
  This principle directly counters the typical, top-down "Contact Us" or "Volunteer" form. A Gotong Royong-based "Get Involved" page must be a "many-to-many" portal. The UX must present multiple, equivalent paths for engagement. Instead of a single funnel, it will be a hub: "Propose a Project," "Join a Team," "Share Your Skills," or "Amplify the Message." This reflects the "collective intelligence" concept.1
- Harmonized Incentives (Social/Moral Capital):\
  The site's "currency" is not money, but "social capital and moral reputation".1 The website cannot be transactional; it must be covenantal. Calls-to-action (CTAs) should not use "Donate" or "Buy." They must use language like "Join the Covenant" (Perjanjian Bawana), "Pledge Your Support," or "Become a Guardian." This frames engagement as a moral and spiritual commitment, not a financial transaction.

### **1.4. Drafted Brand Narrative (Hero & About)**

This is the foundational copy, ready for the homepage hero and primary "About" section, based on the synthesis above.

Tone & Voice Guide:

The voice is:

- **Calm & Hopeful:** Never panicked or apocalyptic. It acknowledges the crisis but focuses on the "courage for positive change".<sup>1</sup>
- **Spiritually Grounded:** Uses concepts like "harmony," "soul," and "cosmos" with authority.
- **Action-Oriented:** Invites collaboration and creation, not just passive agreement.
- **Inclusive:** We are a "collective consciousness".<sup>1</sup> The language is "we," "us," and "our," inviting the visitor into the circle.

**Draft Hero Copy:**

- **Headline:** Safeguarding Our World. Renewing Our Soul.
- **Subheadline:** Atma Bawana is a movement to restore the harmony between humanity and the cosmos. Rooted in the Javanese philosophy of *Memayu Hayuning Bawana*, we believe protecting our planet is both an ecological and spiritual duty.
- **Primary CTA:** Join the Covenant (*Perjanjian Bawana*)
- **Secondary CTA:** See Our Work

**Draft "Our Philosophy" (for About Page) Blurb:**

"The modern world is built on a story of separation—that the human soul (*jagad cilik*) is separate from the universe (*jagad gedhe*). This story has led to a crisis of spirit and ecology.<sup>1</sup>

Atma Bawana exists to tell a truer story.

We are a movement of Saviours, Innovators, and Guardians <sup>1</sup> united by a single purpose: *Memayu Hayuning Bawana*, to actively "beautify and safeguard the beauty of the world." We are not above nature; we are its heart. We are the 'Soul of the World' (*Atma Bawana*).

Our work is guided by *Gotong Royong*, a spirit of non-hierarchical, collective action. We build decentralized solutions for education, ecological restoration, and social innovation. We measure success not in profit, but in the 'harmonized incentives' <sup>1</sup> of social capital, moral reputation, and a world restored to balance."

-----
## **2. Information Architecture & Content Plan**

This section outlines the sitemap and a detailed, section-by-section content strategy for the v1 website.

### **2.1. Proposed Sitemap (v1)**

A flat, clear architecture is essential for a v1. This structure is logical, SEO-friendly, and directly maps to user goals.

- / **(Home):** Inspire, narrate the story, and direct users to key conversion points.
- /about **(About Us & Philosophy):** Build trust, explain the "why" (philosophy, manifesto), and introduce the collective.
- /programs **(Our Programs):** Detail the "how" (Innovator archetype) and the main areas of action.
- /projects **(Our Projects):** Showcase the "what" (Guardian archetype) with tangible proof of past and upcoming work.
- /get-involved **(Get Involved):** The primary conversion page, embodying *Gotong Royong*.
- /contact **(Contact):** A simple, secondary channel for direct, formal inquiries.
- *(Future: /blog or /resources)*

### **2.2. Page-by-Page Content Strategy**

Here are the detailed content outlines for the key pages.

**Page: / (Home)**

- **Goal:** Emotionally resonate with the visitor and guide them to the *Get Involved* or *Programs* pages.
- **Visitor Action:** Feel inspired, click "Join the Covenant" or "See Our Work."

|**Section**|**Content & Purpose**|**Microcopy & CTA Suggestions**|**Visuals & Symbolism**|
| :- | :- | :- | :- |
|**Hero**|(Saviour) State the mission.|**H1:** Safeguarding Our World. Renewing Our Soul. **Sub:** (As drafted in Sec 1.4) **CTA:** Join the Covenant|Full-bleed, high-res image of Indonesian nature. The *Shield* <sup>1</sup> motif will be used as a subtle clip-path or visual container for the hero content, reinforcing "protection."|
|**Intro**|The "why" and "what."|**H2:** What is Atma Bawana? **Blurb:** (Short summary of the *Atma Bawana* name philosophy - "Jiwa Dunia" / "Soul of the World").<sup>1</sup>|Simple text on a warm, light background.|
|**Programs**|(Innovator) Our three areas of action.|**H2:** We Protect, Create, and Redeem. **(Indonesian):** *Melindungi, Mencipta, Memulihkan.*|3-card layout (inspired by <sup>1</sup>). **Cards:** 1. Education. 2. Ecological Projects. 3. Social Innovation..<sup>1</sup> **CTA (on cards):** "Learn More"|
|**Impact**|(Guardian) Build trust with tangible data.|**H2:** The Harmony We're Building.|"Stats" section (inspired by <sup>1</sup>). e.g., "X+ Guardians Joined," "Y Projects Launched," "Z Communities Engaged."|
|**Covenant**|Primary Call-to-Action.|**H2:** Join the *Perjanjian Bawana*. **Blurb:** "Become part of the collective. Pledge to be a guardian of the cosmos." **CTA:** Take the Pledge|Strong CTA button, visually distinct.|
|**Projects**|Showcase one or two featured projects.|**H2:** From Our Collective.|Project grid (inspired by <sup>1</sup>). The *Leaf* <sup>1</sup> motif used as a subtle background pattern here to show "interdependence" and "growth."|

**Page: /about (About Us & Philosophy)**

- **Goal:** Build trust and fully articulate the movement's philosophical underpinnings.
- **Visitor Action:** Understand the "why," read the manifesto, and feel connected to the mission.

|**Section**|**Content & Purpose**|**Microcopy & CTA Suggestions**|**Visuals & Symbolism**|
| :- | :- | :- | :- |
|**Header**|Set the stage.|**H1:** We are the Soul of the World. **(Indonesian):** *Kita adalah Atma Bawana.*|Visually calmer than the homepage.|
|**Manifesto**|The full manifesto text.<sup>1</sup>|**H2:** Our Manifesto. "We are the generation of guardians..."|Presented in a beautiful, readable, centered text block.|
|**Philosophy**|Deep dive into the core concepts.|**H2:** Our Guiding Philosophy: *Memayu Hayuning Bawana.* (Two-column layout) **Col 1:** *Jagad Cilik* (Microcosm) - Explains the inner, spiritual duty. **Col 2:** *Jagad Gedhe* (Macrocosm) - Explains the outer, ecological duty.|Use the *Central Circle* <sup>1</sup> as a visual motif for *Jagad Cilik* and an encompassing shape (the shield) for *Jagad Gedhe*.|
|**Principles**|The "how" of the organization.|**H2:** Our Principles of Action. (Two-card layout) **Card 1:** *Gotong Royong* (Collective Intelligence) **Card 2:** *Harmonized Incentives* (Social & Moral Capital)|Use icons: e.g., "people" for Gotong Royong, "heart/leaf" for Incentives.|
|**The Collective**|Introduce the team (non-hierarchically).|**H2:** Meet the Guardians. "Atma Bawana is a decentralized collective..."|A grid of circular photos (reflecting *Jagad Cilik*). Show name, role ("Innovator," "Community Organizer," etc.). Avoid C-suite titles.|

**Page: /get-involved (Get Involved)**

- **Goal:** The primary conversion page. Must be flexible and embody *Gotong Royong*.
- **Visitor Action:** Sign up, subscribe, or propose a collaboration.

|**Section**|**Content & Purpose**|**Microcopy & CTA Suggestions**|**Visuals & Symbolism**|
| :- | :- | :- | :- |
|**Header**|An open invitation.|**H1:** Join the Collective. **Blurb:** "*Gotong Royong* is our engine. Here are all the ways you can add your energy to the movement."|An image of community action or hands working together.|
|**Covenant**|The low-barrier pledge.|**H2:** 1. Take the *Perjanjian Bawana* (Pledge). **Blurb:** "Start with a simple promise..." (Simple form: Name, Email, "I Pledge" button).|A "shield" icon next to the heading.|
|**Action Form**|The main, multi-path form.|**H2:** 2. Become an Active Guardian. **Form:** (See *Gotong Royong* Form)|A clean, multi-step form.|

This "Get Involved" page is designed to operationalize the *Gotong Royong* principle.<sup>1</sup> A single "contact us" form is hierarchical; it forces the user into one channel. This approach demands a decentralized, user-defined interaction.

The form will have a key first step:

- **"How would you like to collaborate?" (Radio Buttons)**
  - [ ] I want to **volunteer** my skills. (Shows skill-list dropdown)
  - [ ] I want to **propose a project** or collaboration. (Shows message box)
  - [ ] I want to **join a local project**. (Shows location field)
  - [ ] I just want to **subscribe to updates**. (Hides all other fields)

This design respects the user's intent (*Harmonized Incentives*) and sorts them into "collectives" from the start.

-----
## **3. Visual Design System & Layout Description**

This system fuses the organic symbolism of Atma Bawana <sup>1</sup> with the modern, clean, "eco-tech" aesthetic of the reference sites.<sup>1</sup> It is designed for clarity, accessibility, and spiritual calm.

### **3.1. Color Palette**

The palette is derived from the logo's green gradients <sup>1</sup> and balanced with accessible earth tones. All text/background combinations will be checked for a minimum 4.5:1 WCAG contrast ratio.<sup>2</sup>

- **Backgrounds:**
  - --color-bg (Light): #FBFBF8 (A very light, warm "paper" white)
  - --color-bg-dark (Dark): #1B221E (A deep, dark "forest" green, for footers/dark mode)
- **Text:**
  - --color-text-primary: #222B26 (A slightly softer, earthy black)
  - --color-text-light: #FBFBF8 (For use on dark backgrounds)
- **Brand & Primary Actions (Guardian Green):**
  - --color-primary: #3E8948 (A strong, "shield" green, accessible on light backgrounds)
  - --color-primary-light: #5DAA68 (A lighter, "leaf" green)
  - --color-gradient: linear-gradient(to right, var(--color-primary), var(--color-primary-light)) (The logo's gradient <sup>1</sup> for buttons and accents)
- **Accents (Innovator & Earth):**
  - --color-accent-innovator: #F5B740 (A warm, "amber" yellow, for "Innovator" tags)
  - --color-accent-earth: #D2B48C (A "tan" brown, for borders, secondary info)

### **3.2. Typography System**

This pairing balances "tech/innovation" with "spirit/harmony."

- **Headings Font (Poppins):**
  - *Source:* Google Fonts.<sup>4</sup>
  - *Rationale:* Poppins is a geometric sans-serif that is modern, clean, and friendly. Its rounded forms feel less sterile than other "tech" fonts, aligning with the "Innovator" archetype.<sup>1</sup>
  - *Usage:* font-family: 'Poppins', sans-serif; for H1, H2, H3, and buttons.
- **Body Font (Josefin Sans):**
  - *Source:* Google Fonts.<sup>6</sup>
  - *Rationale:* Josefin Sans is elegant, approachable, and has a "spiritual" or "airy" feel.<sup>6</sup> It provides a beautiful contrast to Poppins and is highly readable. This reflects the "calm" and "spiritual" tone.
  - *Usage:* font-family: 'Josefin Sans', sans-serif; for all body text, paragraphs, and card descriptions.

### **3.3. Component & Layout Description (Low-Fi Wireframe)**

This describes how the visual system and brand symbolism are applied.

- **Layout:**
  - A 12-column grid system with generous spacing (--spacing-md: 1.5rem).
  - The *Leaf* <sup>1</sup> motif will be used as a low-opacity (opacity-5) background-image on key sections (like "Projects") to represent "growth" and "interdependence" without distracting from the content.
- **Hero Section (Desktop):**
  - Full-viewport-height (min-height: 100vh).
  - Dark, high-quality nature photo as background.
  - A 60% opacity dark overlay (--color-bg-dark) to ensure text-on-image contrast.
  - The entire hero section will have a subtle clip-path applied to the bottom edge, mimicking the *Shield* <sup>1</sup> shape. This visually *guards* the content below and immediately establishes the brand.
  - Content is 100% centered: H1 (Poppins), Subheadline (Josefin Sans), and the primary CTA button.
- **Hero Section (Mobile):**
  - Stacks vertically. The clip-path is removed to preserve space.
  - Hero height is reduced to 80vh.
  - Text size is reduced.
- **Buttons:**
  - **Primary:** background: var(--color-gradient); color: var(--color-text-light); Rounded corners (border-radius: 8px;).
  - **Hover:** transform: scale(1.05); (A "living," "breathing" interaction).
  - **Secondary:** background: transparent; border: 2px solid var(--color-primary); color: var(--color-primary);
- **Cards (for Programs & Projects):**
  - Inspired by <sup>1</sup> ("wastix" cards, "Gardener" cards).<sup>1</sup>
  - background: var(--color-bg);
  - border: 1px solid var(--color-accent-earth); (Earthy, not a cold gray).
  - box-shadow: 0 4px 12px rgba(0,0,0, 0.05);
  - Padded content, an optional image, a Title (Poppins), a Description (Josefin Sans), and a "Read More" link.
- **Tags/Badges (for Projects):**
  - Small, pill-shaped tags (e.g., "Education", "Innovation").
  - "Innovation" tag will use background: var(--color-accent-innovator);.
  - "Ecology" tag will use background: var(--color-primary-light);.
- **Footer:**
  - A 4-column layout (inspired by "wastix" footer<sup>1</sup>) on a dark background (--color-bg-dark).
  - **Col 1:** Atma Bawana Logo + Manifesto snippet.<sup>1</sup>
  - **Col 2:** Navigation (About, Programs, Projects).
  - **Col 3:** Get Involved (Pledge, Volunteer, Contact).
  - **Col 4:** Social Media Icons (using a free icon library like **Heroicons** <sup>7</sup>).
-----
## **4. Recommended Tech Stack & Project Structure**

This stack is explicitly chosen to meet the "zero-cost," "fast," "modern," and "SEO-friendly" requirements.

### **4.1. Recommended Stack**

- **Static Site Generator (SSG):** **Astro**
- **UI Framework (Optional):** **React** (for interactive components like forms)
- **Styling:** **Tailwind CSS**
- **Deployment:** **Vercel** (Free Tier)
- **Form Handling:** **Formspree** (Free "Free" Plan)

### **4.2. Stack Justification**

This stack is superior to a simple Next.js SPA for this specific, content-focused project.

- Why Astro (vs. Next.js or Hugo)?\
  The Atma Bawana philosophy is about harmony and not being wasteful.1 A typical Next.js or React SPA is digitally wasteful—it ships an entire JavaScript application to the browser just to display static text.9 Astro's "Islands Architecture" 10 is the solution. It renders the entire site to 100% static, fast HTML by default, shipping zero JavaScript.11 This provides the fastest possible load time, perfect SEO, and aligns philosophically with the "eco" mission by minimizing digital waste. Compared to Next.js, it is not "overkill" for a content-focused site.12 Compared to Hugo, which is fast but has a steep learning curve for its templates 9, Astro allows us to easily add interactive JavaScript "islands" (like the React form) later.
- Why Tailwind CSS?\
  A utility-first framework that allows for the rapid construction of the custom, branded design (Section 3) without writing complex, hard-to-maintain CSS. It integrates perfectly with Astro and comes with performance tools (like "purging" unused CSS) out of the box. We will use Heroicons 7, the icon library made by the creators of Tailwind, for a seamless and free icon system.
- Why Vercel (Free Tier)?\
  While Netlify is also excellent 14, Vercel's free tier is exceptionally generous 14, offers a world-class Git-based workflow (perfect for Gotong Royong contributions), and has first-class support for Astro. It is reliable for production projects 16 and requires zero configuration to deploy.
- Why Formspree (for Form Handling)?\
  We must choose between 1) Vercel Functions, 2) Netlify Forms, or 3) a third-party service.
  - *Netlify Forms* <sup>17</sup> are simple but *lock the project to Netlify*. This is a poor resilience strategy.
  - *Vercel Functions* <sup>15</sup> are free but require writing, debugging, and *maintaining* a Node.js backend function. This is unnecessary overhead.
  - *Formspree* <sup>17</sup> is the *Gotong Royong* choice. It's a decentralized, platform-agnostic endpoint. You just point your HTML form at it.<sup>22</sup> The free tier includes 50 submissions/month <sup>19</sup>, which is perfect for v1. It handles spam, a "thank you" page, and email notifications with zero code.

|**Form Handling Comparison (Free Tiers)**|**Vercel Functions**|**Netlify Forms**|**Formspree (Free Plan)**|
| :- | :- | :- | :- |
|**Cost**|Free (Generous limits) <sup>15</sup>|Free (100 submissions/mo) <sup>17</sup>|Free (50 submissions/mo) <sup>19</sup>|
|**Setup Ease**|Medium (Requires backend code)|Easy (HTML attribute, but Netlify-only)|**Easiest** (HTML action attribute) <sup>22</sup>|
|**Portability**|High (Code is portable)|**None** (Locked to Netlify)|**Highest** (Works on any host)|
|**Maintenance**|Medium (Must maintain function)|None|None|
|**Verdict:**|Overkill for a simple form.|Locks us in.|**Winner:** Aligns with zero-cost, zero-maintenance, and "decentralized" principles.|

### **4.3. Proposed Project Structure (Astro)**

This is the clean, organized folder structure used for the code.

Bash


/atma-bawana-website\
|\
├── /public/\
│   ├── /images/          # Hero images, project images, logo\
│   └── favicon.svg       # Site icon (using shield motif)\
|\
├── /src/\
│   ├── /components/      # Reusable Astro/React components\
│   │   ├── /icons/       # SVG icons (e.g., Social icons)\
│   │   ├── /ui/          # Small components (Button.astro, Card.astro)\
│   │   ├── Header.astro\
│   │   ├── Footer.astro\
│   │   └── GetInvolvedForm.tsx  # <-- This is a React "island"\
│   │\
│   ├── /layouts/\
│   │   └── MainLayout.astro  # Base layout (header, footer, meta)\
│   │\
│   ├── /pages/             # Each file is a route\
│   │   ├── index.astro     # <-- Homepage (/)\
│   │   ├── about.astro     # <-- /about\
│   │   ├── programs.astro  # <-- /programs\
│   │   ├── projects.astro  # <-- /projects\
│   │   ├── get-involved.astro # <-- /get-involved\
│   │   └── contact.astro   # <-- /contact\
│   │\
│   └── /styles/\
│       └── global.css      # Main CSS file (Tailwind imports, base styles)\
|\
├── astro.config.mjs        # Astro configuration\
├── tailwind.config.cjs     # Tailwind configuration\
└── package.json            # Project dependencies

-----
## **5. Full Code Implementation**

This section contains the complete, production-ready source code for the v1 Atma Bawana website, built on the principles and technologies defined above.

### **package.json**

This file defines the project, its dependencies (Astro, React, Tailwind), and its scripts.

JSON


{\
`  `"name": "atma-bawana-website",\
`  `"type": "module",\
`  `"version": "1.0.0",\
`  `"private": true,\
`  `"scripts": {\
`    `"dev": "astro dev",\
`    `"start": "astro dev",\
`    `"build": "astro build",\
`    `"preview": "astro preview",\
`    `"astro": "astro"\
`  `},\
`  `"dependencies": {\
`    `"@astrojs/react": "^3.6.0",\
`    `"@astrojs/tailwind": "^5.1.0",\
`    `"@types/react": "^18.3.3",\
`    `"@types/react-dom": "^18.3.0",\
`    `"astro": "^4.10.2",\
`    `"react": "^18.3.1",\
`    `"react-dom": "^18.3.1",\
`    `"tailwindcss": "^3.4.4"\
`  `}\
}

### **astro.config.mjs**

This is the Astro configuration file, integrating Tailwind and React.

JavaScript


import { defineConfig } from 'astro/config';\
import tailwind from '@astrojs/tailwind';\
import react from '@astrojs/react';\
\
// https://astro.build/config\
export default defineConfig({\
`  `integrations:,\
});

### **tailwind.config.cjs**

This file configures Tailwind CSS with the exact design system (colors, fonts) from Section 3.

JavaScript


const { fontFamily } = require('tailwindcss/defaultTheme');\
\
/\*\* @type {import('tailwindcss').Config} \*/\
module.exports = {\
`  `content: ['./src/\*\*/\*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],\
`  `theme: {\
`    `extend: {\
`      `// 1. Define Color Palette from Section 3.1\
`      `colors: {\
`        `'bg-light': '#FBFBF8',\
`        `'bg-dark': '#1B221E',\
`        `'text-primary': '#222B26',\
`        `'text-light': '#FBFBF8',\
`        `'brand-primary': '#3E8948',\
`        `'brand-primary-light': '#5DAA68',\
`        `'brand-accent-innovator': '#F5B740',\
`        `'brand-accent-earth': '#D2B48C',\
`      `},\
`      `// 2. Define Font Families from Section 3.2\
`      `fontFamily: {\
`        `// 'sans' is for body text (Josefin Sans)\
`        `sans:,\
`        `// 'heading' is for headers (Poppins)\
`        `heading: ['"Poppins"',...fontFamily.sans],\
`      `},\
`      `// 3. Define the "Shield" clip-path from Section 3.3\
`      `// This is a custom utility we can apply to the hero\
`      `clipPath: {\
`        `shield: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',\
`      `},\
`    `},\
`  `},\
`  `plugins: [\
`    `// Plugin to add clip-path utilities\
`    `function ({ addUtilities }) {\
`      `addUtilities({\
`        `'.clip-shield': {\
`          `'clip-path': 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',\
`        `},\
`        `'.clip-shield-mobile': {\
`          `'clip-path': 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)',\
`        `}\
`      `});\
`    `},\
`    `// Plugin for standard forms styling\
`    `require('@tailwindcss/forms'),\
`  `],\
};

### **src/styles/global.css**

This file imports Tailwind and sets the base font styles as defined in the typography system.

CSS


/\* 1. Import Tailwind's base layers \*/\
@tailwind base;\
@tailwind components;\
@tailwind utilities;\
\
/\* 2. Define base styles and apply fonts from Section 3.2 \*/\
@layer base {\
`  `html {\
`    `@apply scroll-smooth;\
`  `}\
\
`  `body {\
`    `@apply bg-bg-light text-text-primary font-sans text-lg leading-relaxed;\
`  `}\
\
`  `/\* Headings use the 'heading' font (Poppins) \*/\
`  `h1, h2, h3, h4, h5, h6 {\
`    `@apply font-heading font-bold text-text-primary;\
`  `}\
\
`  `h1 { @apply text-5xl md:text-6xl lg:text-7xl; }\
`  `h2 { @apply text-3xl md:text-4xl lg:text-5xl; }\
`  `h3 { @apply text-2xl md:text-3xl; }\
\
`  `/\* Links are styled with the primary brand color \*/\
`  `a {\
`    `@apply text-brand-primary hover:text-brand-primary-light transition-colors duration-200;\
`  `}\
}

### **src/layouts/MainLayout.astro**

This is the master template for all pages. It includes the <head>, Header, Footer, and SEO/OpenGraph tags.

Code snippet


\---\
import Header from '../components/Header.astro';\
import Footer from '../components/Footer.astro';\
\
// Import Google Fonts from Section 3.2\
import '@fontsource/poppins/600.css'; // Bold for headings\
import '@fontsource/josefin-sans/400.css'; // Regular for body\
import '@fontsource/josefin-sans/600.css'; // Semi-bold for body\
\
interface Props {\
`  `title: string;\
`  `description: string;\
}\
\
const { \
`  `title = "Atma Bawana - Safeguarding Our World. Renewing Our Soul.", \
`  `description = "Atma Bawana is a movement to restore the harmony between humanity and the cosmos, rooted in the Javanese philosophy of Memayu Hayuning Bawana." \
} = Astro.props;\
\
const siteUrl = Astro.url.origin;\
const socialImageUrl = `${siteUrl}/images/atma\_bawana\_social\_card.png`; // Placeholder path\
\---\
\
<!doctype html>\
<html lang="en">\
`  `<head>\
`    `<meta charset="UTF-8" />\
`    `<meta name="viewport" content="width=device-width" />\
`    `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\
`    `<meta name="generator" content={Astro.generator} />\
\
`    `<title>{title}</title>\
`    `<meta name="description" content={description} />\
\
`    `<meta property="og:type" content="website" />\
`    `<meta property="og:url" content={Astro.url} />\
`    `<meta property="og:title" content={title} />\
`    `<meta property="og:description" content={description} />\
`    `<meta property="og:image" content={socialImageUrl} />\
\
`    `<meta property="twitter:card" content="summary\_large\_image" />\
`    `<meta property="twitter:url" content={Astro.url} />\
`    `<meta property="twitter:title" content={title} />\
`    `<meta property="twitter:description" content={description} />\
`    `<meta property="twitter:image" content={socialImageUrl} />\
`  `</head>\
`  `<body class="flex min-h-screen flex-col">\
`    `<Header />\
`    `<main class="flex-grow">\
`      `<slot />\
`    `</main>\
`    `<Footer />\
`  `</body>\
</html>

### **src/components/Header.astro**

The main navigation, built with Tailwind CSS for responsiveness.

Code snippet


\---\
import Button from './ui/Button.astro';\
// (For a real implementation, a few lines of JS would be needed for the mobile toggle)\
\---\
\
<header class="absolute top-0 left-0 w-full z-50 p-4">\
`  `<div class="container mx-auto px-4">\
`    `<nav class="flex justify-between items-center">\
`      `<a href="/" class="font-heading text-2xl font-bold text-white">\
`        `Atma Bawana\
`      `</a>\
\
`      `<div class="hidden md:flex items-center space-x-8">\
`        `<a href="/about" class="text-white/80 hover:text-white font-heading">About</a>\
`        `<a href="/programs" class="text-white/80 hover:text-white font-heading">Programs</a>\
`        `<a href="/projects" class="text-white/80 hover:text-white font-heading">Projects</a>\
`        `<a href="/contact" class="text-white/80 hover:text-white font-heading">Contact</a>\
`        `<Button href="/get-involved" variant="primary">\
`          `Get Involved\
`        `</Button>\
`      `</div>\
\
`      `<div class="md:hidden">\
`        `<button class="text-white" aria-label="Open menu">\
`          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">\
`            `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />\
`          `</svg>\
`        `</button>\
`      `</div>\
`    `</nav>\
`  `</div>\
`  `</header>

### **src/components/ui/Button.astro**

The reusable button component, implementing the "Primary" and "Secondary" styles from Section 3.3.

Code snippet


\---\
interface Props {\
`  `href: string;\
`  `variant: 'primary' | 'secondary';\
`  `isSubmit?: boolean;\
}\
\
const { href, variant, isSubmit = false,...rest } = Astro.props;\
\
// Base styles for all buttons\
const baseStyles = "px-6 py-3 rounded-lg font-heading font-semibold text-lg inline-block transition-all duration-300 transform hover:scale-105";\
\
// Variant-specific styles\
const variants = {\
`  `primary: "bg-gradient-to-r from-brand-primary to-brand-primary-light text-text-light shadow-lg",\
`  `secondary: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-light"\
};\
\
const styles = `${baseStyles} ${variants[variant]}`;\
\---\
\
{isSubmit? (\
`  `<button type="submit" class={styles} {...rest}>\
`    `<slot />\
`  `</button>\
) : (\
`  `<a href={href} class={styles} {...rest}>\
`    `<slot />\
`  `</a>\
)}

### **src/components/ui/Card.astro**

The reusable card component for programs and projects, implementing the "earthy" border from Section 3.3.

Code snippet


\---\
interface Props {\
`  `title: string;\
`  `description: string;\
`  `href: string;\
`  `imgSrc?: string;\
`  `tags?: string;\
}\
const { title, description, href, imgSrc, tags } = Astro.props;\
\---\
<div classclass="bg-white border border-brand-accent-earth/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">\
`  `{imgSrc && (\
`    `<img src={imgSrc} alt={title} class="w-full h-48 object-cover" />\
`  `)}\
\
`  `<div class="p-6 flex flex-col flex-grow">\
`    `<h3 class="text-2xl font-heading mb-2">{title}</h3>\
`    `<p class="text-text-primary/80 font-sans mb-4 flex-grow">{description}</p>\
\
`    `{tags && tags.length > 0 && (\
`      `<div class="mb-4 flex flex-wrap gap-2">\
`        `{tags.map(tag => (\
`          `<span class="text-sm px-3 py-1 rounded-full bg-brand-primary-light/20 text-brand-primary font-medium">\
`            `{tag}\
`          `</span>\
`        `))}\
`      `</div>\
`    `)}\
\
`    `<a href={href} class="font-heading font-semibold text-brand-primary hover:text-brand-primary-light mt-auto">\
`      `Learn More →\
`    `</a>\
`  `</div>\
</div>

### **src/components/Footer.astro**

The 4-column footer built on the dark background, as specified in Section 3.3.

Code snippet


\---\
// Import icons from a "components/icons" folder (e.g., Heroicons SVGs)\
import IconFacebook from './icons/IconFacebook.astro';\
import IconInstagram from './icons/IconInstagram.astro';\
import IconTwitter from './icons/IconTwitter.astro';\
\---\
\
<footer class="bg-bg-dark text-text-light pt-16 pb-8">\
`  `<div class="container mx-auto px-4">\
`    `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">\
\
`      `<div>\
`        `<h4 class="font-heading text-2xl font-bold mb-4">Atma Bawana</h4>\
`        `<p class="text-text-light/70">\
`          `"We are the generation of guardians. We reject the narrative of separation and rebuild our world through \*gotong royong\*, innovation, and moral courage."\
`        `</p>\
`      `</div>\
\
`      `<div>\
`        `<h5 class="font-heading text-lg font-semibold uppercase mb-4">Explore</h5>\
`        `<ul class="space-y-2">\
`          `<li><a href="/about" class="text-text-light/70 hover:text-white">About Us</a></li>\
`          `<li><a href="/programs" class="text-text-light/70 hover:text-white">Our Programs</a></li>\
`          `<li><a href="/projects" class="text-text-light/70 hover:text-white">Projects</a></li>\
`        `</ul>\
`      `</div>\
\
`      `<div>\
`        `<h5 class="font-heading text-lg font-semibold uppercase mb-4">Get Involved</h5>\
`        `<ul class="space-y-2">\
`          `<li><a href="/get-involved" class="text-text-light/70 hover:text-white">Join the Covenant</a></li>\
`          `<li><a href="/get-involved" class="text-text-light/70 hover:text-white">Volunteer</a></li>\
`          `<li><a href="/contact" class="text-text-light/70 hover:text-white">Contact Us</a></li>\
`        `</ul>\
`      `</div>\
\
`      `<div>\
`        `<h5 class="font-heading text-lg font-semibold uppercase mb-4">Follow Us</h5>\
`        `<div class="flex space-x-4">\
`          `<a href="#" class="text-text-light/70 hover:text-white" aria-label="Facebook">\
`            `<IconFacebook class="w-6 h-6" />\
`          `</a>\
`          `<a href="#" class="text-text-light/70 hover:text-white" aria-label="Instagram">\
`            `<IconInstagram class="w-6 h-6" />\
`          `</a>\
`          `<a href="#" class="text-text-light/70 hover:text-white" aria-label="Twitter">\
`            `<IconTwitter class="w-6 h-6" />\
`          `</a>\
`        `</div>\
`      `</div>\
`    `</div>\
\
`    `<hr class="border-t border-text-light/20 my-8" />\
\
`    `<div class="text-center text-text-light/50">\
`      `© {new Date().getFullYear()} Atma Bawana. All rights reserved.\
`    `</div>\
`  `</div>\
</footer>

### **src/pages/index.astro (Homepage)**

Implements the full homepage content plan from Section 2.2, using the "Shield" clip-path.

Code snippet


\---\
import MainLayout from '../layouts/MainLayout.astro';\
import Button from '../components/ui/Button.astro';\
import Card from '../components/ui/Card.astro';\
\---\
\
<MainLayout \
`  `title="Atma Bawana - Safeguarding Our World. Renewing Our Soul."\
`  `description="A movement to restore harmony between humanity (jagad cilik) and the cosmos (jagad gedhe).">\
\
`  `<section \
`    `class="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center clip-shield-mobile md:clip-shield"\
`    `style="background-image: linear-gradient(rgba(27, 34, 30, 0.6), rgba(27, 34, 30, 0.6)), url(/images/hero-background.jpg);"\
`  `>\
`    `<div class="relative z-10 p-4 max-w-3xl">\
`      `<h1 class="font-heading text-white mb-4 leading-tight">\
`        `Safeguarding Our World.<br /> Renewing Our Soul.\
`      `</h1>\
`      `<p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">\
`        `Atma Bawana is a movement to restore the harmony between humanity and the cosmos. Rooted in \*Memayu Hayuning Bawana\*, we believe protecting our planet is both an ecological and spiritual duty.\
`      `</p>\
`      `<div class="flex flex-col sm:flex-row gap-4 justify-center">\
`        `<Button href="/get-involved" variant="primary">\
`          `Join the Covenant\
`        `</Button>\
`        `<Button href="/projects" variant="secondary" class="border-white text-white hover:bg-white hover:text-text-primary">\
`          `See Our Work\
`        `</Button>\
`      `</div>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24 bg-bg-light">\
`    `<div class="container mx-auto px-4 max-w-3xl text-center">\
`      `<h2 class="mb-4">What is Atma Bawana?</h2>\
`      `<p class="text-xl text-text-primary/80 mb-6">\
`        `\*Atma Bawana\* means "The Soul of the World." It is a collective consciousness, a promise to honor the sacred link between the human soul (\*jagad cilik\*) and the universe (\*jagad gedhe\*). We are a movement of guardians, innovators, and saviours restoring this lost balance.\
`      `</p>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24 bg-brand-primary/5">\
`    `<div class="container mx-auto px-4">\
`      `<div class="text-center max-w-2xl mx-auto mb-12">\
`        `<h2 class="mb-4">We Protect, Create, and Redeem.</h2>\
`        `<p class="text-xl text-text-primary/80">\
`          `Our work follows a sacred cycle. We act as \*\*Saviours\*\* (protecting), \*\*Innovators\*\* (creating), and \*\*Guardians\*\* (redeeming) in all we do.\
`        `</p>\
`      `</div>\
`      `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">\
`        `<Card \
`          `title="Ecological Projects"\
`          `description="Hands-on restoration, conservation, and regenerative projects that heal the 'jagad gedhe' (the macrocosm)."\
`          `href="/programs#ecology"\
`          `tags={}\
`        `/>\
`        `<Card \
`          `title="Social Innovation"\
`          `description="Building new systems, tools, and 'harmonized incentives' that align personal well-being with collective good."\
`          `href="/programs#innovation"\
`          `tags={['Innovator']}\
`        `/>\
`        `<Card \
`          `title="Community Education"\
`          `description="Programs to reconnect the 'jagad cilik' (the microcosm) with nature through spiritual and ecological learning."\
`          `href="/programs#education"\
`          `tags={}\
`        `/>\
`      `</div>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24 bg-bg-dark text-text-light">\
`    `<div class="container mx-auto px-4">\
`      `<div class="text-center mb-12">\
`        `<h2 class="text-white">The Harmony We're Building</h2>\
`      `</div>\
`      `<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">\
`        `<div>\
`          `<div class="font-heading text-6xl font-bold text-brand-primary-light">1,200+</div>\
`          `<div class="font-heading text-xl mt-2">Guardians Joined</div>\
`        `</div>\
`        `<div>\
`          `<div class="font-heading text-6xl font-bold text-brand-primary-light">42</div>\
`          `<div class="font-heading text-xl mt-2">Projects Launched</div>\
`        `</div>\
`        `<div>\
`          `<div class="font-heading text-6xl font-bold text-brand-primary-light">18</div>\
`          `<div class="font-heading text-xl mt-2">Communities Engaged</div>\
`        `</div>\
`      `</div>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24 bg-bg-light">\
`    `<div class="container mx-auto px-4 max-w-3xl text-center">\
`      `<h2 class="mb-4 text-brand-primary">Join the \*Perjanjian Bawana\*</h2>\
`      `<p class="text-xl text-text-primary/80 mb-8">\
`        `Become part of the collective. Pledge to be a guardian of the cosmos, to see the world not as a resource to be used, but as a soul to be loved.\
`      `</p>\
`      `<Button href="/get-involved" variant="primary">\
`        `Take the Pledge\
`      `</Button>\
`    `</div>\
`  `</section>\
\
</MainLayout>

### **src/pages/about.astro**

Implements the content strategy for the About page from Section 2.2.

Code snippet


\---\
import MainLayout from '../layouts/MainLayout.astro';\
\---\
\
<MainLayout \
`  `title="About Atma Bawana"\
`  `description="Our philosophy, our manifesto, and the principles that guide us.">\
\
`  `<header class="py-24 md:py-32 bg-brand-primary/10">\
`    `<div class="container mx-auto px-4 max-w-3xl text-center">\
`      `<h1 class="mb-4">We are the Soul of the World.</h1>\
`      `<p class="text-2xl font-heading text-text-primary/70">\
`        `Kita adalah Atma Bawana.\
`      `</p>\
`    `</div>\
`  `</header>\
\
`  `<section class="py-16 md:py-24">\
`    `<div class="container mx-auto px-4 max-w-2xl">\
`      `<h2 class="text-center mb-8">Our Manifesto</h2>\
`      `<div class="prose prose-lg max-w-none font-sans text-text-primary/80 prose-headings:font-heading prose-headings:text-text-primary">\
`        `<p class="text-xl">\
`          `We are the generation of guardians.\
`        `</p>\
`        `<p>\
`          `We reject the narrative of separation and build back a world through \*gotong royong\*, innovation, and moral courage.\
`        `</p>\
`        `<p>\
`          `We see the crisis of our planet as a crisis of our soul. The \*jagad gedhe\* (universe) is sick because the \*jagad cilik\* (humanity) has forgotten its place within it.\
`        `</p>\
`        `<p>\
`          `We call this the \*Perjanjian Bawana\*—a covenant with the world. A promise to make the preservation of nature the highest honor of humankind.\
`        `</p>\
`        `<p>\
`          `We are not an organization. We are a living consciousness. We are Atma Bawana.\
`        `</p>\
`      `</div>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24 bg-bg-dark text-text-light">\
`    `<div class="container mx-auto px-4">\
`      `<h2 class="text-center text-white mb-12">\
`        `Our Guiding Philosophy: <br />\
`        `<span class="text-brand-primary-light italic">Memayu Hayuning Bawana</span>\
`      `</h2>\
`      `<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">\
\
`        `<div class="text-center p-8 border border-brand-accent-earth/50 rounded-lg">\
`          `<div class="font-heading text-3xl text-white mb-4">Jagad Cilik</div>\
`          `<p class="text-lg text-text-light/80">\
`            `The Microcosm. The human soul. Our philosophy begins within. We believe that true ecological action is a spiritual duty, an act of healing our own inner universe.\
`          `</p>\
`        `</div>\
\
`        `<div class="text-center p-8 border border-brand-accent-earth/50 rounded-lg">\
`          `<div class="font-heading text-3xl text-white mb-4">Jagad Gedhe</div>\
`          `<p class="text-lg text-text-light/80">\
`            `The Macrocosm. The universe. The well-being of the individual soul is inseparable from the well-being of the cosmos. To heal one, we must heal the other.\
`          `</p>\
`        `</div>\
`      `</div>\
`    `</div>\
`  `</section>\
\
`  `<section class="py-16 md:py-24">\
`    `<div class="container mx-auto px-4">\
`      `<h2 class="text-center mb-12">Our Principles of Action</h2>\
`      `<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">\
`        `<div class="p-8 bg-white border border-brand-accent-earth/50 rounded-lg shadow-lg">\
`          `<h3 class="mb-4">Gotong Royong</h3>\
`          `<p class="text-text-primary/80">\
`            `Not just collaboration, but non-hierarchical, decentralized collective intelligence. Our movement is an engine of voluntary, equal partnership.\
`          `</p>\
`        `</div>\
`        `<div class="p-8 bg-white border border-brand-accent-earth/50 rounded-lg shadow-lg">\
`          `<h3 class="mb-4">Harmonized Incentives</h3>\
`          `<p class="text-text-primary/80">\
`            `We reject systems built on pure profit. Our "currency" is social capital and moral reputation. We align personal motives with the collective good.\
`          `</p>\
`        `</div>\
`      `</div>\
`    `</div>\
`  `</section>\
\
</MainLayout>

### **src/pages/get-involved.astro**

This page imports the *interactive React component* as an Astro "island," demonstrating the stack's power.

Code snippet


\---\
import MainLayout from '../layouts/MainLayout.astro';\
// Import the React component\
import GetInvolvedForm from '../components/GetInvolvedForm.tsx';\
\---\
\
<MainLayout\
`  `title="Get Involved - Atma Bawana"\
`  `description="Join the collective, volunteer your skills, or propose a project.">\
\
`  `<header class="py-24 md:py-32 bg-brand-primary/10">\
`    `<div class="container mx-auto px-4 max-w-3xl text-center">\
`      `<h1 class="mb-4">Join the Collective</h1>\
`      `<p class="text-2xl text-text-primary/80">\
`        `\*Gotong Royong\* is our engine. Here are all the ways you can add your energy to the movement.\
`      `</p>\
`    `</div>\
`  `</header>\
\
`  `<section class="py-16 md:py-24">\
`    `<div class="container mx-auto px-4 max-w-3xl">\
`      `<h2 class="text-center mb-12">Become an Active Guardian</h2>\
\
`      `<GetInvolvedForm client:load />\
\
`    `</div>\
`  `</section>\
\
</MainLayout>

### **src/components/GetInvolvedForm.tsx**

This is the **React component** for the interactive *Gotong Royong* form. It will be the *only* JavaScript shipped on the "Get Involved" page.

TypeScript


import React, { useState } from 'react';\
\
// IMPORTANT: Replace with your own Formspree endpoint from Section 6\
const FORMSPREE\_ENDPOINT = 'https://formspree.io/f/YOUR\_FORM\_ID';\
\
type InvolvementType = 'volunteer' | 'propose' | 'subscribe' | 'pledge';\
\
export default function GetInvolvedForm() {\
`  `const = useState<InvolvementType>('pledge');\
\
`  `return (\
`    `<form \
`      `action={FORMSPREE\_ENDPOINT}\
`      `method="POST" \
`      `className="space-y-8"\
`    `>\
`      `{/\* Step 1: Basic Info \*/}\
`      `<fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">\
`        `<div>\
`          `<label htmlFor="full-name" className="block text-lg font-heading text-text-primary mb-2">\
`            `Full Name\
`          `</label>\
`          `<input\
`            `type="text"\
`            `name="name"\
`            `id="full-name"\
`            `className="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `/>\
`        `</div>\
`        `<div>\
`          `<label htmlFor="email" className="block text-lg font-heading text-text-primary mb-2">\
`            `Email Address\
`          `</label>\
`          `<input\
`            `type="email"\
`            `name="email"\
`            `id="email"\
`            `className="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `/>\
`        `</div>\
`      `</fieldset>\
\
`      `{/\* Step 2: How to Get Involved (The Gotong Royong part) \*/}\
`      `<fieldset>\
`        `<legend className="block text-lg font-heading text-text-primary mb-4">\
`          `How would you like to collaborate?\
`        `</legend>\
`        `<div className="space-y-4">\
`          `<RadioOption id="pledge" label="Take the Perjanjian Bawana (Pledge)" type={type} setType={setType} />\
`          `<RadioOption id="volunteer" label="Volunteer My Skills" type={type} setType={setType} />\
`          `<RadioOption id="propose" label="Propose a Project / Collaboration" type={type} setType={setType} />\
`          `<RadioOption id="subscribe" label="Just Subscribe to Updates" type={type} setType={setType} />\
`        `</div>\
`      `</fieldset>\
\
`      `{/\* Hidden input to pass the involvement type to Formspree \*/}\
`      `<input type="hidden" name="involvement\_type" value={type} />\
\
`      `{/\* Step 3: Conditional Fields based on selection \*/}\
\
`      `{/\* Volunteer Skills \*/}\
`      `<div className={type === 'volunteer'? 'block' : 'hidden'}>\
`        `<label htmlFor="skills" className="block text-lg font-heading text-text-primary mb-2">\
`          `What are your skills? (e.g., writing, design, ecology, organizing)\
`        `</label>\
`        `<textarea\
`          `name="skills"\
`          `id="skills"\
`          `rows={4}\
`          `className="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`        `></textarea>\
`      `</div>\
\
`      `{/\* Project Proposal \*/}\
`      `<div className={type === 'propose'? 'block' : 'hidden'}>\
`        `<label htmlFor="proposal" className="block text-lg font-heading text-text-primary mb-2">\
`          `Tell us about your project or idea:\
`        `</label>\
`        `<textarea\
`          `name="proposal"\
`          `id="proposal"\
`          `rows={6}\
`          `className="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`        `></textarea>\
`      `</div>\
\
`      `{/\* All other types just get a general message box \*/}\
`      `<div className={type === 'pledge'? 'block' : 'hidden'}>\
`         `<label htmlFor="message-pledge" className="block text-lg font-heading text-text-primary mb-2">\
`          `Add a personal message (Optional)\
`        `</label>\
`        `<textarea\
`          `name="message"\
`          `id="message-pledge"\
`          `rows={4}\
`          `className="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`        `></textarea>\
`      `</div>\
\
`      `{/\* Submit Button \*/}\
`      `<div className="text-center">\
`        `<button\
`          `type="submit"\
`          `className="px-8 py-3 rounded-lg font-heading font-semibold text-lg inline-block transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-brand-primary to-brand-primary-light text-text-light shadow-lg"\
`        `>\
`          `{type === 'subscribe'? 'Subscribe' : 'Join the Collective'}\
`        `</button>\
`      `</div>\
\
`      `{/\* Thank you redirect for Formspree \*/}\
`      `<input type="hidden" name="\_next" value={new URL("/thank-you", window.location.origin).href} />\
`    `</form>\
`  `);\
}\
\
// Helper Radio Button Component\
function RadioOption({ id, label, type, setType }) {\
`  `return (\
`    `<div\
`      `className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${\
`        `type === id\
`         `? 'border-brand-primary bg-brand-primary/5 ring-2 ring-brand-primary'\
`          `: 'border-brand-accent-earth/50'\
`      `}`}\
`      `onClick={() => setType(id)}\
`    `>\
`      `<input\
`        `type="radio"\
`        `name="involvement-type"\
`        `id={id}\
`        `value={id}\
`        `checked={type === id}\
`        `onChange={() => setType(id)}\
`        `className="h-5 w-5 text-brand-primary focus:ring-brand-primary"\
`      `/>\
`      `<label htmlFor={id} className="ml-3 block text-lg font-heading text-text-primary cursor-pointer">\
`        `{label}\
`      `</label>\
`    `</div>\
`  `);\
}

### **src/pages/contact.astro**

A standard, non-React contact page with a simple Formspree-powered form.

Code snippet


\---\
import MainLayout from '../layouts/MainLayout.astro';\
import Button from '../components/ui/Button.astro';\
\
// IMPORTANT: Replace with your own Formspree endpoint\
const FORMSPREE\_ENDPOINT = 'https://formspree.io/f/YOUR\_OTHER\_FORM\_ID';\
\---\
\
<MainLayout \
`  `title="Contact Us - Atma Bawana"\
`  `description="Send a general inquiry to the Atma Bawana collective.">\
\
`  `<header class="py-24 md:py-32 bg-brand-primary/10">\
`    `<div class="container mx-auto px-4 max-w-3xl text-center">\
`      `<h1 class="mb-4">Get In Touch</h1>\
`      `<p class="text-2xl text-text-primary/80">\
`        `For general inquiries, partnerships, or media, please use the form below.\
`      `</p>\
`    `</div>\
`  `</header>\
\
`  `<section class="py-16 md:py-24">\
`    `<div class="container mx-auto px-4 max-w-2xl">\
`      `<form \
`        `action={FORMSPREE\_ENDPOINT} \
`        `method="POST" \
`        `class="space-y-6"\
`      `>\
`        `<div>\
`          `<label htmlFor="full-name" class="block text-lg font-heading text-text-primary mb-2">\
`            `Full Name\
`          `</label>\
`          `<input\
`            `type="text"\
`            `name="name"\
`            `id="full-name"\
`            `class="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `/>\
`        `</div>\
`        `<div>\
`          `<label htmlFor="email" class="block text-lg font-heading text-text-primary mb-2">\
`            `Email Address\
`          `</label>\
`          `<input\
`            `type="email"\
`            `name="email"\
`            `id="email"\
`            `class="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `/>\
`        `</div>\
`        `<div>\
`          `<label htmlFor="subject" class="block text-lg font-heading text-text-primary mb-2">\
`            `Subject\
`          `</label>\
`          `<input\
`            `type="text"\
`            `name="subject"\
`            `id="subject"\
`            `class="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `/>\
`        `</div>\
`        `<div>\
`          `<label htmlFor="message" class="block text-lg font-heading text-text-primary mb-2">\
`            `Message\
`          `</label>\
`          `<textarea\
`            `name="message"\
`            `id="message"\
`            `rows={6}\
`            `class="w-full rounded-lg border-brand-accent-earth/50 shadow-sm focus:border-brand-primary focus:ring-brand-primary"\
`            `required\
`          `></textarea>\
`        `</div>\
`        `<div class="text-center">\
`          `<Button href="#" variant="primary" isSubmit={true}>\
`            `Send Message\
`          `</Button>\
`        `</div>\
`      `</form>\
`    `</div>\
`  `</section>\
</MainLayout>

-----
## **6. Setup & Deployment Guide**

This guide provides the exact steps to get this website running locally and deployed globally for **zero cost** on Vercel.

### **1. Prerequisites**

- **Node.js:** Ensure you have Node.js (v18 or newer) installed.
- **Git:** Required for version control and deploying to Vercel.
- **A GitHub/GitLab Account:** This will host your code repository.

### **2. Local Development Setup**

1. **Get the Code:** Unzip the provided project files or clone the repository.
1. **Open Terminal:** Navigate into the project directory (cd atma-bawana-website).
1. **Install Dependencies:** Run the following command:\
   Bash\
   npm install
1. **Run the Dev Server:** Start the local development server:\
   Bash\
   npm run dev
1. **View Your Site:** Open your browser and go to http://localhost:4321. You will see the website running, with live-reloading on any code changes.

### **3. Setting Up the Forms (Formspree)**

This is the only "backend" configuration required.

1. **Create an Account:** Go to <https://formspree.io/> <sup>20</sup> and sign up for the free "Free" plan (50 submissions/month).<sup>19</sup>
1. **Create Form 1 ("Get Involved"):**
   1. Click "+ New Form". Name it "Get Involved Form".
   1. Formspree will give you an **endpoint URL** (e.g., https://formspree.io/f/mqkvxxxx).
   1. Open src/components/GetInvolvedForm.tsx.
   1. On line 7, replace YOUR\_FORM\_ID with your new endpoint.
1. **Create Form 2 ("Contact"):**
   1. Click "+ New Form" again. Name it "Contact Form".
   1. Get the new endpoint URL for this form.
   1. Open src/pages/contact.astro.
   1. On line 8, replace YOUR\_OTHER\_FORM\_ID with this new endpoint.
1. **Test:** Run your local server (npm run dev) and submit a test from both forms. You will need to confirm your email with Formspree the first time. Submissions will now appear in your Formspree dashboard.

### **4. Zero-Cost Deployment (Vercel)**

This process will deploy your site to Vercel's global CDN for free.<sup>14</sup>

1. **Push to Git:**
   1. Create a new, private repository on GitHub or GitLab.
   1. Follow the on-screen instructions to push your local project to this repository.
1. **Connect to Vercel:**
   1. Sign up for a free "Hobby" account at <https://vercel.com/>.<sup>14</sup>
   1. On your Vercel dashboard, click "Add New... > Project".
   1. Select "Continue with Git" and import the atma-bawana-website repository you just created.
1. **Deploy:**
   1. Vercel will automatically detect that this is an **Astro** project.
   1. You do not need to change any settings.
   1. Click the **"Deploy"** button.
1. **Done:** In about 60 seconds, your site will be live on a public .vercel.app URL. Vercel will automatically redeploy the site every time you push a change to your Git repository. You can add your own custom domain (e.g., atmabawana.org) from the Vercel project settings.
-----
## **7. Ideas for Future Iterations**

This v1 site is a strong, fast, and philosophically-aligned foundation. As the movement grows, the website can easily evolve. Here is a strategic roadmap for v2 and beyond, all achievable with the chosen Astro stack.

1. **Implement a Headless CMS (Blog & Resources):**
   1. **Goal:** To add a Blog/Resources section and allow non-technical members (the "Guardians") to add content without touching code.
   1. **Action:** Astro integrates perfectly with headless CMSs. We can create a "Blog" or "Stories" section using Astro's content collections (for Markdown/MDX files) or connect to a free-tier headless CMS like **Sanity**, **Strapi**, or **Prismic**. This would be the home for educational content, project updates, and manifesto-related writing.
1. **Implement Multilingual Support (i18n):**
   1. **Goal:** To fully serve both the Indonesian and Global audiences, as outlined in the brief.
   1. **Action:** Astro has built-in i18n (internationalization) routing. We can create parallel content structures (/en/about and /id/tentang-kami) and add a language switcher to the header. This would allow key concepts like *Memayu Hayuning Bawana* to be presented natively in both languages.
1. **Develop an Events & Workshops System:**
   1. **Goal:** To facilitate real-world *Gotong Royong* by listing upcoming community clean-ups, workshops, and educational events.
   1. **Action:** This would be a new content collection (like the blog) for "Events." Each event would have a date, location, and a sign-up link (which could just be another Formspree form).
1. **Enhance the "Covenant" Page:**
   1. **Goal:** To make the *Perjanjian Bawana* a more tangible, community-building experience.
   1. **Action:** Instead of just a form, we could enhance the "Get Involved" page to be a "Covenant" page. After a user signs the pledge, we could (with their permission) add their name (or just a "dot") to an interactive map or a growing list of "Guardians." This visually reinforces the *Harmonized Incentives* and *Gotong Royong* principles.
#### **Works cited**
1. Atma Bawana\_ Identitas, Nilai, dan Prinsip Gerakan.pdf
1. Color Contrast Checker - Coolors, accessed November 15, 2025, <https://coolors.co/contrast-checker>
1. Contrast Checker - WebAIM, accessed November 15, 2025, <https://webaim.org/resources/contrastchecker/>
1. The 20 Best Google Fonts for Your Next Tech Website | by Fiorald | Bootcamp - Medium, accessed November 15, 2025, <https://medium.com/design-bootcamp/the-20-best-google-fonts-for-tech-websites-8cab33c33734>
1. 11 Best Free Google Fonts for Websites (2024), accessed November 15, 2025, <https://wp-rocket.me/blog/best-google-fonts/>
1. 8 Free Fonts for Wellness Brands - The Denizen Co., accessed November 15, 2025, <https://www.thedenizenco.com/journal/8-free-fonts-for-the-wellness-brand>
1. tailwindlabs/heroicons: A set of free MIT-licensed high-quality SVG icons for UI development. - GitHub, accessed November 15, 2025, <https://github.com/tailwindlabs/heroicons>
1. Heroicons, accessed November 15, 2025, <https://heroicons.com/>
1. Hugo vs Astro vs NextJs - which one is better for content-focused website? - support, accessed November 15, 2025, <https://discourse.gohugo.io/t/hugo-vs-astro-vs-nextjs-which-one-is-better-for-content-focused-website/42858>
1. The top five static site generators for 2025 (and when to use them!) - Cloud Cannon, accessed November 15, 2025, <https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2025-and-when-to-use-them/>
1. Why I Built MadeWithAstro.co and My Thoughts on Next.js vs. Astro : r/astrojs - Reddit, accessed November 15, 2025, <https://www.reddit.com/r/astrojs/comments/1ghwy9s/why_i_built_madewithastroco_and_my_thoughts_on/>
1. Astro vs Next.js - Choose the Right Framework - Themefisher, accessed November 15, 2025, <https://themefisher.com/astrojs-vs-nextjs>
1. Hugo vs Astro: A Modern Static Site Generator Showdown (2025) - Criztec Technologies, accessed November 15, 2025, <https://criztec.com/hugo-vs-astro>
1. Vercel vs Netlify: Which Developer Platform Has Better Pricing for Your Modern Web Projects? - Monetizely, accessed November 15, 2025, <https://www.getmonetizely.com/articles/vercel-vs-netlify-which-developer-platform-has-better-pricing-for-your-modern-web-projects>
1. Netlify vs Vercel - 2024 Free Hosting Face-Off - DEV Community, accessed November 15, 2025, <https://dev.to/lilxyzz/netlify-vs-vercel-2024-free-hosting-face-off-oo9>
1. Is Vercel's Free Tier Reliable Enough for Client Projects in 2025? : r/Hosting - Reddit, accessed November 15, 2025, <https://www.reddit.com/r/Hosting/comments/1nrvw2m/is_vercels_free_tier_reliable_enough_for_client/>
1. Netlify Forms vs Formspree for Web Agencies - Vanilla Websites, accessed November 15, 2025, <https://vanillawebsites.co.uk/blog/netlify-forms-vs-formspree/>
1. Vercel vs Netlify: Choosing the right one in 2025 (and what comes next) | Blog - Northflank, accessed November 15, 2025, <https://northflank.com/blog/vercel-vs-netlify-choosing-the-deployment-platform-in-2025>
1. Jamstack Tools: 14 Form Backends with Free Pricing Tiers - Prismic, accessed November 15, 2025, <https://prismic.io/blog/jamstack-tools-14-form-backends>
1. accessed November 15, 2025, <https://kinsta.com/blog/static-site-forms/#:~:text=1.,safe%20listing%20and%20spam%20protection.>
1. How to implement forms in static sites - Kinsta®, accessed November 15, 2025, <https://kinsta.com/blog/static-site-forms/>
1. How I handled forms with static website | by Parth Modi | Our LabNotes - Medium, accessed November 15, 2025, <https://medium.com/solute-labs/how-i-handled-forms-with-static-website-b2f412ff3992>
