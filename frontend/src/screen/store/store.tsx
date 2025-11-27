import Header from "../../components/Header";
import "./Store.css";

export default function Store() {
  const games = [
    {
      title: "Cyber Horizon",
      price: "$29.99",
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000061200/457898b003cb2cf99e60226bbf140c16473c592e6fc8b5cc437e6604ff1b0788",
    },
    {
      title: "Galaxy Rift",
      price: "$19.99",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      title: "Shadow Protocol",
      price: "$14.99",
      img: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab",
    },
    {
      title: "Crystal Saga",
      price: "$24.99",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    },
  ];

  return (
    <div className="store-container">
      <Header />

      {/* Banner */}
      <section className="store-banner">
        <h1>🛒 Game Store</h1>
        <p>Discover new worlds. Buy & play the best games of the galaxy.</p>
      </section>

      {/* Game Grid */}
      <section className="store-grid">
        {games.map((game) => (
          <div className="game-card" key={game.title}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p className="price">{game.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
}
