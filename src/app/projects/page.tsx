import "../projects/projects.css";

// import ImageSlider from "../../components/ImageSlider";

// const project2 = [
//   "/images/Screenshot (89).png",
//   "/images/Screenshot (90).png",
//   "/images/Screenshot (91).png",
// ];
// const project1 = [
//     "/images/Screenshot (98).png",
//     "/images/Screenshot (99).png",
//     "/images/Screenshot (100).png",
//     "/images/Screenshot (101).png",
//     "/images/Screenshot (103).png",
//   ];
// const project4 = [
//   "/images/Screenshot (104).png",
//   "/images/Screenshot (105).png",
//   "/images/Screenshot (106).png",
//   "/images/Screenshot (107).png",
//   "/images/Screenshot (108).png",
//   "/images/Screenshot (109).png",
// ];
// const project3 = [
//     "/images/Screenshot (110).png",
//     "/images/Screenshot (111).png",
//     "/images/Screenshot (112).png",
//     "/images/Screenshot (113).png",
//   ];
export default function Projects() {
  return (
    <main
      style={{
        width: "100vw",
        background: "#2e2e31",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#ff9500",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Recents Projects
      </h1>
      <div className="customContainer components ">
        {/* <ImageSlider images={project1} /> */}
        <h3
          style={{
            color: "#ff9500",
            fontWeight: 700,
            paddingBottom: "16px",
            paddingTop: "16px",
            fontSize: "1.25rem",
          }}
        >
          E-Learning Website Using Next.js
        </h3>
      </div>

      <div className="customContainer components">
        {/* <ImageSlider images={project2} /> */}
        <h3
          style={{
            color: "#ff9500",
            fontWeight: 700,
            paddingBottom: "16px",
            paddingTop: "16px",
            fontSize: "1.25rem",
          }}
        >
          Portfolio Using Next.js
        </h3>
      </div>
      <div className="customContainer components">
        {/* <ImageSlider images={project3} /> */}
        <h3
          style={{
            color: "#ff9500",
            fontWeight: 700,
            paddingBottom: "16px",
            paddingTop: "16px",
            fontSize: "1.25rem",
          }}
        >
          Dynamic Resume Builder using HTML,CSS and Typescript
        </h3>
      </div>
      <div className="customContainer components">
        {/* <ImageSlider images={project4} /> */}
        <h3
          style={{
            color: "#ff9500",
            fontWeight: 700,
            paddingBottom: "16px",
            paddingTop: "16px",
            fontSize: "1.25rem",
          }}
        >
          Porsche Website Using Nect.js and Sanity CMS.
        </h3>
      </div>
    </main>
  );
}
