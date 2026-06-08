"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavUser {
  name: string;
  role: string;
}

interface LandingNavbarProps {
  activePage?: "beranda" | "pendaftaran" | "hasil-seleksi" | "berita";
}

export default function LandingNavbar({ activePage }: LandingNavbarProps) {
  const [navUser, setNavUser] = useState<NavUser | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownClosing, setDropdownClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function closeDropdown() {
    setDropdownClosing(true);
    setTimeout(() => {
      setDropdownOpen(false);
      setDropdownClosing(false);
    }, 180);
  }

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data?.user) setNavUser(data.user); })
      .catch(() => {});
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <style>{`
        .ln-nav{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;

          background: rgba(255,255,255,.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          border-bottom: 1px solid rgba(0,0,0,.05);
        }
        .ln-nav.scrolled {
          background: rgba(240,248,244,0.92);
          border-bottom: 1px solid rgba(196,224,209,0.6);
        }
        .ln-nav-inner{
          max-width: 1280px;
          margin: 0 auto;

          padding: 14px 32px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 24px;
        }
        .ln-logo{
          display: flex;
          align-items: center;
          gap: 14px;

          text-decoration: none;

          font-size: 1.9rem;
          font-weight: 800;

          color: #089043;
        }
        .ln-logo span{
            color: #089043;
          }
        .ln-logo-img{
          width: 64px;
          height: 64px;
          object-fit: contain;
        }
        .ln-links{
          display: flex;
          align-items: center;
          gap: 14px;

          list-style: none;

          margin: 0 auto;
          padding: 0;
        }
        .ln-links a{
          text-decoration: none;

          color: #374151;

          font-size: .95rem;
          font-weight: 600;

          background: #F4F4F4;

          padding: 14px 24px;

          border-radius: 18px;

          transition: all .25s ease;
        }
        .ln-links a:hover{
          background: #FFFFFF;

          color: #089043;

          transform: translateY(-2px);

          box-shadow:
            0 8px 24px rgba(0,0,0,.08);
        }
        .ln-links a.active{
          background: #FFFFFF;

          color: #089043;

          box-shadow:
            0 8px 24px rgba(0,0,0,.08);
        }
        .ln-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0C0C0C; color: #fff;
          border: none; border-radius: 9999px;
          padding: 12px 22px; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s ease; flex-shrink: 0;
        }
        .ln-cta:hover { transform: translateY(-1px); background: #222; }
        .ln-avatar{
          width: 46px;
          height: 46px;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            #0A8F44,
            #12C769
          );

          color: white;

          border: none;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 8px 24px rgba(10,143,68,.25);

          transition: .25s;
        }
          .ln-avatar:hover{
          transform: translateY(-2px);
        }
        .ln-dropdown{
          position: absolute;

          right: 0;
          top: calc(100% + 10px);

          background: rgba(255,255,255,.95);

          backdrop-filter: blur(18px);

          border-radius: 18px;

          border: 1px solid rgba(0,0,0,.06);

          box-shadow:
            0 16px 40px rgba(0,0,0,.12);

          min-width: 240px;

          overflow: hidden;

          z-index: 50;
        }
        .ln-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px; font-size: 13px; color: #374151;
          text-decoration: none; cursor: pointer;
          background: none; border: none; width: 100%; text-align: left;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background 0.15s;
        }
        .ln-dropdown-item:hover { background: #F9FAFB; }
        .ln-dropdown-item.danger { color: #DC2626; }
        .ln-dropdown-item.danger:hover { background: #FEF2F2; }
        @keyframes ln-fadeUp {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ln-fadeDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-8px); }
        }
          @media (max-width: 992px){
        .ln-links{
          gap: 8px;
        }

        .ln-links a{
          padding: 12px 18px;
          font-size: .85rem;
        }

        .ln-logo{
          font-size: 1.4rem;
        }

        .ln-logo-img{
          width: 52px;
          height: 52px;
        }
      }
      `}</style>

      <nav className={`ln-nav${scrolled ? " scrolled" : ""}`}>
        <div className="ln-nav-inner">
          <Link href="/" className="ln-logo">
            {}
            <img src="/images/logo-cn.png" alt="Logo SMK Citra Negara" className="ln-logo-img"/>
            SMK<span>Citra Negara</span>
          </Link>
          <ul className="ln-links">
            <li>
              <Link href="/" className={activePage === "beranda" ? "active" : ""}>
                Beranda
              </Link>
            </li>

            <li>
              <Link href="/#jurusan">
                Program Keahlian
              </Link>
            </li>

            <li>
              <Link href="/pendaftaran">
                Alur Pendaftaran
              </Link>
            </li>

            <li>
              <Link href="/#footer">
                FAQ
              </Link>
            </li>
          </ul>
          <div style={{ position: "relative", flexShrink: 0 }}>
            {navUser ? (
              <>
                <button
                  className="ln-avatar"
                  onClick={() => dropdownOpen ? closeDropdown() : setDropdownOpen(true)}
                >
                  {navUser.name.charAt(0).toUpperCase()}
                </button>
                {dropdownOpen && (
                  <>
                    <div
                      onClick={closeDropdown}
                      style={{ position: "fixed", inset: 0, zIndex: 40 }}
                    />
                    <div
                      className="ln-dropdown"
                      style={{
                        animation: dropdownClosing
                          ? "ln-fadeDown 0.18s ease forwards"
                          : "ln-fadeUp 0.2s ease",
                      }}
                    >
                      <div style={{ padding: "12px 16px", borderBottom: "1px solid #F3F4F6", background: "#F9FAFB" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#0C0C0C" }}>{navUser.name}</div>
                        <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>
                          {navUser.role === "admin" ? "Administrator" : "Pendaftar"}
                        </div>
                      </div>
                      <div style={{ padding: "6px 0" }}>
                        <Link href="/hasil-seleksi" className="ln-dropdown-item">Hasil Seleksi</Link>
                        <div className="ln-dropdown-item" style={{ color: "#9CA3AF", cursor: "not-allowed" }}>
                          <span style={{ position: "relative" }}>
                            💳
                            <span style={{ position: "absolute", top: -4, right: -4, width: 8, height: 8, borderRadius: "50%", background: "#DC2626", border: "1.5px solid white" }} />
                          </span>
                          Pembayaran
                          <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 600, background: "#FEF3C7", color: "#92400E", padding: "2px 6px", borderRadius: 9999 }}>Segera</span>
                        </div>
                        <Link href={navUser.role === "admin" ? "/dashboard/profile" : "/pendaftaran"} className="ln-dropdown-item">
                          👤 {navUser.role === "admin" ? "Dashboard" : "Pendaftaran Saya"}
                        </Link>
                        <div style={{ height: 1, background: "#F3F4F6", margin: "4px 0" }} />
                        <button
                          className="ln-dropdown-item danger"
                          onClick={async () => {
                            await fetch("/api/auth/logout", { method: "POST" });
                            setNavUser(null);
                            closeDropdown();
                            window.location.href = "/login";
                          }}
                        >
                          🚪 Keluar
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <Link href="/register" className="ln-cta">Daftar Sekarang</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}