# Big Cats Entertainment Website - Product Requirements Document

## Problem Statement
Build a luxury film production company website for Big Cats Entertainment in the style of Big Box Series, featuring gold (#C9A84C) and black (#0A0A0A) color scheme, with 8 sections showcasing their film portfolio, founders, and services.

## User Personas
- **Film Producers & Distributors**: Looking to collaborate or acquire Gujarati films
- **Content Buyers**: OTT platforms, satellite TV networks seeking content
- **Aspiring Filmmakers**: Seeking production partnerships
- **Audience**: Film enthusiasts interested in Gujarati cinema

## Core Requirements
1. Gold & Black luxury design aesthetic (Big Box Series style)
2. Playfair Display + Montserrat typography
3. 8 sections: Navbar, Hero, All Films, Founders, What We Do, About, Contact, Footer
4. Full-screen hero slideshow with 3 cinematic images
5. Film portfolio grid with 8 projects (Farzi, Rang Jo Lagyo, etc.)
6. Founders section with professional portraits
7. Services showcase with 5 tiles
8. Smooth scroll navigation
9. Hover interactions and animations
10. Mobile responsive design

## Architecture & Tech Stack
- **Frontend**: React 19 with Tailwind CSS
- **Fonts**: Playfair Display (headings), Montserrat (body)
- **Icons**: Lucide React
- **Image Sources**: Unsplash/Pexels (placeholder images)
- **Navigation**: React Router DOM
- **Styling**: Custom CSS + Tailwind

## What's Been Implemented (December 2025)

### Phase 1: Complete Frontend (Implemented)
✅ **Navbar Component**
   - Sticky navigation with transparent-to-solid scroll effect
   - Gold hover states on navigation links
   - Mobile hamburger menu with full-screen overlay
   - Smooth scroll to sections

✅ **Hero Section**
   - Full-screen image slideshow (3 cinematic slides)
   - Auto-advance every 4 seconds with fade transitions
   - Centered gold logo and heading
   - Animated scroll down indicator
   - Slide counter (1/3)

✅ **All Films Section**
   - 8 film cards in responsive grid (4 cols → 2 → 1)
   - Film data: Farzi, Rang Jo Lagyo, Shu Thayu?, Vandha Villas, Karsandas Pay & Use, Days of Tafree, Family Circus, Suryansh
   - Gold border hover effect
   - "Coming Soon" badge for Rang Jo Lagyo
   - Genre tags, release dates, platform info
   - External link icon on hover
   - Staggered fade-in animation

✅ **Founders' Desk Section**
   - Two-column layout (text left, photos right)
   - Professional portraits with grayscale-to-color hover
   - Founder bios: Neha Kshatriya & Pratik Choksi
   - "Read More" CTA link

✅ **What We Do Section**
   - 5 service tiles: Film Production, Creative Development, Film Marketing, Content Syndication, Brand Consulting
   - Full-width row layout
   - Background images with dark overlay
   - Title reveals on hover with color transition

✅ **About Section**
   - Centered text block (max-width 820px)
   - Company description and mission statement
   - Clean typography with generous spacing

✅ **Contact Section**
   - Email, phone, location
   - Founder IMDb and Instagram links
   - Hover states on all links
   - Minimal, elegant design

✅ **Footer**
   - Navigation links with separators
   - Gold logo wordmark
   - Copyright notice
   - Border top separator

✅ **Design System**
   - Colors: #C9A84C (gold), #0A0A0A (black), #FFFFFF (white), #777777 (gray)
   - Google Fonts: Playfair Display + Montserrat
   - Custom scrollbar styling
   - Fade-in animations
   - Selection color theming

## Current Status
Frontend complete with all 8 sections, fully responsive, with placeholder images from Unsplash/Pexels. All interactions, animations, and hover states implemented.

## Prioritized Backlog

### P1 Features
- [ ] Backend API for film CMS (add/edit/delete films)
- [ ] Contact form with email integration
- [ ] Film detail pages with more information
- [ ] Admin panel for content management

### P2 Features
- [ ] Blog/News section for company updates
- [ ] Video player integration for trailers
- [ ] Awards & recognition section
- [ ] Press/media kit download
- [ ] Newsletter subscription
- [ ] SEO optimization

### P3 Features
- [ ] Multi-language support (English/Gujarati)
- [ ] Film search and filtering
- [ ] Social media feed integration
- [ ] Analytics integration
- [ ] Performance optimization
- [ ] Image lazy loading

## Next Tasks
1. **User to replace placeholder images** with:
   - 3 actual hero slideshow images
   - 8 real film posters
   - 2 founder portraits
   - 5 service background images
   - Company logo

2. **Optional Backend Development**:
   - MongoDB models for films and contact inquiries
   - REST API endpoints for CRUD operations
   - Contact form submission handling
   - Email notification service

3. **Content Updates**:
   - Add actual release dates and durations
   - Update film descriptions
   - Add more detailed founder bios

## Notes
- All images are currently placeholders from Unsplash/Pexels
- Design follows exact specifications from Big Box Series style
- No backend or CMS - pure frontend implementation
- All film data stored in mockData.js

## Latest Update (December 2025)
**Design Theme Changed**: Updated from dark theme to light theme
- Background: #0A0A0A → #FFFFFF (white)
- Text colors: white → dark (#333333)
- Card backgrounds: #111111 → white with shadows
- Borders: #1C1C1C → #E5E5E5
- Footer: #080808 → #F5F5F5
- Maintained gold #C9A84C accent throughout
- Updated navbar with shadow on scroll
- Hero overlay changed from dark to light (30% white opacity)
- All hover states and interactions preserved
