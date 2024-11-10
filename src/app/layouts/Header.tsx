import Link from "next/link";
import "../layouts/Layouts.css";
function Header() {
  return (
    <div style={{ background: "#1c1c1e", width: "100%" }}>
      <main
        className="flexJustifyAround"
        style={{
          textAlign: "center",
          background: "#1c1c1e",
          paddingTop: "16px",
          paddingBottom: "16px",
          alignItems: "center",
        }}
      >
        <Link href={"/"}>
          {" "}
          <h2
            style={{
              fontWeight: "800",
              fontFamily: "monospace",
              fontSize: "1.5rem",
              color: "#ff9500",
            }}
          >
            Muhammad Hassaan.
          </h2>
        </Link>
        <nav
          style={{
            fontWeight: "700",
          }}
        >
          <Link className="hoverAccentOrange spaceX5 mr" href="/">
            Home
          </Link>
          <Link className="hoverAccentOrange spaceX5 mr" href="/skills">
            Skills
          </Link>
          <Link className="hoverAccentOrange spaceX5 mr" href="/projects">
            Projects
          </Link>
          <Link className="hoverAccentOrange spaceX5 mr" href="/about">
            About
          </Link>
          <Link className="hoverAccentOrange spaceX5 mr" href="/contact">
            Contact
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default Header;
