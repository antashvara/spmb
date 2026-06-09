
"use client";

import { useEffect } from "react";
import Link from "next/link";
import LandingFooter from "@/components/landing/footer";
import LandingNavbar from "@/components/landing/navbar";
import StatsBlock from "@/components/landing/stats-block";
import HeroStats from "@/components/landing/hero-stats";
import VisionMission from "@/components/landing/vision-mission";
import JurusanGrid from "@/components/landing/jurusan-grid";

const JURUSAN_LIST = [
  {
    kode: "PPLG",
    nama: "Pengembangan Perangkant Lunak & Gim",
    desc: "Belajar pengembangan aplikasi web, mobile, dan sistem perangkat lunak dengan stack industri terkini.",
    img: "/jurusan/pplg.jpg",
    delay: "",
  },
  {
    kode: "TKJ",
    nama: "Teknik Komputer & Jaringan",
    desc: "Kuasai infrastruktur jaringan, keamanan siber, dan administrasi sistem. Siap kerja di bidang IT support dan network engineering.",
    img: "/jurusan/tkj.jpg",
    delay: "reveal-delay-1",
  },
  {
    kode: "PM",
    nama: "Pemasaran",
    desc: "Kuasai strategi pemasaran digital, manajemen produk, dan teknik penjualan untuk dunia bisnis modern.",
    img: "/jurusan/pm.jpeg",
    delay: "reveal-delay-2",
  },
  {
    kode: "DKV",
    nama: "Desain Komunikasi Visual",
    desc: "Kembangkan skill desain grafis, video production, dan konten kreatif untuk media digital.",
    img: "/jurusan/dkv.jpg",
    delay: "reveal-delay-3",
  },
  {
    kode: "MPLB",
    nama: "Manajemen Perkantoran & Layanan Bisnis",
    desc: "Administrasi profesional, manajemen dokumen digital, dan layanan pelanggan standar industri.",
    img: "/jurusan/mplb.jpg",
    delay: "reveal-delay-1",
  },
  {
    kode: "PH",
    nama: "Perhotelan",
    desc: "Siap berkarier di industri hospitality dengan pelatihan layanan hotel, front office, dan pariwisata.",
    img: "/jurusan/phw.jpg",
    delay: "reveal-delay-2",
  },
];

export default function LandingPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
    links.forEach((a) => a.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      links.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <LandingNavbar activePage="beranda" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #FFFFFF;
          --bg-soft: #F5F2EC;
          --ink: #0C0C0C;
          --ink-2: #1A1A1A;
          --muted: #696969;
          --muted-light: #A8A8A8;
          --accent: #1C5C38;
          --accent-mid: #2A7A4E;
          --accent-light: #EBF4EE;
          --border: rgba(0,0,0,0.08);
          --border-dark: rgba(255,255,255,0.1);
          --radius-sm: 8px;
          --radius: 14px;
          --radius-lg: 22px;
          --radius-pill: 100px;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--bg);
          color: var(--ink);
          overflow-x: hidden;
        }

        h1, h2, h3, h4 {
          font-family: 'Bricolage Grotesque', sans-serif;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--ink); color: #fff;
          border: none; border-radius: var(--radius-pill);
          padding: 14px 28px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s ease; white-space: nowrap;
        }
        .btn-primary:hover { transform: translateY(-2px); background: #222; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--ink);
          border: 1.5px solid var(--ink); border-radius: var(--radius-pill);
          padding: 14px 28px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s ease; white-space: nowrap;
        }
        .btn-outline:hover { transform: translateY(-2px); background: var(--ink); color: #fff; }

        .btn-outline-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.4); border-radius: var(--radius-pill);
          padding: 14px 28px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-outline-white:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }
        .section-label::before {
          content: ''; width: 6px; height: 6px;
          border-radius: 50%; background: var(--accent); flex-shrink: 0;
        }

        
        @keyframes float-a { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-12px) rotate(-2deg)} }
        @keyframes float-b { 0%,100%{transform:translateY(0) rotate(1.5deg)} 50%{transform:translateY(-16px) rotate(1.5deg)} }
        @keyframes float-c { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-8px) rotate(-1deg)} }
        @keyframes float-d { 0%,100%{transform:translateY(0) rotate(2deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
        
        @keyframes fadeDown {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-8px); }
        }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }

        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        
        .hero {
  padding-top: calc(68px + 72px);
  padding-bottom: 100px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  align-items: start; /* bukan center */
}
        .hero-left { animation: fadeUp 0.9s ease forwards; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent-light); color: var(--accent);
          border-radius: var(--radius-pill); padding: 8px 16px;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 28px;
        }
        .hero-badge::before {
          content: ''; width: 7px; height: 7px;
          background: var(--accent); border-radius: 50%;
          animation: pulse 2s infinite;
        }
        .hero h1 {
          font-size: clamp(1.9rem, 3.2vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 20px;
          max-width: 620px;
        }
        .hero p {
          font-size: 1.05rem; color: var(--muted);
          line-height: 1.7; margin-bottom: 40px;
          max-width: 440px; font-weight: 400;
        }
        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

       
        .hero-right{
          display:flex;
          justify-content:flex-start;
          align-items:flex-start;

          position:relative;
        }

          .hero-main-image{
            width:100%;
            max-width:520px;
            height:500px;
            border-radius:28px;
            overflow:hidden;
          }

          .hero-main-image video{
            width:100%;
            height:100%;
            object-fit:cover;
            pointer-events:none;
          }
       
        .challenges { background: var(--bg-soft); padding: 120px 0; }
        .challenges-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .challenges h2 { font-size: clamp(2rem,3.5vw,3rem); font-weight: 800; margin-bottom: 16px; }
        .challenges-desc { color: var(--muted); line-height: 1.7; margin-bottom: 40px; font-size: 0.97rem; }
        .challenge-card {
          background: white; border: 1px solid var(--border);
          border-radius: var(--radius); padding: 22px 24px;
          margin-bottom: 14px; display: flex; align-items: flex-start; gap: 16px;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .challenge-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.07); transform: translateY(-2px); }
        .challenge-icon {
          width: 44px; height: 44px; border-radius: var(--radius-sm);
          background: var(--accent-light);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .challenge-icon svg { width: 22px; height: 22px; color: var(--accent); }
        .challenge-title { font-family:'Bricolage Grotesque',sans-serif; font-weight:700; font-size:1rem; margin-bottom:4px; letter-spacing:-0.01em; }
        .challenge-text { font-size:0.85rem; color:var(--muted); line-height:1.55; }
        .challenges-right { position: relative; }
        .challenges-img { width:100%;height:500px;object-fit:cover;border-radius:20px;display:block; }
        .stat-float {
          position: absolute; bottom: 30px; left: -24px;
          background: white; border-radius: var(--radius);
          padding: 18px 22px; box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .stat-float .big { font-family:'Bricolage Grotesque',sans-serif;font-size:2rem;font-weight:800;color:var(--ink); }
        .stat-float .lbl { font-size:0.8rem;color:var(--muted);margin-top:2px; }

        
        .jurusan { padding: 120px 0; }
        .jurusan-header { margin-bottom: 60px; }
        .jurusan h2 { font-size: clamp(2rem,3.5vw,3rem); font-weight: 800; }
        .jurusan-item {
          display: grid; grid-template-columns: 280px 1fr;
          gap: 36px; align-items: center;
          padding: 28px 0; border-bottom: 1px solid var(--border);
          transition: background 0.25s ease; cursor: pointer; border-radius: var(--radius-sm);
        }
        .jurusan-item:first-child { border-top: 1px solid var(--border); }
        .jurusan-item:hover { background:var(--bg-soft);padding-left:16px;padding-right:16px;margin:0 -16px; }
        .jurusan-img-wrap { position: relative; flex-shrink: 0; }
        .jurusan-img { width:100%;height:170px;object-fit:cover;border-radius:var(--radius);display:block; }
        .jurusan-badge {
          position: absolute; top: 12px; left: 12px;
          background: var(--ink); color: white;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 5px 12px; border-radius: var(--radius-pill);
        }
        .jurusan-name { font-family:'Bricolage Grotesque',sans-serif;font-size:1.4rem;font-weight:700;letter-spacing:-0.02em;margin-bottom:8px; }
        .jurusan-desc { font-size:0.9rem;color:var(--muted);line-height:1.6;max-width:500px; }
        .jurusan-arrow { margin-top:16px;display:inline-flex;align-items:center;gap:6px;font-size:0.82rem;font-weight:600;color:var(--accent);text-decoration:none; }
        .jurusan-arrow:hover { text-decoration:underline; }

        
        .alur { padding: 120px 0; background: var(--bg); }
        .alur-top { display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:80px;gap:40px; }
        .alur-top-left { flex: 1; }
        .alur h2 { font-size:clamp(2rem,3.5vw,3rem);font-weight:800; }
        .alur-step {
          display: grid; grid-template-columns: 80px 1px 1fr;
          gap: 0 32px; align-items: start;
          padding: 36px 0; border-bottom: 1px solid var(--border);
        }
        .alur-step:first-child { border-top: 1px solid var(--border); }
        .step-num { font-family:'Bricolage Grotesque',sans-serif;font-size:3rem;font-weight:800;color:rgba(0,0,0,0.06);line-height:1;padding-top:4px; }
        .step-divider { background:var(--border);width:1px;align-self:stretch;margin:4px 0; }
        .step-content { padding-top: 4px; }
        .step-title { font-family:'Bricolage Grotesque',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:10px;letter-spacing:-0.01em; }
        .step-desc { font-size:0.9rem;color:var(--muted);line-height:1.65;max-width:480px; }

        
        .stats { background: var(--ink-2,#1A1A1A); padding: 120px 0; }
        .stats-label { color: rgba(255,255,255,0.5); }
        .stats-label::before { background: var(--accent); }
        .stats-layout {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: start;
        }
        .stats-heading {
          font-size: clamp(2rem,3.5vw,3rem);
          color: white; font-weight: 800;
          margin-bottom: 32px; max-width: 500px;
        }
        .stats-carousel { margin-top: 8px; }
        .stats-carousel-frame {
          position: relative; width: 100%;
          aspect-ratio: 16 / 9; border-radius: 12px;
          overflow: hidden; margin-bottom: 16px;
        }
        .stats-carousel-img {
          width: 100%; height: 100%; object-fit: cover;
          border-radius: 12px;
          animation: statsImgFade 0.3s ease;
        }
        @keyframes statsImgFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .stats-carousel-nav { display: flex; gap: 12px; }
        .stats-carousel-btn {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%; background: transparent;
          color: white; font-size: 1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .stats-carousel-btn:hover {
          border-color: white;
          background: rgba(255,255,255,0.1);
        }
        .stats-cards-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: var(--border-dark);
        }
        .stat-card {
          padding: 40px; background: var(--ink-2,#1A1A1A);
          border: 1px solid transparent;
          text-align: left; position: relative;
          transition: all 0.2s ease;
        }
        .stat-card-clickable {
          cursor: pointer;
        }
        .stat-card-clickable:hover {
          border-color: rgba(28,92,56,0.5);
          transform: translateY(-2px);
        }
        .stat-card-static { cursor: default; }
        .stat-card-icon {
          position: absolute; top: 16px; right: 16px;
          font-size: 0.75rem; color: rgba(255,255,255,0.35);
        }
        .stat-num { font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(2.8rem,5vw,4rem);font-weight:800;color:white;line-height:1;margin-bottom:12px; }
        .stat-num span { color: var(--accent); }
        .stat-lbl { font-size:0.85rem;color:rgba(255,255,255,0.45);font-weight:500;text-transform:uppercase;letter-spacing:0.06em; }
        .stat-sublbl {
          font-size: 0.72rem; color: rgba(255,255,255,0.3);
          margin-top: 6px; text-transform: none; letter-spacing: 0;
          font-weight: 400;
        }
        .stats-modal-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
        }
        .stats-modal-card {
          position: fixed; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 32px;
          max-width: 480px; width: calc(100% - 40px);
          animation: fadeUp 0.3s ease;
        }
        .stats-modal-close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none;
          color: rgba(255,255,255,0.5);
          font-size: 1.5rem; line-height: 1;
          cursor: pointer; padding: 4px;
          transition: color 0.2s ease;
        }
        .stats-modal-close:hover { color: white; }
        .stats-modal-text {
          color: rgba(255,255,255,0.75);
          font-size: 0.92rem; line-height: 1.7;
          padding-right: 24px;
        }
        .stats-modal-table {
          width: 100%; border-collapse: collapse;
          margin-bottom: 16px;
        }
        .stats-modal-table td {
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
        }
        .stats-modal-table td:last-child {
          text-align: right; color: var(--accent); font-weight: 600;
        }
        .stats-modal-note {
          font-size: 0.78rem; color: rgba(255,255,255,0.4);
        }
        .stats-modal-mitra-grid {
          list-style: none;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px 20px;
          padding-right: 24px;
        }
        .stats-modal-mitra-grid li {
          font-size: 0.88rem; color: rgba(255,255,255,0.8);
        }

        


        
        .cta-section { padding: 80px 0; background: var(--bg-soft); }
        .cta-inner {
          background: var(--ink-2,#1A1A1A); border-radius: 32px; padding: 80px;
          display: grid; grid-template-columns: 1fr auto;
          gap: 60px; align-items: center; position: relative; overflow: hidden;
        }
        .cta-inner::before {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(28,92,56,0.3) 0%, transparent 70%);
          border-radius: 50%;
        }
        .cta-label { color: rgba(255,255,255,0.5); }
        .cta-label::before { background: var(--accent); }
        .cta-inner h2 { font-size:clamp(2.2rem,4vw,3.5rem);color:white;font-weight:800;margin-bottom:16px; }
        .cta-inner p { color:rgba(255,255,255,0.6);line-height:1.65;max-width:440px;margin-bottom:36px; }
        .cta-buttons { display:flex;gap:14px;flex-wrap:wrap; }
        .btn-white {
          display:inline-flex;align-items:center;gap:8px;
          background:white;color:var(--ink);border:none;border-radius:var(--radius-pill);
          padding:14px 28px;font-family:'Plus Jakarta Sans',sans-serif;
          font-weight:700;font-size:0.9rem;cursor:pointer;text-decoration:none;
          transition:all 0.25s ease;
        }
        .btn-white:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,255,255,0.2); }
        .btn-cta-primary {
          display:inline-flex;align-items:center;gap:8px;
          background:#1C5C38;color:#fff;border:none;border-radius:var(--radius-pill);
          padding:14px 28px;font-family:'Plus Jakarta Sans',sans-serif;
          font-weight:700;font-size:0.9rem;cursor:pointer;text-decoration:none;
          transition:all 0.25s ease;
        }
        .btn-cta-primary:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(28,92,56,0.35); }
        .btn-cta-outline {
          display:inline-flex;align-items:center;gap:8px;
          background:transparent;color:#fff;
          border:1.5px solid #1C5C38;border-radius:var(--radius-pill);
          padding:14px 28px;font-family:'Plus Jakarta Sans',sans-serif;
          font-weight:600;font-size:0.9rem;cursor:pointer;text-decoration:none;
          transition:all 0.25s ease;
        }
        .btn-cta-outline:hover { transform:translateY(-2px);background:rgba(28,92,56,0.15); }
        .cta-deco { position:relative;width:260px;height:280px;flex-shrink:0; }
        .cta-deco img { width:240px;height:260px;object-fit:cover;border-radius:20px;border:3px solid rgba(255,255,255,0.1); }
        .cta-deco-badge {
          position:absolute;bottom:-10px;left:-20px;
          background:var(--accent);color:white;border-radius:var(--radius);
          padding:14px 18px;font-size:0.85rem;font-weight:700;
        }

        
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding: calc(68px + 52px) 0 60px; }
          .hero-right { height: 340px; }
          .hero-photo-1 { width:160px;height:200px; }
          .hero-photo-2 { width:130px;height:160px;left:180px; }
          .hero-photo-3 { width:150px;height:190px; }
          .hero-photo-4 { width:180px;height:150px;bottom:20px; }
          .hero-photo-5 { width:140px;height:170px; }
          .challenges-inner { grid-template-columns: 1fr; }
          .jurusan-item { grid-template-columns: 1fr; }
          .jurusan-img { height: 220px; }
          .alur-top { flex-direction: column; align-items: flex-start; }
          .stats-layout { grid-template-columns: 1fr; gap: 48px; }
          .stats-cards-grid { grid-template-columns: repeat(2,1fr); }
          .cta-inner { grid-template-columns: 1fr; padding: 48px; }
          .cta-deco { display: none; }
        }

        @media (max-width: 600px) {
          .stats-cards-grid { grid-template-columns: 1fr 1fr; }
          .alur-step { grid-template-columns: 60px 1px 1fr; gap: 0 20px; }
          .step-num { font-size: 2rem; }
          .hero-ctas { flex-direction: column; }
        }

        .hero-stats{
          margin-top:-70px;
          position:relative;
          z-index:5;
          padding-bottom:90px;
        }

        .hero-stats-container{
          max-width:1200px;
          margin:auto;

          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:24px;

          padding:0 5vw;
        }

        .hero-stat-card{
          background:rgba(255,255,255,.72);

          backdrop-filter:blur(18px);

          border:1px solid rgba(255,255,255,.5);

          border-radius:28px;

          padding:34px;

          box-shadow:
          0 10px 40px rgba(0,0,0,.08);

          transition:.35s;
        }

        .hero-stat-card:hover{

          transform:
            translateY(-8px)
            scale(1.02);

          box-shadow:
            0 25px 60px rgba(0,0,0,.12);
        }

        .hero-stat-card h2{

          font-size:3rem;

          font-weight:800;

          color:#1C5C38;

          margin-bottom:8px;

          font-family:'Bricolage Grotesque';
        }

        .hero-stat-card p{

          color:#666;

          font-size:.95rem;

          font-weight:500;
        }

        @media(max-width:900px){

          .hero-stats{

            margin-top:30px;
          }

          .hero-stats-container{

            grid-template-columns:repeat(2,1fr);
          }

        }

        @media(max-width:600px){

          .hero-stats-container{

            grid-template-columns:1fr;
          }

        }

        .vision-section{

  padding:120px 0;

  background:#F5F7F4;
}

.vision-header{

  text-align:center;

  max-width:760px;

  margin:auto auto 70px;
}

.vision-header h2{

  font-size:clamp(2.2rem,4vw,3.4rem);

  margin-bottom:20px;

  font-weight:800;
}

.vision-header p{

  color:#666;

  line-height:1.8;
}

.vision-grid{

  display:grid;

  grid-template-columns:2fr 1fr;

  gap:22px;
}

.vision-image-card{

  position:relative;

  overflow:hidden;

  border-radius:26px;

  min-height:360px;
}

.vision-image-card img{

  width:100%;

  height:100%;

  object-fit:cover;

  transition:.5s;
}

.vision-image-card:hover img{

  transform:scale(1.06);
}

.vision-overlay{

  position:absolute;

  left:0;

  right:0;

  bottom:0;

  padding:34px;

  background:

  linear-gradient(

  transparent,

  rgba(0,0,0,.72)

  );

}

.vision-overlay h3{

  color:white;

  margin-bottom:12px;
}

.vision-overlay p{

  color:rgba(255,255,255,.82);

  line-height:1.7;
}

.vision-green-card,

.vision-dark-card,

.vision-white-card{

  border-radius:26px;

  padding:34px;

  transition:.35s;

  position:relative;

  overflow:hidden;
}

.vision-green-card{

  background:

  linear-gradient(

  135deg,

  #1C5C38,

  #28B56F

  );

  color:white;
}

.vision-dark-card{

  background:#0B6C60;

  color:white;
}

.vision-white-card{

  background:white;

  border:1px solid rgba(0,0,0,.06);
}

.vision-green-card:hover,

.vision-dark-card:hover,

.vision-white-card:hover{

  transform:translateY(-8px);

  box-shadow:

  0 18px 40px rgba(0,0,0,.12);
}

.vision-icon{

  width:58px;

  height:58px;

  border-radius:18px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:rgba(255,255,255,.15);

  font-size:1.5rem;

  margin-bottom:20px;
}

.vision-grid > :nth-child(4){

  grid-column:span 1;

  min-height:170px;

  display:flex;

  flex-direction:column;

  justify-content:center;
}

@media(max-width:900px){

  .vision-grid{

    grid-template-columns:1fr;
  }

}

    .jurusan-modern{

padding:120px 0;

background:#EEF3EE;

}

.jurusan-modern-header{

margin-bottom:50px;

}

.jurusan-modern-header h2{

font-size:clamp(2rem,4vw,3rem);

margin:12px 0;

}

.jurusan-modern-header p{

color:#666;

max-width:600px;

line-height:1.8;

}

.jurusan-modern-grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(310px,1fr));

gap:28px;

}

.jurusan-modern-card{

position:relative;

height:440px;

overflow:hidden;

border-radius:26px;

text-decoration:none;

transition:.35s;

box-shadow:

0 20px 50px rgba(0,0,0,.08);

}

.jurusan-modern-card:hover{

transform:translateY(-10px);

}

.jurusan-bg{

position:absolute;

width:100%;

height:100%;

object-fit:cover;

transition:.45s;

}

.jurusan-modern-card:hover .jurusan-bg{

transform:scale(1.08);

}

.jurusan-overlay{

position:absolute;

inset:0;

background:

linear-gradient(

180deg,

rgba(0,0,0,.05),

rgba(0,0,0,.75)

);

}

.jurusan-logo{
  position:absolute;
  top:18px;
  left:18px;

  width:54px;
  height:54px;

  object-fit:contain;

  background:transparent; /* ubah */
  padding:0;              /* hapus padding */
  border-radius:0;        /* atau 8px kalau mau */
  box-shadow:none;        /* hapus shadow putih */
  z-index:2;
}

.jurusan-badge-modern{

position:absolute;

right:18px;

top:20px;

padding:8px 14px;

border-radius:30px;

background:

rgba(44,177,116,.2);

backdrop-filter:blur(10px);

color:white;

font-size:.72rem;

font-weight:700;

letter-spacing:.08em;

z-index:2;

}

.jurusan-content{

position:absolute;

left:28px;

right:28px;

bottom:28px;

z-index:2;

color:white;

}

.jurusan-content h3{

font-size:2rem;

margin-bottom:6px;

}

.jurusan-content h4{

font-size:1.1rem;

margin-bottom:10px;

font-weight:700;

}

.jurusan-content p{

font-size:.88rem;

line-height:1.7;

opacity:.9;

margin-bottom:20px;

}

.jurusan-content button{
  width:100%;
  border:none;
  padding:14px;
  border-radius:14px;

  background:#ffffff;
  color:#111111;   /* TAMBAHKAN INI */

  font-weight:700;
  cursor:pointer;
  transition:.3s;
}

.jurusan-content button:hover{

background:#1C5C38;

color:white;

}

@media(max-width:768px){

    .jurusan-modern{
    padding:80px 0;
    }

    .jurusan-modern-card{
    height:390px;
    }
}

.jurusan-content button{
  width:100%;
  border:none;
  padding:14px;

  border-radius:14px;

  background:#ffffff;

  color:#111111;      /* tambahkan ini */

  font-weight:700;

  cursor:pointer;

  transition:.3s;
}

.jurusan-content button:hover{
  background:#1C5C38;
  color:#ffffff;
}

.jurusan-btn{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
}

.jurusan-btn span{
  transition:.3s;
}

.jurusan-btn:hover span{
  transform:translateX(4px);
}

}



      `}</style>


      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hero">
            <div className="hero-left">
              <div className="hero-badge">Penerimaan Murid Baru 2026/2027</div>
              <h1>Pilihan Yang Tepat Di Sekolah Yang M.A.N.T.A.P</h1>
              <p>
                Membangun masa depan cerah melalui pendidikan berbasis
                teknologi dan karakter. Bergabunglah dengan komunitas
                pembelajar yang inovatif dan siap kerja.
              </p>
              <div className="hero-ctas">
                <Link href="/register" className="btn-primary">Daftar Sekarang →</Link>
                <a href="#alur" className="btn-outline">Lihat Alur</a>
              </div>
            </div>

          <div className="hero-right">
            <div className="hero-main-image">
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                <source src="/images/bg-video.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
        </div>
      </section>

      <HeroStats />

      <VisionMission />

      <JurusanGrid /> 

      <section className="challenges">
        <div className="container">
          <div className="challenges-inner">
            <div className="reveal">
              <div className="section-label">Tantangan Nyata</div>
              <h2>Masalah yang Sering Dihadapi Calon Siswa</h2>
              <p className="challenges-desc">
                Kami paham proses masuk sekolah bisa terasa membingungkan.
                SMK Citra Negara hadir sebagai solusi lengkap untuk kamu.
              </p>

              <div className="challenge-card reveal reveal-delay-1">
                <div className="challenge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <div className="challenge-title">Bingung pilih jurusan?</div>
                  <div className="challenge-text">
                    Kami punya 3 jurusan unggulan dengan jalur karier yang jelas.
                    Konsultasi gratis tersedia untuk bantu kamu memilih.
                  </div>
                </div>
              </div>

              <div className="challenge-card reveal reveal-delay-2">
                <div className="challenge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <div className="challenge-title">Khawatir soal biaya?</div>
                  <div className="challenge-text">
                    Tersedia beasiswa prestasi dan program KIP-SMK untuk semua
                    siswa yang memenuhi syarat.
                  </div>
                </div>
              </div>

              <div className="challenge-card reveal reveal-delay-3">
                <div className="challenge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div>
                  <div className="challenge-title">Proses daftar yang rumit?</div>
                  <div className="challenge-text">
                    Pendaftaran online 4 langkah simpel, dokumen digital, dan
                    pantau status real-time dari HP kamu.
                  </div>
                </div>
              </div>
            </div>

            <div className="challenges-right reveal">
              
              <img className="challenges-img"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&h=800&fit=crop&q=80"
                alt="Siswa belajar" />
              <div className="stat-float">
                <div className="big">98%</div>
                <div className="lbl">Tingkat Keterserapan Kerja</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="jurusan" id="jurusan">
        <div className="container">
          <div className="jurusan-header reveal">
            <div className="section-label">Program Studi</div>
            <h2>6 Jurusan Unggulan<br />untuk Masa Depanmu</h2>
          </div>

          <div>
            {JURUSAN_LIST.map((j) => (
              <div className={`jurusan-item reveal ${j.delay}`} key={j.kode}>
                <div className="jurusan-img-wrap">
                  
                  <img className="jurusan-img" src={j.img} alt={j.nama} />
                  <div className="jurusan-badge">{j.kode}</div>
                </div>
                <div className="jurusan-info">
                  <div className="jurusan-name">{j.nama}</div>
                  <div className="jurusan-desc">{j.desc}</div>
                  <Link href={`/jurusan/${j.kode}`} className="jurusan-arrow">
                    Selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="alur" id="alur">
        <div className="container">
          <div className="alur-top">
            <div className="alur-top-left reveal">
              <div className="section-label">Cara Daftar</div>
              <h2>Alur Pendaftaran<br />yang Simpel & Cepat</h2>
            </div>
            <div className="reveal">
              <Link href="/register" className="btn-primary">Mulai Daftar →</Link>
            </div>
          </div>

          <div>
            {[
              {
                num: "01",
                title: "Registrasi Online",
                desc: "Buat akun di portal kami dengan mudah tanpa biaya administrasi",
                delay: "",
              },
              {
                num: "02",
                title: "Tes Bakat & Minat",
                desc: "Ikuti asesmen kognitif dan praktis untuk menentukan jurusan terbaik",
                delay: "reveal-delay-1",
              },
              {
                num: "03",
                title: "Wawancara Industri",
                desc: "Sesi wawancara bersama praktisi industri untuk mengevaluasi motivasi",
                delay: "reveal-delay-2",
              },
              {
                num: "04",
                title: "Pengumuman & Daftar Ulang",
                desc: "Calon siswa diterima akan mendapatkan notifikasi resmi",
                delay: "reveal-delay-3",
              },
            ].map((s) => (
              <div className={`alur-step reveal ${s.delay}`} key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-divider" />
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="stats" id="tentang">
        <div className="container">
          <StatsBlock />
        </div>
      </section>
      
      <section className="cta-section" id="kontak">
        <div className="container">
          <div className="cta-inner">
            <div className="reveal">
              <div className="section-label cta-label">Siap Mulai?</div>
              <h2>Siap Jadi Bagian Dari Masa Depan Digital?</h2>
              <p>
                Jangan tunda lagi. Kuota terbatas setiap tahunnya. Daftar sekarang
                dan jadilah bagian dari generasi digital yang siap kerja.
              </p>
              <div className="cta-buttons">
                <Link href="/register" className="btn-cta-primary">Daftar Sekarang Juga</Link>
                <a
                  href="https://wa.me/622177201052"
                  className="btn-cta-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Tim Admission
                </a>
              </div>
            </div>
            <div className="cta-deco reveal">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=520&h=520&fit=crop&q=80"
                alt="Siswa SMK Citra Negara"
              />
              <div className="cta-deco-badge">✓ Pendaftaran Dibuka</div>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />

    </>
  );
}