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
/* ===========================
   NAVBAR
=========================== */

.ln-nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:999;

  background:rgba(255,255,255,.82);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);

  border-bottom:1px solid rgba(0,0,0,.05);

  transition:.35s ease;
}

.ln-nav.scrolled{
  background:rgba(255,255,255,.92);
  box-shadow:
    0 10px 35px rgba(0,0,0,.05);
}

/* ===========================
   CONTAINER
=========================== */

.ln-nav-inner{

  max-width:1280px;

  margin:auto;

  height:88px;

  padding:0 34px;

  display:flex;

  align-items:center;

  justify-content:space-between;

  gap:40px;

}

/* ===========================
   LOGO
=========================== */

.ln-logo{
  display:flex;
  align-items:center;
  gap:14px;

  text-decoration:none;
  flex-shrink:0;
}

.ln-logo-img{
  width:58px;
  height:58px;
  object-fit:contain;
}

.ln-logo-text{

  color:#1C5C38;

  font-size:1.85rem;

  font-weight:800;

  letter-spacing:-0.03em;

  white-space:nowrap;

  transition:.3s;
}

.ln-logo:hover .ln-logo-text{

  transform:translateX(2px);

}

.ln-logo-small{

  font-size:14px;

  font-weight:700;

  color:#4B5563;

}

.ln-logo-big{

  font-size:28px;

  font-weight:800;

  color:#1C5C38;

  letter-spacing:-0.03em;

}

/* ===========================
   MENU
=========================== */

.ln-links{

  display:flex;

  align-items:center;

  gap:8px;

  list-style:none;

  margin:0 auto;

  padding:8px;

  border-radius:999px;

  background:rgba(255,255,255,.55);

  backdrop-filter:blur(18px);

  border:1px solid rgba(28,92,56,.08);

}

.ln-links li{

  list-style:none;

}

.ln-links a{

  position:relative;

  display:flex;

  align-items:center;

  justify-content:center;

  padding:12px 18px;

  border-radius:999px;

  color:#4B5563;

  text-decoration:none;

  font-weight:700;

  font-size:.93rem;

  overflow:hidden;

  transition:.35s;

}

.ln-links a::after{

  content:"";

  position:absolute;

  left:50%;

  bottom:5px;

  width:0;

  height:2px;

  background:#1C5C38;

  transform:translateX(-50%);

  transition:.35s;

  border-radius:999px;

}

.ln-links a:hover{

  color:#1C5C38;

}

.ln-links a:hover::after{

  width:70%;

}

.ln-links a.active{

  color:#1C5C38;

}

.ln-links a.active::after{

  width:70%;

}

/* ===========================
   ACTIONS
=========================== */

.ln-actions{

  display:flex;

  align-items:center;

  gap:12px;

  flex-shrink:0;

}

/* LOGIN */

.ln-login{

  display:flex;

  align-items:center;

  justify-content:center;

  text-decoration:none;

  padding:12px 26px;

  border-radius:999px;

  font-size:.92rem;

  font-weight:700;

  color:#1C5C38;

  background:rgba(28,92,56,.05);

  border:1px solid rgba(28,92,56,.12);

  transition:.35s;

}

.ln-login:hover{

  background:#1C5C38;

  color:white;

  transform:translateY(-2px);

}

/* CTA */

.ln-cta{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:8px;

  text-decoration:none;

  padding:12px 30px;

  border-radius:999px;

  font-size:.92rem;

  font-weight:700;

  color:white;

  background:

  linear-gradient(

    135deg,

    #1C5C38,

    #2DAA69

  );

  transition:.35s;

  box-shadow:

    0 14px 35px rgba(45,170,105,.25);

}

.ln-cta:hover{

  transform:translateY(-2px);

  filter:brightness(1.05);

  box-shadow:

    0 20px 42px rgba(45,170,105,.35);

}

/* ===========================
   AVATAR
=========================== */

.ln-avatar{

  width:46px;

  height:46px;

  border:none;

  border-radius:50%;

  background:

  linear-gradient(

    135deg,

    #1C5C38,

    #2DAA69

  );

  color:white;

  font-weight:700;

  cursor:pointer;

  transition:.3s;

}

.ln-avatar:hover{

  transform:translateY(-2px);

}

/* ===========================
   DROPDOWN
=========================== */

.ln-dropdown{

  position:absolute;

  top:calc(100% + 10px);

  right:0;

  width:240px;

  overflow:hidden;

  border-radius:18px;

  background:rgba(255,255,255,.96);

  backdrop-filter:blur(18px);

  border:1px solid rgba(0,0,0,.05);

  box-shadow:

    0 20px 45px rgba(0,0,0,.12);

}

.ln-dropdown-item{

  display:flex;

  align-items:center;

  gap:10px;

  width:100%;

  padding:13px 18px;

  background:none;

  border:none;

  text-decoration:none;

  color:#374151;

  transition:.2s;

}

.ln-dropdown-item:hover{

  background:#F6FAF7;

}

.ln-dropdown-item.danger{

  color:#DC2626;

}

.ln-dropdown-item.danger:hover{

  background:#FEF2F2;

}

/* ===========================
   MOBILE
=========================== */

@media(max-width:992px){

  .ln-nav-inner{

    height:76px;

    padding:0 18px;

  }

  .ln-logo-img{

    width:44px;

    height:44px;

  }

  .ln-logo-small{

    font-size:12px;

  }

  .ln-logo-big{

    font-size:21px;

  }

  .ln-links{

    display:none;

  }

  .ln-login{

    padding:10px 18px;

    font-size:.82rem;

  }

  .ln-cta{

    padding:10px 18px;

    font-size:.82rem;

  }

/* ===== LOGO TEXT ===== */

.ln-logo{
  display:flex;
  align-items:center;
  gap:14px;
  flex-shrink:0;
}

.ln-logo-text{
  display:flex;
  flex-direction:column;
  line-height:1;
}

.ln-logo-top{
  font-size:0.9rem;
  font-weight:700;
  letter-spacing:.08em;
  color:#4B5563;
}

.ln-logo-bottom{
  margin-top:2px;
  font-size:1.75rem;
  font-weight:800;
  color:#1C5C38;
  letter-spacing:-.03em;
  white-space:nowrap;
}

/* ===== MENU EFFECT ===== */

.ln-links a{
  position:relative;
  overflow:hidden;
}

.ln-links a::before{

  content:"";

  position:absolute;

  inset:0;

  border-radius:999px;

  background:linear-gradient(
    135deg,
    #1C5C38,
    #32B36F
  );

  opacity:0;

  transform:scale(.7);

  transition:.35s;

  z-index:-1;

}

.ln-links a:hover::before{

  opacity:1;

  transform:scale(1);

}

.ln-links a:hover{

  color:white;

  transform:translateY(-2px);

}

/* ===== ACTIVE ===== */

.ln-links a.active{

  background:linear-gradient(
    135deg,
    #1C5C38,
    #2DAA69
  );

  color:white;

  box-shadow:
    0 10px 24px rgba(45,170,105,.28);

    transform:scale(.96);

}

.ln-links a.active::before{
  width:60%;
}

/* ===== MOBILE ===== */

@media(max-width:768px){

  .ln-logo-bottom{
    font-size:1.2rem;
  }

  .ln-logo-top{
    font-size:.75rem;
  }

}

}
      `}</style>


<nav className={`ln-nav${scrolled ? " scrolled" : ""}`}>
  <div className="ln-nav-inner">

    {/* ================= LOGO ================= */}

    <Link href="/" className="ln-logo">

      <img
        src="/images/logo-cn.png"
        alt="SMK Citra Negara"
        className="ln-logo-img"
      />

      <div className="ln-logo-text">
        <span className="ln-logo-top">
          SMK Citra Negara
        </span>
      </div>

    </Link>

    {/* ================= MENU ================= */}

    <ul className="ln-links">

      <li>
        <Link
          href="/#hero"
          className={activePage === "beranda" ? "active" : ""}
        >
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
        <Link href="/#faq">
          FAQ
        </Link>
      </li>

    </ul>

    {/* ================= RIGHT SIDE ================= */}

    <div
      style={{
        position: "relative",
        flexShrink: 0,
      }}
    >

      {navUser ? (
        <>

          <button
            className="ln-avatar"
            onClick={() =>
              dropdownOpen
                ? closeDropdown()
                : setDropdownOpen(true)
            }
          >
            {navUser.name.charAt(0).toUpperCase()}
          </button>

          {dropdownOpen && (
            <>
              <div
                onClick={closeDropdown}
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 40,
                }}
              />

              <div
                className="ln-dropdown"
                style={{
                  animation: dropdownClosing
                    ? "ln-fadeDown .18s ease forwards"
                    : "ln-fadeUp .2s ease",
                }}
              >

                <div
                  style={{
                    padding: "14px 18px",
                    borderBottom: "1px solid #edf2ef",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1C5C38",
                    }}
                  >
                    {navUser.name}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#6B7280",
                    }}
                  >
                    {navUser.role === "admin"
                      ? "Administrator"
                      : "Pendaftar"}
                  </div>
                </div>

                <Link
                  href="/hasil-seleksi"
                  className="ln-dropdown-item"
                >
                  Hasil Seleksi
                </Link>

                <Link
                  href={
                    navUser.role === "admin"
                      ? "/dashboard/profile"
                      : "/pendaftaran"
                  }
                  className="ln-dropdown-item"
                >
                  {navUser.role === "admin"
                    ? "Dashboard"
                    : "Pendaftaran Saya"}
                </Link>

                <button
                  className="ln-dropdown-item danger"
                  onClick={async () => {
                    await fetch("/api/auth/logout", {
                      method: "POST",
                    });

                    setNavUser(null);

                    closeDropdown();

                    window.location.href = "/login";
                  }}
                >
                  Keluar
                </button>

              </div>
            </>
          )}

        </>
      ) : (

        <div className="ln-actions">

          <Link
            href="/login"
            className="ln-login"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="ln-cta"
          >
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