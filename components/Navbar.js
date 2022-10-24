import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navigation-section">
      <nav className="container">
        <Link href="/">
          <h1>AlainBrewery</h1>
        </Link>
        <ul>
          <Link href="/beers">
            <li>All Beers</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
