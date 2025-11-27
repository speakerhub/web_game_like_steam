import { Link, useLocation } from "react-router-dom";
import './Header.css'; // import CSS riêng

export default function Header() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/store" },
    { name: "Library", path: "/library" },
    { name: "Community", path: "/community" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header>
      <h1>🚀 GameHub</h1>
      <nav>
        {navItems.map(item => (
          <Link key={item.name} to={item.path}>
            <button className={location.pathname === item.path ? 'active' : ''}>
              {item.name}
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
