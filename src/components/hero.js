import React from "react";

const Hero = ({
  html = null,
  title = null,
  subtitle = null,
  image = null,
  size = "large"
}) => {
  return html == null ? (
    <section
      style={{ minHeight: 300, paddingTop: 20, paddingBottom: 20 }}
      className={`hero is-gradient is-${size}`}
    >
      <div className="hero-body">
        <div className="container">
          <div className="section">
            {title != null ? <h1 className="title">{title}</h1> : null}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section
      style={{ minHeight: 300, paddingTop: 20, paddingBottom: 20 }}
      className={`hero is-gradient is-${size}`}
    >
      <div className="hero-body">
        <div className="container">
          <div className="section">{html}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
