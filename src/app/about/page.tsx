export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#2e2e31",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <main style={{ width: "83.33%" }}>
        <section>
          <h2
            style={{
              color: "#ff9500",
              fontWeight: 700,
              textAlign: "center",
              paddingBottom: "16px",
              fontSize: "24px",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              color: "#a1a1a4",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            Hello! I&apos;m Muhammad Hassaan Arain, a frontend developer and
            aspiring full stack expert from Pakistan, driven by a passion for
            building impactful, user-centered applications. As part of the AI,
            Metaverse, and Web 3.0 initiative under the Governor Sindh, I&apos;m
            constantly honing my skills in cutting-edge web technologies, from{" "}
            <span>Next.js</span> and
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              {" "}
              TypeScript
            </span>{" "}
            to{" "}
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              Sanity CMS
            </span>
            .
            <br />
            <br />
            With a strong foundation in frontend and backend technologies,
            I&apos;ve completed multiple projects that showcase my versatility
            and commitment to quality, including an expense tracker, a movie
            search tool, and a fully responsive portfolio website. I have
            experience in building dynamic, content-rich applications using{" "}
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              Sanity CMS
            </span>{" "}
            for easy content management,{" "}
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              jQuery
            </span>{" "}
            for seamless interactivity, and{" "}
            <span style={{ color: "#e5e5e7", fontFamily: "sans-serif" }}>
              PostgreSQL
            </span>{" "}
            for reliable data management.
          </p>
        </section>
        <section>
          <h2
            style={{
              color: "#ff9500",
              fontWeight: 700,
              textAlign: "center",
              paddingBottom: "16px",
              paddingTop: "16px",
              fontSize: "20px",
            }}
          >
            Why Me ?
          </h2>
          <div style={{ color: "#a1a1a4", fontFamily: "monospace" }}>
            <p>
              <span style={{ color: "#ff9500", fontWeight: 700 }}>
                <li>Technical Versatility:</li>
              </span>
              With a robust skill set that spans frontend frameworks, backend
              management, and database integrations, I am well-equipped to
              handle both user interface design and complex data needs.
            </p>
            <p>
              <span style={{ color: "#ff9500", fontWeight: 700 }}>
                <li>Hands-On Experience:</li>
              </span>
              I bring real-world project experience, from creating responsive
              apps to managing dynamic content, ensuring practical, scalable
              solutions tailored to any project requirements.
            </p>
            <p>
              <span style={{ color: "#ff9500", fontWeight: 700 }}>
                <li>Attention to Detail:</li>
              </span>
              My focus on clean, maintainable code and efficient problem-solving
              means every feature is built with both quality and usability in
              mind.
            </p>
            <p>
              <span style={{ color: "#ff9500", fontWeight: 700 }}>
                <li>Passion for Learning:</li>
              </span>
              I&apos;m committed to continuous improvement, always exploring new
              tools and techniques to keep my skills sharp and stay current with
              industry trends.
            </p>
            <p>
              <span style={{ color: "#ff9500", fontWeight: 700 }}>
                <li>Client-Centered Approach:</li>
              </span>
              Whether it&apos;s freelancing or collaborating on team projects, I
              prioritize open communication and a clear understanding of client
              needs to deliver solutions that exceed expectations.
            </p>
          </div>
          <h3
            style={{
              color: "#ff9500",
              fontWeight: 700,
              paddingBottom: "16px",
              paddingTop: "16px",
            }}
          >
            With these strengths, I aim to create engaging, impactful digital
            experiences that bring ideas to life. Let&apos;s connect and explore
            how I can contribute to your next project!
          </h3>
        </section>
      </main>
    </div>
  );
}
