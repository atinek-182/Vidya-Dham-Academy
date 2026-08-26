import React from 'react';
import { RootLayout, SectionWrapper, GridContainer } from './layouts';

export const App: React.FC = () => {
  return (
    <RootLayout
      headerContent={
        <GridContainer as="nav" className="h-full flex items-center justify-between" noGrid>
          {/* Brand Identity: Cols 1-4 */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
              VD
            </div>
            <span className="font-sans font-bold text-sm tracking-wider uppercase text-white">
              Vidya Dham Academy
            </span>
          </div>

          {/* Center Status Capsule: Cols 6-8 */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Cohort 2026-27: 19/25 Claimed</span>
          </div>

          {/* Right Action: Cols 11-12 */}
          <div className="flex items-center gap-4">
            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#05070c] font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#05070c]"
            >
              Reserve Classroom Visit
            </a>
            <button
              type="button"
              aria-label="Open Navigation Menu"
              className="w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span className="w-4 h-[1.5px] bg-current" />
              <span className="w-4 h-[1.5px] bg-current" />
            </button>
          </div>
        </GridContainer>
      }
      footerContent={
        <SectionWrapper variant="major" className="bg-[#05070c]">
          <GridContainer as="div">
            {/* Col 1-4: Institutional Charter */}
            <div className="col-span-4 sm:col-span-4 lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                  VD
                </div>
                <span className="font-bold text-sm tracking-wider uppercase text-white">
                  Vidya Dham Academy
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Registered STEM Foundation. Strict 25-student cohort charter. Founded on offline pedagogical rigor and 4K smart board derivations.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                [OK] ISO 9001:2026 Academic Governance Certified
              </p>
            </div>

            {/* Col 5-6: Deep Routes */}
            <div className="col-span-4 sm:col-span-2 lg:col-span-2 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Academic Routes
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#pedagogy" className="hover:text-amber-400 transition-colors">Pedagogy & Rigor</a></li>
                <li><a href="#faculty" className="hover:text-amber-400 transition-colors">Founding Faculty</a></li>
                <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Cohort Availability</a></li>
                <li><a href="#governance" className="hover:text-amber-400 transition-colors">Campus Governance</a></li>
              </ul>
            </div>

            {/* Col 7-9: Safety & Standards */}
            <div className="col-span-4 sm:col-span-2 lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Safety & Compliance
              </h3>
              <ul className="space-y-2 text-xs text-slate-400 font-mono">
                <li>[PASS] Fire Safety Certificate #2026-A</li>
                <li>[PASS] 24/7 CCTV Monitored Facility</li>
                <li>[PASS] Child Protection Charter</li>
                <li>[PASS] Zero PII Telemarketing Resale</li>
              </ul>
            </div>

            {/* Col 10-12: Contact & Location */}
            <div className="col-span-4 sm:col-span-4 lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Direct Campus Desk
              </h3>
              <p className="text-sm text-slate-400">
                Civic Center Road, Sector 4, Campus One
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Daily Mentorship: 08:30 - 19:30
              </p>
              <p className="text-sm text-amber-400 font-mono">
                +91 (0) 98765 43210
              </p>
            </div>

            {/* Full-width Copyright Hairline */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <span>(C) 2026 Vidya Dham Academy. All rights reserved.</span>
              <span className="font-mono text-[11px]">System Contract: Editorial-Tech Obys Grid</span>
            </div>
          </GridContainer>
        </SectionWrapper>
      }
      mobileStripContent={
        <div className="p-3 flex items-center gap-3">
          <a
            href="#admissions"
            className="flex-1 h-12 rounded-lg bg-amber-500 text-[#05070c] font-semibold text-sm flex items-center justify-center shadow-lg active:scale-[0.98] transition-transform"
          >
            Reserve Classroom Visit
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Inquiry"
            className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-emerald-400 active:scale-[0.98] transition-transform"
          >
            <span className="font-mono font-bold text-xs">WA</span>
          </a>
        </div>
      }
    >
      {/* STAGE 1: ASYMMETRICAL HERO STAGE */}
      <SectionWrapper id="hero" variant="hero" bleedDivider>
        <GridContainer>
          {/* Left Column (Cols 1-7): Monumental Headline & Proof Hook */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs w-fit">
              <span>ACADEMIC YEAR 2026-27</span>
              <span>•</span>
              <span>GRADES 8-12</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92] text-balance">
              Disciplined Offline Rigor. Illuminated by Interactive Smart Boards.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-[65ch] leading-relaxed text-pretty">
              Small cohorts strictly capped at 25 students. Daily direct mentorship from verified master teachers. Zero commercial backbenchers, zero passive video streaming.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#admissions"
                className="h-12 px-8 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#05070c] font-semibold text-sm flex items-center justify-center transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Reserve Classroom Visit
              </a>
              <a
                href="#pedagogy"
                className="h-12 px-6 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 font-medium text-sm flex items-center justify-center transition-colors"
              >
                Explore Pedagogy Roadmap -&gt;
              </a>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Live Cohort Status & Interactive Derivation Preview */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-4">
            {/* Live Batch Availability Card */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider">Cohort Capacity</span>
                <span className="text-amber-400 font-semibold">[ACTIVE] 19 / 25 Claimed</span>
              </div>

              {/* Visual Seat Meter */}
              <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[76%]" />
              </div>

              <p className="text-xs text-slate-400 font-mono">
                Only 6 seats remaining before registration closes permanently.
              </p>
            </div>

            {/* Smart Board Derivation Sandbox Teaser */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-medium">Smart Board Sandbox</span>
                <span className="text-slate-500 font-mono">Snell's Law: n1 sin θ1 = n2 sin θ2</span>
              </div>

              <div className="h-44 rounded-xl bg-[#05070c] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent pointer-events-none" />
                <span className="text-xs font-mono text-slate-500 text-center px-4">
                  [Interactive Ray Optics Derivation Stage &bull; 60 FPS Canvas Preview]
                </span>
              </div>

              <p className="text-xs text-slate-400 italic">
                "Visual geometric derivations eliminate memorization anxiety."
              </p>
            </div>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 2: INSTITUTIONAL CREDIBILITY LEDGER */}
      <SectionWrapper id="credibility" variant="major" bleedDivider>
        <GridContainer>
          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 sm:border-r border-white/[0.08] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Classroom Charter</span>
            <h2 className="text-3xl font-bold font-serif text-white">25 MAX</h2>
            <p className="text-sm text-slate-400">
              Strictly capped batch ceiling. Every student sits in the first 4 rows. Guaranteed.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 lg:border-r border-white/[0.08] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Faculty Continuity</span>
            <h2 className="text-3xl font-bold font-serif text-white">100% FOUNDERS</h2>
            <p className="text-sm text-slate-400">
              Core subjects instructed solely by primary master mentors. Zero rotating junior surrogates.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 sm:border-r border-white/[0.08] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Daily SLA</span>
            <h2 className="text-3xl font-bold font-serif text-white">60 MIN / DAY</h2>
            <p className="text-sm text-slate-400">
              Dedicated 1-on-1 doubt desk resolution before leaving campus every evening.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Integrity</span>
            <h2 className="text-3xl font-bold font-serif text-white">UPFRONT</h2>
            <p className="text-sm text-slate-400">
              Transparent quarterly fee sheet. 100% textbook and smart board inclusion. Zero hidden surcharges.
            </p>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 3: SMART BOARD PEDAGOGY BENTO GRID */}
      <SectionWrapper id="pedagogy" variant="major" bleedDivider>
        <GridContainer>
          {/* Section Header (Cols 1-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 space-y-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Visual Cognition Engine</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white text-balance">
              From Abstract Formulas to Intuitive Geometry.
            </h2>
            <p className="text-base text-slate-300 max-w-[65ch] leading-relaxed">
              Why 4K digital smart boards combined with handwritten notebook rigor creates permanent retention in Physics, Chemistry, and Mathematics.
            </p>
          </div>

          {/* Row 1: Module 3.1 (Cols 1-8) + Module 3.2 (Cols 9-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 p-8 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Module 3.1 &bull; Interactive Sandbox</span>
            <h3 className="text-2xl font-bold font-serif text-white">Interactive Physics & Vector Geometry</h3>
            <div className="h-64 rounded-xl bg-[#05070c] border border-white/[0.06] flex items-center justify-center">
              <span className="text-xs font-mono text-slate-500">
                [Full Interactive Smart Board Derivation Canvas Slot]
              </span>
            </div>
            <p className="text-sm text-slate-300">
              Students manipulate live physical parameters on screen, observing wave equations and Snell refraction in real time.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-8 lg:col-span-4 p-8 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Module 3.2 &bull; Notebook Discipline</span>
            <h3 className="text-xl font-bold font-serif text-white">3-Tier Notebook System</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono">01</span>
                <span>Tier 1: In-class live derivation notebook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono">02</span>
                <span>Tier 2: Daily practice problem (DPP) journal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono">03</span>
                <span>Tier 3: Error-analysis logbook</span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 italic pt-2">
              "Every derivation on board must be handwritten into student logs."
            </p>
          </div>

          {/* Row 2: Module 3.3 (Cols 1-6) + Module 3.4 (Cols 7-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-6 p-8 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-3 mt-4 sm:mt-0">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Module 3.3 &bull; Weekly Diagnostics</span>
            <h3 className="text-xl font-bold font-serif text-white">20-Minute Friday Concept Pacing</h3>
            <p className="text-sm text-slate-300">
              Weekly micro-tests that measure conceptual velocity rather than provoking test anxiety. Identifies doubt points immediately.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-8 lg:col-span-6 p-8 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-3 mt-4 sm:mt-0">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Module 3.4 &bull; Doubt Desk SLA</span>
            <h3 className="text-xl font-bold font-serif text-white">1-on-1 Faculty Resolution Desk</h3>
            <p className="text-sm text-slate-300">
              Every student has access to the founding mentor desk daily from 17:30 to 18:45. No unresolved questions carry into the next lecture.
            </p>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 4: PINNED COMPARISON TRACK */}
      <SectionWrapper id="comparison" variant="showcase" bleedDivider>
        <GridContainer>
          {/* Sticky Left Column (Cols 1-4) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Pedagogical Contrast</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight text-balance">
              The Reality of Mega-Factories vs. The Vidya Dham Model.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Most commercial institutes maximize corporate margins by packing 100+ students into massive auditoriums. We do the exact opposite.
            </p>
          </div>

          {/* Right Comparison Matrix (Cols 5-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Commercial Mega-Factory */}
              <div className="p-6 rounded-2xl bg-[#0b0f19]/60 border border-white/[0.06] space-y-4 opacity-75">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Commercial Coaching</span>
                <h3 className="text-lg font-bold text-slate-200">The Factory Approach</h3>
                <ul className="space-y-2 text-xs text-slate-400 font-mono">
                  <li>[FAIL] 80-120 students per lecture hall</li>
                  <li>[FAIL] Rotating junior surrogate tutors</li>
                  <li>[FAIL] Anonymous ticketed doubt queues</li>
                  <li>[FAIL] Passive one-way lecture streaming</li>
                  <li>[FAIL] Parent communication hidden behind sales</li>
                </ul>
              </div>

              {/* Card 2: Vidya Dham Model */}
              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-amber-500/30 shadow-xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Vidya Dham Charter</span>
                <h3 className="text-lg font-bold text-white">The Academic Model</h3>
                <ul className="space-y-2 text-xs text-slate-200 font-mono">
                  <li>[PASS] Strictly capped at 25 students</li>
                  <li>[PASS] 100% founding master mentors</li>
                  <li>[PASS] Daily 1-on-1 doubt desk resolution</li>
                  <li>[PASS] Interactive smart board derivations</li>
                  <li>[PASS] Direct weekly faculty updates to parents</li>
                </ul>
              </div>
            </div>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 5: ADMISSIONS CONVERSION ANCHOR */}
      <SectionWrapper id="admissions" variant="major">
        <GridContainer>
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-3 p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-white/[0.12] shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Admission Sessions 2026-27</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white text-balance">
                Sit in an Actual Saturday Class. Judge for Yourself.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero sales agents. Zero marketing pressure. Attend an authentic 45-minute offline concept session with your child.
              </p>
            </div>

            {/* Visit Reservation Form Slot */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-2">
              <div className="space-y-2">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Select Student Grade
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      className="h-10 rounded-lg bg-[#05070c] hover:bg-white/[0.06] border border-white/[0.10] text-xs font-mono text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="parent-phone" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                  Parent Contact Number (WhatsApp Enabled)
                </label>
                <input
                  id="parent-phone"
                  type="tel"
                  placeholder="+91 10-digit mobile number"
                  className="w-full h-12 px-4 rounded-lg bg-[#05070c] border border-white/[0.12] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#05070c] font-semibold text-sm flex items-center justify-center transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Reserve Saturday Classroom Visit
              </button>

              <p className="text-xs text-slate-500 font-mono text-center">
                Seats allocated in strict order of registration. Current cohort: 19/25 claimed.
              </p>
            </form>
          </div>
        </GridContainer>
      </SectionWrapper>
    </RootLayout>
  );
};

export default App;
