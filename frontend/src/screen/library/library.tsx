import Header from "../../components/Header";
import "./Library.css";

export default function Library() {
  const ownedGames = [
    {
      title: "Dota 2",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
    },
    {
      title: "Counter-Strike 2",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      title: "GTA V",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    },
  ];

  return (
    <div className="library-container">
      <Header />

      <section className="library-banner">
        <h1 className="library-title">📚 Your Game Library</h1>
        <p className="library-subtitle">
          All games you own will appear here.
        </p>
      </section>

      <section className="library-grid">
        {ownedGames.map((game) => (
          <div className="library-game-card" key={game.title}>
            <img
              src={game.img}
              alt={game.title}
              className="library-game-img"
            />
            <div className="library-game-info">
              <h3>{game.title}</h3>
              <button className="library-play-btn">Play</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
