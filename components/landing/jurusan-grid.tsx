"use client";

import Link from "next/link";

const jurusan = [
  {
    kode: "TKJ",
    nama: "Teknik Komputer & Jaringan",
    image: "/images/jurusan-tjkt.jpeg",
    logo: "/images/logo-tjkt.png",
    badge: "NETWORKING",
    desc: "Belajar jaringan komputer, server, cloud dan cyber security.",
  },
  {
    kode: "DKV",
    nama: "Desain Komunikasi Visual",
    image: "/images/jurusan-dkv.jpeg",
    logo: "/images/logo-dkv.png",
    badge: "CREATIVE",
    desc: "Eksplorasi desain grafis, branding, UI/UX dan multimedia.",
  },
  {
    kode: "MPLB",
    nama: "Manajemen Perkantoran",
    image: "/images/jurusan-mplb.jpeg",
    logo: "/images/logo-mplb.png",
    badge: "ADMINISTRATION",
    desc: "Administrasi modern berbasis digital dan layanan bisnis.",
  },
  {
    kode: "PPLG",
    nama: "Pengembangan Perangkat Lunak & Gim",
    image: "/images/jurusan-pplg.jpeg",
    logo: "/images/logo-pplg.png",
    badge: "DEVELOPMENT",
    desc: "Membangun website, aplikasi mobile hingga game interaktif.",
  },
  {
    kode: "PH",
    nama: "Perhotelan",
    image: "/images/jurusan-ph.jpeg",
    badge: "HOSPITALITY",
    desc: "Belajar pelayanan hotel, front office dan hospitality modern.",
  },
  {
    kode: "PM",
    nama: "Pemasaran",
    image: "/images/jurusan-pm.jpeg",
    logo: "/images/logo-pm.png",
    badge: "BUSINESS",
    desc: "Strategi digital marketing dan entrepreneurship masa kini.",
  },
];

export default function JurusanGrid() {
  return (
    <section className="jurusan-modern">

      <div className="container">

        <div className="jurusan-modern-header reveal">

          <span className="section-label">
            Tech Education
          </span>

          <h2>
            Program Keahlian Masa Depan
          </h2>

          <p>
            Eksplorasi enam program unggulan yang dirancang
            mengikuti kebutuhan industri modern.
          </p>

        </div>

        <div className="jurusan-modern-grid">

          {jurusan.map((item) => (

            <Link
              key={item.kode}
              href={`/jurusan/${item.kode}`}
              className="jurusan-modern-card reveal"
            >

              <img
                src={item.image}
                className="jurusan-bg"
                alt={item.nama}
              />

              <div className="jurusan-overlay" />

              <img
                src={item.logo}
                className="jurusan-logo"
                alt=""
              />

              <span className="jurusan-badge-modern">
                {item.badge}
              </span>

              <div className="jurusan-content">

                <h3>
                  {item.kode}
                </h3>

                <h4>
                  {item.nama}
                </h4>

                <p>
                  {item.desc}
                </p>

              <button className="jurusan-btn">
                Selengkapnya
                <span>→</span>
                </button>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}