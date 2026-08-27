import React from 'react';
import { RootLayout, SectionWrapper, GridContainer } from './layouts';
import {
  AtmosphereCanvas,
  ButtonPrimary,
  ButtonSecondary,
  CardBento,
  StatusBadge,
  RayOpticsCanvas,
  StemBadgesCanvas,
  AdmissionsForm,
  IconAtom,
  IconBook,
  IconUsers,
  IconDiploma,
  IconClock,
  IconShieldCheck,
  IconChat,
  IconTv,
  IconCheckCircle,
  IconCloseCircle,
  IconPhone,
  IconArrowRight,
  IconCalendar,
  IconPen,
  IconTarget,
  IconStar,
  IconWhatsApp,
} from './components';

import photoClassroom1 from './assets/photos/physics-classroom-1.jpg';
import photoClassroom2 from './assets/photos/physics-classroom-2.jpg';
import photoOptics1 from './assets/photos/optics-laboratory-1.webp';
import photoOptics2 from './assets/photos/optics-laboratory-2.webp';

export const App: React.FC = () => {
  return (
    <RootLayout
      headerContent={
        <GridContainer as="nav" className="h-full flex items-center justify-between" noGrid>
          {/* Brand Identity: Cols 1-4 */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform">
              <IconAtom size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-wider uppercase text-white">
                Vidya Dham
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-amber-400/90">
                Academy • STEM Foundation
              </span>
            </div>
          </a>

          {/* Center Status Capsule: Cols 6-8 */}
          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300 font-mono shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <IconUsers size={14} className="text-amber-400" />
            <span>Cohort 2026-27: <strong className="text-white font-semibold">19 / 25</strong> Claimed</span>
          </div>

          {/* Right Action: Cols 11-12 */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#05070c] font-semibold text-xs font-mono uppercase tracking-wider transition-colors shadow-[0_2px_12px_rgba(245,158,11,0.25)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#05070c]"
            >
              <IconCalendar size={14} />
              <span>Reserve Visit</span>
            </a>
            <a
              href="#pedagogy"
              aria-label="Navigate to Pedagogy section"
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-amber-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <IconBook size={18} />
            </a>
          </div>
        </GridContainer>
      }
      footerContent={
        <SectionWrapper variant="major" className="bg-[#05070c] relative z-10 border-t border-white/[0.08]">
          <GridContainer as="div">
            {/* Col 1-4: Institutional Charter */}
            <div className="col-span-4 sm:col-span-4 lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <IconAtom size={18} />
                </div>
                <span className="font-bold text-sm tracking-wider uppercase text-white font-sans">
                  Vidya Dham Academy
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Registered Offline STEM Foundation. Strict 25-student cohort ceiling. Founded on master teacher derivations and 4K interactive smart board clarity.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-400/90 font-mono">
                <IconShieldCheck size={15} />
                <span>ISO 9001:2026 Academic Governance Certified</span>
              </div>
            </div>

            {/* Col 5-6: Deep Routes */}
            <div className="col-span-4 sm:col-span-2 lg:col-span-2 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Academic Routes
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#pedagogy" className="hover:text-amber-400 transition-colors">Pedagogy & Rigor</a></li>
                <li><a href="#credibility" className="hover:text-amber-400 transition-colors">Classroom Charter</a></li>
                <li><a href="#comparison" className="hover:text-amber-400 transition-colors">Model Comparison</a></li>
                <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Cohort Availability</a></li>
              </ul>
            </div>

            {/* Col 7-9: Safety & Standards */}
            <div className="col-span-4 sm:col-span-2 lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Safety & Compliance
              </h3>
              <ul className="space-y-2 text-xs text-slate-400 font-mono">
                <li className="flex items-center gap-1.5">
                  <IconCheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>Fire Safety Certificate #2026-A</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <IconCheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>24/7 Monitored STEM Facility</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <IconCheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>Child Protection Charter</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <IconCheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>Zero PII Telemarketing Resale</span>
                </li>
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
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <IconClock size={14} className="text-amber-400 shrink-0" />
                <span>Daily Mentorship: 08:30 - 19:30</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-400 font-mono">
                <IconPhone size={15} className="shrink-0" />
                <a href="tel:+919876543210" className="hover:underline">+91 (0) 98765 43210</a>
              </div>
            </div>

            {/* Full-width Copyright Hairline */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <span>(C) 2026 Vidya Dham Academy. All rights reserved. Attribution-Free CC0 STEM Media.</span>
              <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                <IconShieldCheck size={13} className="text-amber-400" />
                <span>Solar Duotone Bold Architecture &bull; VibeSec Hardened</span>
              </span>
            </div>
          </GridContainer>
        </SectionWrapper>
      }
      mobileStripContent={
        <div className="p-3 flex items-center gap-3">
          <a
            href="#admissions"
            className="flex-1 h-12 rounded-lg bg-amber-500 text-[#05070c] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
          >
            <IconCalendar size={18} />
            <span>Reserve Classroom Visit</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Inquiry"
            className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 active:scale-[0.98] transition-transform"
          >
            <IconWhatsApp size={22} />
          </a>
        </div>
      }
    >
      {/* BACKGROUND ATMOSPHERIC SHADER MESH */}
      <AtmosphereCanvas particleCount={30} className="pointer-events-none opacity-40 z-0" />

      {/* STAGE 1: ASYMMETRICAL HERO STAGE */}
      <SectionWrapper id="hero" variant="hero" bleedDivider className="relative z-10">
        <GridContainer>
          {/* Left Column (Cols 1-7): Monumental Headline & Proof Hook */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs w-fit">
              <IconStar size={13} className="text-amber-400" />
              <span>ACADEMIC YEAR 2026-27</span>
              <span>&bull;</span>
              <span>GRADES 8-12 OFFLINE BATCH</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92] text-balance">
              Disciplined Offline Rigor. Illuminated by Interactive Smart Boards.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-[65ch] leading-relaxed text-pretty">
              Small cohorts strictly capped at 25 students. Daily direct mentorship from verified master teachers. Zero commercial backbenchers, zero passive video streaming.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <ButtonPrimary
                size="lg"
                icon={<IconCalendar size={18} />}
                onClick={() => {
                  const el = document.getElementById('admissions');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reserve Classroom Visit
              </ButtonPrimary>

              <ButtonSecondary
                size="lg"
                icon={<IconArrowRight size={18} />}
                onClick={() => {
                  const el = document.getElementById('pedagogy');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Pedagogy Roadmap
              </ButtonSecondary>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Live Cohort Status & Interactive Derivation Preview */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-4">
            {/* Live Batch Availability Card */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <IconUsers size={14} className="text-amber-400" />
                  Cohort Capacity
                </span>
                <StatusBadge variant="active" size="sm">
                  19 / 25 Claimed
                </StatusBadge>
              </div>

              {/* Visual Seat Meter */}
              <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden" role="progressbar" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full w-[76%]" />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>6 seats remaining</span>
                <span className="text-amber-400 font-medium">Closes after 25</span>
              </div>
            </div>

            {/* Smart Board Derivation Sandbox Teaser */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/[0.10] shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <IconTv size={14} className="text-amber-400" />
                  Smart Board Sandbox
                </span>
                <span className="text-slate-400 font-mono text-[11px]">n₁ sin θ₁ = n₂ sin θ₂</span>
              </div>

              {/* Interactive Ray Optics Derivation Stage */}
              <div className="h-48 rounded-xl bg-[#05070c] border border-white/[0.08] relative overflow-hidden flex items-center justify-center">
                <RayOpticsCanvas initialAngle={35} height={192} />
              </div>

              <p className="text-xs text-slate-400 italic flex items-center gap-1.5">
                <IconAtom size={13} className="text-amber-400 shrink-0" />
                <span>"Visual geometric derivations eliminate memorization anxiety."</span>
              </p>
            </div>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 2: INSTITUTIONAL CREDIBILITY LEDGER */}
      <SectionWrapper id="credibility" variant="major" bleedDivider className="relative z-10">
        <GridContainer>
          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 sm:border-r border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <IconUsers size={22} />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">Classroom Charter</span>
            <h2 className="text-3xl font-bold font-serif text-white">25 MAX</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strictly capped batch ceiling. Every student sits in the first 4 rows. Guaranteed eye contact with faculty.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 lg:border-r border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <IconDiploma size={22} />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">Faculty Continuity</span>
            <h2 className="text-3xl font-bold font-serif text-white">100% FOUNDERS</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Core subjects instructed solely by primary master mentors. Zero rotating junior surrogates.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 border-b sm:border-b-0 sm:border-r border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <IconClock size={22} />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">Daily SLA</span>
            <h2 className="text-3xl font-bold font-serif text-white">60 MIN / DAY</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated 1-on-1 doubt desk resolution before leaving campus every evening. Zero backlogged confusion.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-3 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <IconShieldCheck size={22} />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">Integrity</span>
            <h2 className="text-3xl font-bold font-serif text-white">UPFRONT</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transparent quarterly fee sheet. 100% textbook and smart board inclusion. Zero hidden surcharges.
            </p>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 3: SMART BOARD PEDAGOGY BENTO GRID */}
      <SectionWrapper id="pedagogy" variant="major" bleedDivider className="relative z-10">
        <GridContainer>
          {/* Section Header (Cols 1-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs w-fit">
              <IconTv size={14} />
              <span>VISUAL COGNITION ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white text-balance">
              From Abstract Formulas to Intuitive Geometry.
            </h2>
            <p className="text-base text-slate-300 max-w-[65ch] leading-relaxed">
              Why 4K digital smart boards combined with handwritten notebook rigor creates permanent retention in Physics, Chemistry, and Mathematics.
            </p>
          </div>

          {/* Row 1: Module 3.1 (Cols 1-8) + Module 3.2 (Cols 9-12) */}
          <CardBento
            colSpan="col-span-4 sm:col-span-8 lg:col-span-8"
            tag="Module 3.1 • Kinetic STEM Derivations"
            icon={<IconAtom size={22} />}
            title="Interactive Physics & Vector Geometry"
            description="Students manipulate live physical parameters on screen, observing wave equations, Snell refraction, and orbital mechanics in real time."
          >
            <div className="h-64 rounded-xl bg-[#05070c] border border-white/[0.08] relative overflow-hidden mb-4 shadow-inner">
              <StemBadgesCanvas height={256} />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <IconStar size={13} className="text-amber-400" />
              <span>2D Physics Matter.js Engine &bull; Zero memorization anxiety</span>
            </div>
          </CardBento>

          <CardBento
            colSpan="col-span-4 sm:col-span-8 lg:col-span-4"
            tag="Module 3.2 • Notebook Discipline"
            icon={<IconBook size={22} />}
            title="3-Tier Notebook System"
            description="Every derivation on board must be handwritten into student logs for physical neuro-retention."
          >
            <ul className="space-y-3 text-sm text-slate-300 pt-2 font-sans">
              <li className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <strong className="text-white block font-medium">In-Class Derivation Log</strong>
                  <span className="text-xs text-slate-400">Live derivations and conceptual proofs</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <strong className="text-white block font-medium">Daily Practice Journal</strong>
                  <span className="text-xs text-slate-400">Nightly problem sets verified by 08:30</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  03
                </div>
                <div>
                  <strong className="text-white block font-medium">Error-Analysis Ledger</strong>
                  <span className="text-xs text-slate-400">Deep post-mortems of test mistakes</span>
                </div>
              </li>
            </ul>
          </CardBento>

          {/* Row 2: Module 3.3 (Cols 1-6) + Module 3.4 (Cols 7-12) */}
          <CardBento
            colSpan="col-span-4 sm:col-span-8 lg:col-span-6"
            tag="Module 3.3 • Weekly Diagnostics"
            icon={<IconTarget size={22} />}
            title="20-Minute Friday Concept Pacing"
            description="Weekly micro-tests that measure conceptual velocity rather than provoking test anxiety. Identifies doubt points before they compound."
          >
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 mt-2 font-mono text-xs text-slate-300">
              <div className="flex justify-between text-slate-400">
                <span>Diagnostic Pacing</span>
                <span className="text-amber-400">Every Friday 16:30</span>
              </div>
              <div className="w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[85%]" />
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Pinpoints micro-gaps in kinematic calculus and stoichiometry within 24 hours.
              </p>
            </div>
          </CardBento>

          <CardBento
            colSpan="col-span-4 sm:col-span-8 lg:col-span-6"
            tag="Module 3.4 • Doubt Desk SLA"
            icon={<IconChat size={22} />}
            title="1-on-1 Faculty Resolution Desk"
            description="Every student has guaranteed access to the founding mentor desk daily from 17:30 to 18:45. No unresolved questions carry into the next lecture."
          >
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between mt-2">
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">Daily Resolution Window</div>
                <div className="text-sm font-semibold text-white">17:30 - 18:45 IST</div>
              </div>
              <StatusBadge variant="active" size="md">
                Guaranteed Daily
              </StatusBadge>
            </div>
          </CardBento>

          {/* Row 3: Authentic STEM Photographic Evidence Band (Zero CLS, Explicit Aspect Ratios) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 pt-8 mt-4 border-t border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Authentic STEM Campus Environments
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Physical Classrooms & Laboratory Apparatus
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                [OK] Openverse CC0 Photography &bull; Zero AI Hallucinations
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Photo 1: Large Lecture Hall */}
              <div className="group relative rounded-2xl overflow-hidden bg-[#05070c] border border-white/[0.10] shadow-lg">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#05070c]">
                  <img
                    src={photoClassroom1}
                    alt="Authentic offline physics lecture hall with monumental derivation board"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#0b0f19]/90 border-t border-white/[0.06]">
                  <span className="text-xs font-medium text-slate-200 block">Monumental Derivation Board</span>
                  <span className="text-[10px] font-mono text-slate-400">Offline Physics Lecture Hall</span>
                </div>
              </div>

              {/* Photo 2: Optics Refraction Bench */}
              <div className="group relative rounded-2xl overflow-hidden bg-[#05070c] border border-white/[0.10] shadow-lg">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#05070c]">
                  <img
                    src={photoOptics1}
                    alt="Precision optical bench refraction and ray optics experiment"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#0b0f19]/90 border-t border-white/[0.06]">
                  <span className="text-xs font-medium text-slate-200 block">Ray Optics Bench</span>
                  <span className="text-[10px] font-mono text-slate-400">Geometric Refraction Apparatus</span>
                </div>
              </div>

              {/* Photo 3: Seminar Room */}
              <div className="group relative rounded-2xl overflow-hidden bg-[#05070c] border border-white/[0.10] shadow-lg">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#05070c]">
                  <img
                    src={photoClassroom2}
                    alt="Small cohort seminar classroom with interactive display focus"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#0b0f19]/90 border-t border-white/[0.06]">
                  <span className="text-xs font-medium text-slate-200 block">25-Seat Seminar Studio</span>
                  <span className="text-[10px] font-mono text-slate-400">Intimate High-Engagement Layout</span>
                </div>
              </div>

              {/* Photo 4: Laser Optical Lab */}
              <div className="group relative rounded-2xl overflow-hidden bg-[#05070c] border border-white/[0.10] shadow-lg">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#05070c]">
                  <img
                    src={photoOptics2}
                    alt="Focused laboratory derivation and laser optical system"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#0b0f19]/90 border-t border-white/[0.06]">
                  <span className="text-xs font-medium text-slate-200 block">Laser Optical System</span>
                  <span className="text-[10px] font-mono text-slate-400">Wave Optics & Diffraction Bench</span>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 4: PINNED COMPARISON TRACK */}
      <SectionWrapper id="comparison" variant="showcase" bleedDivider className="relative z-10">
        <GridContainer>
          {/* Sticky Left Column (Cols 1-4) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs w-fit">
              <IconShieldCheck size={14} />
              <span>PEDAGOGICAL CONTRAST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight text-balance">
              The Reality of Mega-Factories vs. The Vidya Dham Model.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Most commercial institutes maximize corporate margins by packing 100+ students into massive auditoriums. We do the exact opposite: small cohorts, master teachers, and guaranteed daily doubt clearance.
            </p>
          </div>

          {/* Right Comparison Matrix (Cols 5-12) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Commercial Mega-Factory */}
              <div className="p-6 rounded-2xl bg-[#0b0f19]/70 border border-rose-500/20 space-y-4 shadow-md">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block">Commercial Coaching</span>
                <h3 className="text-lg font-bold text-slate-200">The Factory Approach</h3>
                <ul className="space-y-3 text-xs text-slate-400 font-mono">
                  <li className="flex items-start gap-2">
                    <IconCloseCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>80-120 students per lecture hall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCloseCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Rotating junior surrogate tutors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCloseCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Anonymous ticketed doubt queues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCloseCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Passive one-way lecture streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCloseCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Parent communication hidden behind sales</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Vidya Dham Model */}
              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-amber-500/40 shadow-[0_0_24px_rgba(245,158,11,0.08)] space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">Vidya Dham Charter</span>
                <h3 className="text-lg font-bold text-white">The Academic Model</h3>
                <ul className="space-y-3 text-xs text-slate-200 font-mono">
                  <li className="flex items-start gap-2">
                    <IconCheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Strictly capped at 25 students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>100% founding master mentors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Daily 1-on-1 doubt desk resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Interactive smart board derivations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>Direct weekly faculty updates to parents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </GridContainer>
      </SectionWrapper>

      {/* STAGE 5: ADMISSIONS CONVERSION ANCHOR (State-Machine Form) */}
      <SectionWrapper id="admissions" variant="major" className="relative z-10">
        <GridContainer>
          <div className="col-span-4 sm:col-span-8 lg:col-span-10 lg:col-start-2 p-6 sm:p-10 rounded-3xl bg-[#0b0f19] border border-white/[0.12] shadow-2xl space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
                <IconCalendar size={13} />
                <span>ADMISSION SESSIONS 2026-27</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white text-balance">
                Sit in an Actual Saturday Class. Judge for Yourself.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero sales agents. Zero marketing pressure. Attend an authentic 45-minute offline concept session with your child before deciding.
              </p>
            </div>

            {/* Hardened Admissions Form Primitive */}
            <AdmissionsForm
              claimedSeats={19}
              totalSeats={25}
              onSuccess={(data) => {
                console.log('Classroom visit reserved:', data);
              }}
            />
          </div>
        </GridContainer>
      </SectionWrapper>
    </RootLayout>
  );
};

export default App;
