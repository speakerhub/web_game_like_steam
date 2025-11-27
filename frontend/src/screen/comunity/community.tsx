import Header from "../../components/Header";
import "./Community.css";

export default function Community() {
  const posts = [
    {
      user: "GamerX",
      message: "Just reached level 50 in Cyber Horizon! 🚀",
    },
    {
      user: "PixelQueen",
      message: "Anyone wants to team up for Galaxy Rift tonight?",
    },
    {
      user: "ShadowNinja",
      message: "Check out my mod for Crystal Saga!",
    },
  ];

  return (
    <div className="community-container">
      <Header />

      <section className="community-banner">
        <h1 className="community-title">👥 Community Hub</h1>
        <p className="community-subtitle">
          Connect with friends, share achievements, and discuss your favorite games.
        </p>
      </section>

      <section className="community-posts">
        {posts.map((post, idx) => (
          <div className="community-post" key={idx}>
            <div className="community-avatar">{post.user[0]}</div>
            <div className="community-message">
              <h4>{post.user}</h4>
              <p>{post.message}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
