# Verification — Studio Bind Architects

Checked 5 October 2026 against a local production build.

- Production build and TypeScript: passed.
- HTML content routes: 43, each returned HTTP 200 with one H1, a canonical and preview noindex metadata.
- Responsive checks: 32 route/viewport combinations, including widths 320, 375, 390, 768, 1024, 1440, 1920 and 2560; no horizontal overflow detected.
- Automated accessibility: 8 representative page templates checked with axe against WCAG 2 A/AA and 2.1 AA rules; zero reported violations after correcting a decorative label's contrast. Automated scans are not a complete accessibility certification.
- Browser runtime errors observed: zero.
- Journeys: hero selection, design layers, project filtering, FAQ search and recovery, mobile navigation and Escape, project-brief validation and draft links, and reduced motion.
- Menu focus returns to its trigger on Escape: True.
- Redirects: /projects, /architects-in-tamil-nadu, /blank and /blank-2 checked; missing pages returned 404.
- Images: 253 imported WebP assets and the original logo opened successfully during integrity checks.

## Limits

No Vercel deployment or production-domain check was possible because the Studio Bind repository and intended Vercel destination were not exposed. No email or WhatsApp enquiry was sent. The user must complete sending in the chosen app; the site does not store a lead in a database. GA4 is optional and was not configured or tested against a real account.

Responsive checks used Chromium emulation, not physical devices or Safari. Real-device Safari/Android checks and post-deployment Core Web Vitals should be completed on the Vercel preview and custom domain. No SEO ranking or conversion uplift was measured.

The environment's agent-browser daemon did not start; verification used Playwright with Chromium. The final targeted recheck resolved the single remaining decorative-number contrast finding. Original test output and the targeted recheck are recorded in `docs/verification.json`.
