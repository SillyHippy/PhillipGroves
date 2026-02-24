# Update Portfolio Content and Favicon

## Content Updates

Comprehensive rewrite of the portfolio using the new, more detailed copy Phillip provided. This makes the site significantly more employer-friendly by adding accommodations info, target roles, and richer descriptions.

### Key Content Changes

&nbsp;

- **About Section**: Rewrite with the new personal summary, including mobility device accommodation details
- **Highlights Section**: Update cards to reflect the new "Why Hire Phillip" bullet points
- **Skills Section**: Restructure into 4 updated categories -- Operations, Facility and Lobby Maintenance, Equipment and Tools, Safety (plus Technical and Soft Skills folded in)
- **Experience Section**: Expand bullet points for all roles with the richer descriptions provided
- **New "Target Roles" Section**: Add a new section listing the types of part-time roles Phillip is seeking (Retail, Restaurant/Hospitality, Facility Support, Light Warehouse)
- **New "Availability" Section**: Flexible scheduling, daytime/evening/weekend, Tulsa area
- **Contact Section**: Update email, reinforce messaging
- **Hero Section**: Update tagline and description to match new tone

### Favicon

- Waiting for user to provide an image or URL before updating

## Files to Modify

- `src/components/HeroSection.tsx` -- Updated tagline, description, and email
- `src/components/AboutSection.tsx` -- Full rewrite with new summary and accommodation info
- `src/components/HighlightsSection.tsx` -- Updated highlight cards
- `src/components/SkillsSection.tsx` -- Restructured skill categories with new items
- `src/components/ExperienceSection.tsx` -- Expanded bullet points for all roles
- `src/components/ContactSection.tsx` -- Updated email and messaging

## New Files

- `src/components/TargetRolesSection.tsx` -- New section showcasing the types of roles Phillip is seeking
- `src/components/AvailabilitySection.tsx` -- Small section with availability and scheduling info

## Modified Files

- `src/pages/Index.tsx` -- Add new sections to the page layout (Target Roles after About, Availability before Contact)

## Section Order (top to bottom)

1. Navbar (sticky)
2. Hero (name, tagline, contact info, download resume)
3. About Me (personal pitch with accommodation note)
4. Highlights (why hire Phillip)
5. Target Part-Time Roles (new)
6. Core Competencies (updated skills grid)
7. Work Experience and Training (expanded timeline)
8. Education and Certifications (existing)
9. Availability (new)
10. Contact (updated email and messaging)
11. Footer