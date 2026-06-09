"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: 1200,
    suffix: "+",
    label: "Siswa Aktif",
  },
  {
    value: 98,
    suffix: "%",
    label: "Lulusan Terserap",
  },
  {
    value: 6,
    suffix: "",
    label: "Program Keahlian",
  },
  {
    value: 25,
    suffix: "+",
    label: "Mitra Industri",
  },
];

export default function HeroStats() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <section className="hero-stats">
      <div className="hero-stats-container">
        {stats.map((item, i) => (
          <StatCard
            key={i}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
            start={start}
          />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const step = Math.ceil(value / 60);

    const interval = setInterval(() => {
      current += step;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <div className="hero-stat-card">
      <h2>
        {count}
        {suffix}
      </h2>

      <p>{label}</p>
    </div>
  );
}