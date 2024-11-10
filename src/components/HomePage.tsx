import Link from "next/link";
import "../components/HomePage.css";
function HomePage() {
  return (
    <main
      style={{
        widows: "100",
        background: "#2e2e31",
        paddingBottom: "56px",
        paddingTop: "56px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section className="md-w" style={{ textAlign: "center" }}>
        <h2
          className="responsiveText"
          style={{
            color: "#ff9500",
            paddingBottom: "16px",
            paddingTop: "16px",
            fontFamily: "monospace",
            fontWeight: "800",
          }}
        >
          Crafting Seamless Web Experiences
        </h2>

        <h3
          className="responsiveText1"
          style={{
            color: "#e5e5e7",
            paddingBottom: "16px",
            paddingTop: "16px",
          }}
        >
          Full Stack Developer with Expertise in Next.js, TypeScript, and
          Tailwind CSS
        </h3>
        <p
          className="text-xl"
          style={{
            color: "#a1a1a4",
            fontWeight: "700",
            fontFamily: "monospace",
          }}
        >
          Hello! I&apos;m Muhammad Hassaan Arain, a developer passionate about
          building modern, responsive web applications. With expertise in
          Next.js and TypeScript, I create scalable and efficient web solutions.
          I specialize in crafting sleek, user-friendly interfaces using
          Tailwind CSS, while also ensuring seamless backend integration with
          PostgreSQL and Drizzle ORM. Dive into my portfolio to explore my
          projects and the journey of turning ideas into functional, impactful
          digital experiences.
        </p>
        <div style={{ paddingBottom: "40px", paddingTop: "40px" }}>
          <button
            className="hoverOrange customClass"
            style={{
              color: "#e5e5e7",

              fontWeight:1000,
            }}
          >
            <Link href={"/contact"}>Contact</Link>
          </button>
          <button
           className=" customClass hoverGray50"
           style={{
             color: "#ff9500",
             fontWeight:1000,
           }}
          >
            <Link href={"/about"}>About</Link>
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
