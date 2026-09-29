import "./about-me.css";
import StackElement from "../stack-element/stack-element";

const expStackObjs = [
  {
    name: "TypeScript",
    src: "",
  },
  {
    name: "React",
    src: "",
  },
  {
    name: "Astro",
    src: "",
  },
  {
    name: "GSAP",
    src: "",
  },
  {
    name: "Lenis",
    src: "",
  },
  {
    name: "Tailwind",
    src: "",
  },
];

export default function AboutMe() {
  return (
    <>
      <section className="about-me">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="about-me__image"
        />
        <div className="about-me__text">
          <h1>Hi!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex.
          </p>

          <a rel="nofollow" href="/public/files/MyResume.pdf">My resume here</a>
        </div>
      </section>
      <section className="experience">
        <h2>My experience</h2>
        <div className="experience-item">
          <div>
            <div>
              <h3>
                RichMind (UI Developer)
              </h3>
              <p>Oct 2024 - Sep 2026</p>
            </div>
            <div>
              <h3>Used Stack</h3>
              <ul className="stack-list">
                {expStackObjs.map((obj, i) => {
                  return <StackElement src={obj.src} name={obj.name} key={i} />;
                })}
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae pellentesque.
          </p>
        </div>
      </section>
    </>
  );
}
