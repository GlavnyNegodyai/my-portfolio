import "./my-projects.css";
import type { projPropsTypes } from "../../i18n/content-types";
import type { MyProjectsContent } from "../../i18n/content-types";
import stellarImage from "../../assets/images/stellar.webp?w=800;1200&format=webp&as=srcset";
import mLabsImage from "../../assets/images/mlabs.webp?w=800;1200&format=webp&as=srcset";


type MyProjectsProps = {
  content: MyProjectsContent;
};

const projectImages = [stellarImage, mLabsImage];

function Project({
  projProps,
  src,
}: {
  projProps: projPropsTypes;
  src: string;
}) {
  return (
    <div className="project">
      <div className="project__text">
        <h2>{projProps.name}</h2>
        <p>{projProps.desc}</p>
        <div className="project__links">
          <a href={projProps.live_link}>{projProps.liveLinkText}</a>
          <a href={projProps.github_link}>{projProps.githubLinkText}</a>
        </div>
      </div>
      <img
        src={src}
        srcSet={src}
        className="project__image"
      />
    </div>
  );
}

export default function MyProjects({ content }: MyProjectsProps) {
  return (
    <section className="projects">
      <h1>{content.title}</h1>
      <div className="projects-wrapper">
        {content.projects.map((projObj: projPropsTypes, i) => {
          return <Project key={i} projProps={projObj} src={projectImages[i]} />;
        })}
      </div>
    </section>
  );
}
