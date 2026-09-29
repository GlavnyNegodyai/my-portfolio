import "./my-stack.css";
import StackElement from "../stack-element/stack-element";

const UIstackObjs = [
  { name: "HTML", src: "" },
  { name: "CSS", src: "" },
  { name: "Tailwind", src: "" },
  { name: "GSAP", src: "" },
  { name: "Lenis", src: "" },
  { name: "Motion", src: "" },
];

const frmStackObjs = [
  { name: "React", src: "react" },
  { name: "TypeScript", src: "" },
  { name: "Next", src: "" },
  { name: "Astro", src: "" },
  { name: "Redux Toolkit", src: "" },
];

export default function MyStack() {
  return (
    <section>
      <h1>My stack</h1>
      <div className="stack__items">
        <div className="stack__item">
          <h2>UI, Design & motion</h2>
          <ul className="stack-list">
            {UIstackObjs.map((obj, i) => {
              return <StackElement name={obj.name} src={obj.src} key={i} />;
            })}
          </ul>
        </div>
        <div>
          <h2>Languages & Frameworks</h2>
          <ul className="stack-list">
            {frmStackObjs.map((obj, i) => {
              return <StackElement name={obj.name} src={obj.src} key={i} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
