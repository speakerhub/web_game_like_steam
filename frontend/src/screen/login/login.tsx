import Header from "../../components/Header";
import "./Login.css";

export default function Login() {
  const handleLogin = (provider: string) => {
    alert(`Logging in with ${provider}`);
    // TODO: Kết nối với OAuth hoặc backend login
  };

  return (
    <div className="login-container">
      <Header />

      <section className="login-hero">
        <h1>🔑 Login to GameHub</h1>
        <p>Access your library, store, and community in the galaxy of games.</p>

        <div className="login-buttons">
          <button className="btn google" onClick={() => handleLogin("Google")}>
            🔴 Google
          </button>
          <button className="btn facebook" onClick={() => handleLogin("Facebook")}>
            📘 Facebook
          </button>
          <button className="btn github" onClick={() => handleLogin("GitHub")}>
            🐱 GitHub
          </button>
          <button className="btn email" onClick={() => handleLogin("Email")}>
            ✉️ Email
          </button>
        </div>
      </section>

      <footer className="login-footer">
        &copy; 2025 GameHub. All rights reserved.
      </footer>
    </div>
  );
}
