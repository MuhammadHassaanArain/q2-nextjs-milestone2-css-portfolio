import "../layouts/Layouts.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <main
      style={{
        background: "#1c1c1e",
      }}
    >
      <section
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p
            style={{
              color: "#ff9500",
              fontWeight: "700",
            }}
          >
            Hassaan Arain
          </p>

          <div style={{ display: "flex" }}>
            <a href=" https://www.linkedin.com/in/hassaan-arain-a56123290/">
              <FaLinkedinIn className="wh hoverAccentOrange" />
            </a>
            <a href="https://github.com/MuhammadHassaanArain">
              <FaGithub className="wh  hoverAccentOrange" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094421088969">
              <FaFacebook className="wh  hoverAccentOrange" />
            </a>
            <a href="https://twitter.com/shutuphassaan">
              <FaXTwitter className="wh  hoverAccentOrange" />
            </a>
          </div>
        </div>
        <h3 className="copyright">All rights reserved copyright 2024</h3>
      </section>
    </main>
  );
}

export default Footer;
