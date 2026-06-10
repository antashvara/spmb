import Link from "next/link";
import {
  Globe,
  Share2,
  PlayCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function LandingFooter() {
  return (
    <>
      <style>{`
        .landing-footer{
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(circle at top left,
      rgba(30,180,110,.15),
      transparent 35%),

    radial-gradient(circle at bottom right,
      rgba(0,120,255,.08),
      transparent 35%),

    linear-gradient(
      180deg,
      #102017,
      #08110d
    );

  padding:90px 80px 32px;
  color:#fff;
  font-family:'Plus Jakarta Sans',sans-serif;
}

.landing-footer::before{

content:"";

position:absolute;

width:340px;

height:340px;

border-radius:50%;

background:#20b26b;

filter:blur(180px);

opacity:.12;

left:-120px;

top:-120px;

pointer-events:none;

}

.landing-footer::after{

content:"";

position:absolute;

width:280px;

height:280px;

border-radius:50%;

background:#2ec5ff;

filter:blur(180px);

opacity:.08;

right:-100px;

bottom:-120px;

pointer-events:none;

}

        .landing-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

.landing-footer-grid{

display:grid;

grid-template-columns:

1.8fr 1fr 1fr 1.2fr;

gap:60px;

padding-bottom:50px;

border-bottom:

1px solid rgba(255,255,255,.08);

position:relative;

z-index:2;

}

        .landing-footer-logo{

font-family:'Bricolage Grotesque',sans-serif;

font-size:2rem;

font-weight:800;

letter-spacing:-.03em;

margin-bottom:18px;

}

.landing-footer-logo span{

color:#2cc874;

}

       .landing-footer-tagline{

font-size:15px;

line-height:1.8;

color:rgba(255,255,255,.62);

max-width:360px;

margin-bottom:26px;

}

        .landing-footer-email {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          margin-bottom: 20px;
          transition: color 0.2s;
        }

        .landing-footer-email:hover {
          color: #fff;
        }

.landing-footer-social{

display:flex;

gap:12px;

}

.landing-footer-social a{

width:44px;

height:44px;

display:flex;

align-items:center;

justify-content:center;

border-radius:50%;

background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.08);

transition:.35s;

}

.landing-footer-social a:hover{

transform:translateY(-4px);

background:#20b26b;

box-shadow:

0 10px 30px rgba(32,178,107,.35);

color:white;

}

.landing-footer-col-title{

font-size:.8rem;

font-weight:700;

letter-spacing:.18em;

color:#7adba8;

margin-bottom:22px;

text-transform:uppercase;

}

        .landing-footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

.landing-footer-links a{

display:inline-block;

color:rgba(255,255,255,.55);

transition:.3s;

text-decoration:none;

}

.landing-footer-links a:hover{

color:#fff;

transform:translateX(6px);

}

        .landing-footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
        }

        .landing-footer-contact svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: rgba(255, 255, 255, 0.4);
        }

        .landing-footer-contact a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        .landing-footer-contact a:hover {
          color: #fff;
        }

.landing-footer-bottom{

padding-top:26px;

display:flex;

justify-content:space-between;

align-items:center;

flex-wrap:wrap;

position:relative;

z-index:2;

}

        .landing-footer-copy {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.25);
        }

        .landing-footer-copy a {
          color: rgba(255, 255, 255, 0.25);
          text-decoration: none;
          transition: color 0.2s;
        }

        .landing-footer-copy a:hover {
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .landing-footer {
            padding: 48px 40px 28px;
          }
          .landing-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

       @media(max-width:900px){

.landing-footer{

padding:70px 28px 30px;

}

.landing-footer-grid{

grid-template-columns:1fr;

gap:42px;

}

.landing-footer-bottom{

flex-direction:column;

align-items:flex-start;

gap:10px;

}

}
      `}</style>

      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-grid">
            <div>
              <div className="landing-footer-logo">
                SMK <span>Citra Negara</span>
              </div>
              <p className="landing-footer-tagline">
                Pilihan Yang Tepat Di Sekolah Yang M.A.N.T.A.P
              </p>
              <a
                href="mailto:info@citranegara.sch.id"
                className="landing-footer-email"
              >
                <Mail size={16} />
                info@citranegara.sch.id
              </a>
              <div className="landing-footer-social">
                <a href="https://smk.citranegara.sch.id" aria-label="Website">
                  <Globe size={20} />
                </a>
                <a href="https://www.instagram.com/smkcitranegaradepok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
                  <Share2 size={20} />
                </a>
                <a href="https://youtube.com/@citranegaratv9070?si=KyjkZga3Y6eTpZs6" aria-label="YouTube">
                  <PlayCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <div className="landing-footer-col-title">Explore</div>
              <ul className="landing-footer-links">
                <li>
                  <Link href="/#jurusan">Jurusan</Link>
                </li>
                <li>
                  <Link href="/register">Daftar</Link>
                </li>
                <li>
                  <a href="#">Prestasi</a>
                </li>
                <li>
                  <a href="#">Berita</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="landing-footer-col-title">Resources</div>
              <ul className="landing-footer-links">
                <li>
                  <a href="#">Daftar Guru</a>
                </li>
                <li>
                  <a href="#">Jadwal</a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
                <li>
                  <a href="#">Foto</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="landing-footer-col-title">Kontak</div>
              <ul className="landing-footer-links landing-footer-contact">
                <li>
                  <Mail size={16} />
                  <a href="mailto:info@citranegara.sch.id">
                    info@citranegara.sch.id
                  </a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:(021) 77201052">(021) 77201052</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>
                    Jl. Raya Tanah Baru No.99 Beji, Depok 16421
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="landing-footer-bottom">
            <div className="landing-footer-copy">
              © 2026 SMK Citra Negara. All rights reserved
            </div>
            <div className="landing-footer-copy">
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
