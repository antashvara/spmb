"use client";

import {
  FileText,
  SearchCheck,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: <FileText size={26} />,
    title: "Pendaftaran",
    desc: "Isi formulir dan lengkapi seluruh data diri secara online.",
  },
  {
    icon: <SearchCheck size={26} />,
    title: "Verifikasi Berkas",
    desc: "Panitia memeriksa dan memvalidasi seluruh dokumen.",
  },
  {
    icon: <ClipboardCheck size={26} />,
    title: "Tes Seleksi",
    desc: "Mengikuti tes sesuai jadwal yang telah ditentukan.",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "Daftar Ulang",
    desc: "Konfirmasi kelulusan dan aktivasi sebagai peserta didik.",
  },
];

export default function RegistrationTimeline() {
  return (
    <section id="alur" className="timeline-section" id="alur">
      <div className="container">
        <div className="timeline-header reveal">
          <span className="section-label">REGISTRATION FLOW</span>

          <h2>Alur Pendaftaran</h2>

          <p>
            Proses pendaftaran dibuat sederhana, cepat, dan dapat dilakukan
            secara online.
          </p>
        </div>

        <div className="timeline-wrapper reveal">
          <div className="timeline-line"></div>

          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-circle">
                {step.icon}
              </div>

              <span className="timeline-number">
                0{index + 1}
              </span>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}