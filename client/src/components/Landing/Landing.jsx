import React from "react";
import "./landing.styles.scss";

const Landing = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://instagram.com/escovisualz",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div id="landing">
      <div className="landing-inner">
        <header className="landing-header">
          <span className="brand-pill">Escovisualz</span>
        </header>

        <main className="hero">
          <h1 className="hero-title">
            Cinematic Photography
            <span className="hero-title-break">for bold stories.</span>
          </h1>

          <p className="hero-subtitle">
            Portraits, brands, and moments captured with a dark, cinematic edge.
          </p>

          <button
            type="button"
            className="primary-cta"
            onClick={handleInstagramClick}
          >
            View Instagram
          </button>

          <p className="hero-note">
            Full portfolio is coming soon. For bookings &amp; collaborations,
            get in touch via <a href="mailto:bookings@escovisualz.com">email</a>
            .
          </p>
        </main>
      </div>
    </div>
  );
};

export default Landing;
