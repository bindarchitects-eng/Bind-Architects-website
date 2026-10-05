# Studio Bind Architects — website redesign

A complete Next.js App Router rebuild prepared for the Studio Bind Architects GitHub and Vercel accounts. The existing site at https://www.bindarchitects.com is on Wix. This source has not been pushed or deployed, and DNS has not been changed.

## Run

Use Node.js 24 and npm.

```bash
npm ci
npm run dev -- --hostname 127.0.0.1
npm run build
npm run start -- --hostname 127.0.0.1
```

For browser verification:

```bash
npx playwright-core install chromium
npm run build
npm run verify
```

The verification script starts its own production server on 127.0.0.1:3100. If using an already-installed Chromium, set `CHROME_EXECUTABLE_PATH` to its executable. The browser test deliberately prepares fictitious contact details but never follows an external send link. It writes results and screenshots into `test-results/`.

## What is included

- 43 content pages: home, work, studio, expertise, process, architect education, FAQs, contact, fieldnotes, professional standards, privacy, media, 20 project pages, four services, four location pages, and three guides.
- All 20 original `/project/...` paths retained, including `/project/sk's-residence`.
- 253 project images imported from the user's existing website, optimised as local WebP images. The original brand logo is preserved.
- Warm editorial design, responsive layouts, manual hero selection, interactive design layers, scroll transitions, hover transitions and reduced-motion support.
- Work filters and 20 searchable client FAQs.
- A three-stage enquiry brief with real WhatsApp and email draft links. There is no server-side lead storage and no fake submission confirmation.
- Local search content for Chennai, Valasaravakkam, Tamil Nadu and Coimbatore. The latter is an enquiry service area, not a claimed branch office.
- Canonicals, social metadata, OG image, sitemap, robots, JSON-LD and basic security response headers.
- Optional consent-controlled GA4. No client contact information or brief text is passed to analytics.

## Editing

- `src/lib/projects.json`: project facts, status, credits and gallery ordering.
- `src/lib/content.ts`: services, FAQs, locations, process and guides.
- `src/components/editorial-pages.tsx`: studio, professional standards and related page copy.
- `src/app/globals.css`: design tokens, responsive layouts and motion.
- `src/components/brief.tsx`: enquiry flow.
- `docs/asset-sources.json`: original URLs for every imported project image.

The published status and area for each project were imported from the current website. They have not been independently re-certified. The duplex project explicitly retains the BTB Design Studio collaboration and Studio Bind's interior project management scope. Where the source omitted a status or location, no completion claim or location was invented.

## Deployment handoff

1. Create or expose a repository owned by `bindarchitects-eng`, the connected Studio Bind GitHub account. It returned no accessible repositories during this task.
2. Connect Studio Bind's intended Vercel account/team. Only the personal Vercel team and the separate Bind Builds connection were exposed during this task; a Studio Bind destination was not available.
3. Push this source to the repository and import it into Vercel with framework `Next.js`, Node.js `24.x`, build `npm run build`, output managed by Next.js. Use the project root.
4. Keep `SITE_INDEXABLE=false` for preview. Set `NEXT_PUBLIC_SITE_URL=https://www.bindarchitects.com`.
5. Check the Vercel preview with the owner: project status updates, contact details, social accounts, portfolio image/photographer permissions and the desired service coverage.
6. Confirm the principal architect's current CoA registration number before adding any registration badge or credential. This build does not invent one.
7. The original sitemap inventory has been checked. The old Wix `/blank` page duplicates Studio and redirects to `/studio`. The `/blank-2` page names Flora Diamonds but repeats unrelated clinic copy; it redirects to `/project/flora-diamonds`. The 20 published project routes and six named main pages are retained. Verify these redirects again on Vercel.
8. Connect the existing custom domain and switch DNS only after the preview is accepted and the domain account is available. Preserve the working Wix site until cutover and keep its old DNS records for rollback.
9. Set `SITE_INDEXABLE=true` in production and rebuild. The code also blocks indexing when `VERCEL_ENV=preview`.
10. Verify HTTPS, redirects, public indexing settings and sitemap on the custom domain, then submit the sitemap in the owner's existing Search Console property. Review queries and successful enquiries over time.

No search ranking, traffic increase, lead volume, approval outcome or construction saving is guaranteed.

## Analytics

`NEXT_PUBLIC_GA_ID` is optional. Without it, no GA script or consent banner is loaded. With a valid `G-...` ID, analytics loads only after the visitor opts in. Recorded event names are `page_view`, `brief_prepared`, `contact_whatsapp` and `contact_email`. Contact clicks are not verified leads. Use confirmed enquiry records separately to measure conversion quality.

## Fonts and imagery

Manrope and DM Serif Display are self-hosted with their SIL Open Font License texts in `public/fonts`. Project imagery and the Studio Bind logo are from bindarchitects.com and are intended for the owner's website. No competitor imagery, copied layouts, generated portfolio images, fabricated testimonials or award claims are included.
