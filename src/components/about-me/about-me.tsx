import "./about-me.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <img src="https://placehold.co/600x400" alt="" className="about-me__image"/>
      <div className="about-me__text">
        <h1>Hi!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.</p>

        <a href="../../files/MyResume.pdf">My resume here</a>
      </div>
    </section>
  );
}
