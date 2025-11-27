import Header from "../components/Header";
import Button from "../components/Button";
import "./LearnMore.css";

export default function LearnMore() {
  return (
    <div className="learnmore-container">
      <Header />

      {/* Hero / Banner */}
      <section className="learnmore-hero">
        <h1>🌌 Learn More About GameHub</h1>
        <p>
          Discover the features, community, and galaxy of games available on
          GameHub. Explore, buy, and play your favorite games with ease!
        </p>
        <Button variant="primary" onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
          Explore Features
        </Button>
      </section>

      {/* Features / Highlights */}
      <section className="learnmore-features">
        <div className="feature-card">
          <h2>📦 Store</h2>
          <p>Thousands of games at stellar prices, discover your next adventure.</p>
        </div>
        <div className="feature-card">
          <h2>🎮 Library</h2>
          <p>Access your owned games anywhere in the galaxy.</p>
        </div>
        <div className="feature-card">
          <h2>👥 Community</h2>
          <p>Join discussions, achievements, and events with fellow gamers.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="learnmore-footer">
        &copy; 2025 GameHub. All rights reserved.
      </footer>
    </div>
  );
}
