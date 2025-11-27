import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import Button from "../components/Button";
  import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navItems = [
    { name: "📦 Store", path: "/store", description: "Browse and buy thousands of amazing games at stellar prices." },
    { name: "🎮 Library", path: "/library", description: "Access your game library anywhere in the galaxy." },
    { name: "👥 Community", path: "/community", description: "Connect with friends, join discussions, and share your cosmic achievements." },
  ];

  const getstart = () => {
    navigate("/library"); 
  };

  const learnmore = () => {
    navigate("/learnMore"); 
  };

  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section className="home-hero">
        <h2>Welcome to GameHub!</h2>
        <p>The Steam-like web platform for discovering, buying, and playing games.</p>
        <div className="hero-buttons">
          <Button variant="primary" onClick={getstart}>Get Started</Button>
          <Button variant="secondary" onClick={learnmore}>Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        {navItems.map(item => (
          <Link className="feature-card" key={item.name} to={item.path}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>

      {/* Login Section */}
      <section className="home-login">
        <h3>Login with</h3>
        <div className="login-buttons">
          <Button variant="google">🔴 Google</Button>
          <Button variant="facebook">📘 Facebook</Button>
          <Button variant="github">🐱 GitHub</Button>
          <Button variant="email">✉️ Email</Button>
        </div>
      </section>

      <footer className="home-footer">
        &copy; 2025 GameHub. All rights reserved.
      </footer>
    </div>
  );
}
