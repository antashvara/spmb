export default function HeroStats() {
  const stats = [
    {
      value: "2500+",
      label: "Siswa Aktif",
      icon: "👨‍🎓",
    },
    {
      value: "95%",
      label: "Lulusan Bekerja",
      icon: "🚀",
    },
    {
      value: "50+",
      label: "Mitra Industri",
      icon: "🤝",
    },
    {
      value: "120+",
      label: "Prestasi Nasional",
      icon: "🏆",
    },
  ];

  return (
    <section className="hero-stats-section">
      <div className="container">
        <div className="hero-stats-grid">
          {stats.map((item) => (
            <div
              key={item.label}
              className="hero-stat-card"
            >
              <div className="hero-stat-icon">
                {item.icon}
              </div>

              <h3>{item.value}</h3>

              <p>{item.label}</p>

              <span className="hero-stat-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}