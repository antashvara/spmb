
"use client";

import { useEffect } from "react";
import Link from "next/link";
import LandingFooter from "@/components/landing/footer";
import LandingNavbar from "@/components/landing/navbar";
import HeroStats from "@/components/landing/hero-stats";
import VisionMission from "@/components/landing/vision-mission";
import JurusanGrid from "@/components/landing/jurusan-grid";
import RegistrationTimeline from "@/components/landing/registrationtimeline";


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
          .stats-layout { grid-template-columns: 1fr; gap: 48px; }
          .stats-cards-grid { grid-template-columns: repeat(2,1fr); }
        }

        @media (max-width: 600px) {
          .stats-cards-grid { grid-template-columns: 1fr 1fr; }
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

.timeline-section{
  padding:120px 0;
  background:#f6faf7;
  overflow:hidden;
}

.timeline-header{
  text-align:center;
  max-width:700px;
  margin:auto auto 80px;
}

.timeline-header h2{
  font-size:clamp(2rem,4vw,3rem);
  margin:12px 0;
  color:#10241b;
}

.timeline-header p{
  color:#667085;
  line-height:1.8;
}

.timeline-wrapper{
  position:relative;

  display:grid;
  grid-template-columns:repeat(4,1fr);

  gap:28px;
}

.timeline-line{

  position:absolute;

  top:38px;

  left:12%;

  right:12%;

  height:4px;

  background:linear-gradient(
    90deg,
    #20b26b,
    #74d89d
  );

  border-radius:50px;

  z-index:0;

}

.timeline-item{

  position:relative;

  z-index:2;

  text-align:center;

}

.timeline-circle{

  width:76px;

  height:76px;

  margin:auto;

  border-radius:22px;

  background:linear-gradient(
    135deg,
    #15b86b,
    #42d392
  );

  display:flex;

  align-items:center;

  justify-content:center;

  color:white;

  box-shadow:

  0 20px 40px rgba(32,178,107,.25);

  transition:.35s;

}

.timeline-item:hover .timeline-circle{

  transform:

  translateY(-8px)

  rotate(-6deg)

  scale(1.06);

}

.timeline-number{

  display:block;

  margin-top:18px;

  color:#1ea86a;

  font-weight:800;

  letter-spacing:.15em;

  font-size:.82rem;

}

.timeline-item h3{

  margin-top:10px;

  font-size:1.35rem;

  color:#14261d;

}

.timeline-item p{

  margin-top:10px;

  color:#667085;

  line-height:1.8;

  font-size:.94rem;

  max-width:230px;

  margin-left:auto;

  margin-right:auto;

}

@media(max-width:992px){

.timeline-wrapper{

grid-template-columns:1fr;

gap:60px;

}

.timeline-line{

display:none;

}

.timeline-item{

text-align:left;

padding-left:100px;

}

.timeline-circle{

position:absolute;

left:0;

top:0;

margin:0;

}

.timeline-number{

margin-top:0;

}

.timeline-item p{

margin-left:0;

margin-right:0;

max-width:none;

}

}





      `}</style>


      <section id="hero" style={{ paddingTop: 0 }}>
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
      <RegistrationTimeline />
      <LandingFooter />

    </>
  );
}