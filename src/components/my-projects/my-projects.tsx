import "./my-projects.css";

type projProps = {
  name: string;
  desc: string;
  live_link: string;
  github_link: string;
  proj_img: string;
};

const projects = [
  {
    name: "Project Alpha",
    desc: "A simple web application for managing daily tasks.",
    live_link: "https://example.com",
    github_link: "https://github.com/example/project-alpha",
    proj_img: "https://placehold.co/600x400",
  },
  {
    name: "Project Beta",
    desc: "A modern dashboard with analytics and user statistics.",
    live_link: "https://example.com",
    github_link: "https://github.com/example/project-beta",
    proj_img: "https://placehold.co/600x400",
  },
  {
    name: "Project Theta",
    desc: "A modern dashboard with analytics and user statistics.",
    live_link: "https://example.com",
    github_link: "https://github.com/example/project-beta",
    proj_img: "https://placehold.co/600x400",
  },
];

function Project({ name, desc, live_link, github_link, proj_img }: projProps) {
  return (
    <div className="project">
      <div className="project__text">
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="project__links">
          <a href={live_link}>Live version</a>
          <a href={github_link}>Github Page</a>
        </div>
      </div>
      <img src={proj_img} alt="" className="project__image" />
    </div>
  );
}

export default function MyProjects() {
  return (
    <section className="projects">
      <h1>My projects</h1>
      <div className="projects-wrapper">
        {projects.map((projObj: projProps, i) => {
          return (
            <Project
              key={i}
              name={projObj.name}
              desc={projObj.desc}
              live_link={projObj.live_link}
              github_link={projObj.github_link}
              proj_img={projObj.proj_img}
            />
          );
        })}
      </div>
    </section>
  );
}
