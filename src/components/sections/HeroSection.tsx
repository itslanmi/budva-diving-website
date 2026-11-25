export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/dive-sites/site-st-nikola.jpg"
      >
        <source src="/video/ocean-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-padi-pill">
          <img src="/images/brand/padi-logo.gif" alt="PADI 5-Star Dive Center" />
          <span>Official PADI 5-Star Dive Resort • Est. 1994</span>
        </div>
        <h1 className="hero-title">Explore the Best Diving in the Adriatic</h1>
        <p className="hero-subtitle">PADI 5-Star Dive Center • 30+ Years of Experience</p>
        <a href="#experiences" className="btn-hero-cta">
          Explore Trips &amp; Courses
        </a>
      </div>
    </section>
  );
}
