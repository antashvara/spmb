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
/* =========================
   NAVBAR
========================= */

.ln-nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:1000;

  background:rgba(255,255,255,.88);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);

  border-bottom:1px solid rgba(0,0,0,.05);
  transition:.35s ease;
}

.ln-nav.scrolled{
  background:rgba(255,255,255,.95);
  box-shadow:0 8px 28px rgba(0,0,0,.06);
}

.ln-nav-inner{

  max-width:1280px;

  margin:auto;

  height:88px;

  display:flex;

  align-items:center;

  justify-content:space-between;

  gap:40px;

  padding:0 32px;

}

/* =========================
   LOGO
========================= */

.ln-logo{

  display:flex;

  align-items:center;

  gap:14px;

  text-decoration:none;

  flex-shrink:0;

}

.ln-logo-img{

  width:56px;

  height:56px;

  object-fit:contain;

}

.ln-logo span{

  font-size:18px;

  font-weight:800;

  line-height:1.15;

  color:#1C5C38;

}

/* =========================
   MENU
========================= */

.ln-links{

  flex:1;

  display:flex;

  justify-content:center;

  align-items:center;

  gap:10px;

  list-style:none;

  margin:0;

  padding:0;

}

.ln-links li{

  list-style:none;

}

.ln-links a{

  display:flex;

  align-items:center;

  justify-content:center;

  padding:12px 18px;

  border-radius:999px;

  text-decoration:none;

  color:#475569;

  font-size:.95rem;

  font-weight:700;

  transition:.3s;

}

.ln-links a:hover{

  color:#1C5C38;

  background:rgba(28,92,56,.06);

}

/* active tidak dibuat background */

.ln-links a.active{

  color:#1C5C38;

}

/* =========================
   ACTION
========================= */

.ln-actions{

  display:flex;

  align-items:center;

  gap:12px;

  flex-shrink:0;

}

.ln-login{

  display:flex;

  align-items:center;

  justify-content:center;

  padding:12px 26px;

  border-radius:999px;

  text-decoration:none;

  font-weight:700;

  font-size:.92rem;

  color:#1C5C38;

  background:#F4F8F5;

  border:1px solid #DCE9DF;

  transition:.3s;

}

.ln-login:hover{

  background:#1C5C38;

  color:white;

}

.ln-cta{

  display:flex;

  align-items:center;

  justify-content:center;

  padding:12px 28px;

  border-radius:999px;

  text-decoration:none;

  font-weight:700;

  font-size:.92rem;

  color:white;

  background:linear-gradient(
    135deg,
    #1C5C38,
    #2DAA69
  );

  box-shadow:

    0 12px 30px rgba(45,170,105,.22);

  transition:.3s;

}

.ln-cta:hover{

  transform:translateY(-2px);

  box-shadow:

    0 18px 42px rgba(45,170,105,.3);

}

/* =========================
   AVATAR
========================= */

.ln-avatar{

  width:46px;

  height:46px;

  border:none;

  border-radius:50%;

  background:linear-gradient(
    135deg,
    #1C5C38,
    #2DAA69
  );

  color:white;

  font-weight:700;

  cursor:pointer;

}

/* =========================
   DROPDOWN
========================= */

.ln-dropdown{

  position:absolute;

  right:0;

  top:calc(100% + 10px);

  width:240px;

  background:white;

  border-radius:18px;

  overflow:hidden;

  box-shadow:

    0 18px 45px rgba(0,0,0,.12);

  border:1px solid rgba(0,0,0,.05);

}

.ln-dropdown-item{

  display:flex;

  align-items:center;

  gap:10px;

  padding:12px 18px;

  text-decoration:none;

  color:#374151;

  transition:.2s;

}

.ln-dropdown-item:hover{

  background:#F8FAF9;

}

.ln-dropdown-item.danger{

  color:#DC2626;

}

.ln-dropdown-item.danger:hover{

  background:#FEF2F2;

}

/* =========================
   MOBILE
========================= */

@media (max-width:992px){

  .ln-nav-inner{

    padding:0 18px;

    height:78px;

  }

  .ln-logo-img{

    width:46px;

    height:46px;

  }

  .ln-logo span{

    font-size:16px;

  }

  .ln-links{

    display:none;

  }

  .ln-login{

    padding:10px 18px;

    font-size:.85rem;

  }

  .ln-cta{

    padding:10px 20px;

    font-size:.85rem;

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
              <Link href="/#hero" className={activePage === "beranda" ? "active" : ""}>
                Beranda
              </Link>
            </li>

            <li>
              <Link href="/#jurusan">
                Program Keahlian
              </Link>
            </li>

            <li>
              <Link href="/#alur">
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
              <div className="ln-actions">
              <Link href="/login" className="ln-login">
                Login
              </Link>

              <Link href="/register" className="ln-cta">
                Daftar Sekarang →
              </Link>
            </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}