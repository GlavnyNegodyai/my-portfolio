import "./about-me.css";
import StackElement from "../stack-element/stack-element";
import type { AboutMeContent } from "../../i18n/content-types";
import myImg from "../../assets/images/me.webp?w=300;600&format=webp&as=srcset";

export default function AboutMe({ content, resumeLang }: {content: AboutMeContent, resumeLang: string}) {
  return (
    <>
      <section className="about-me">
        <img src={myImg} srcSet={myImg} alt="" className="about-me__image" />
        <div className="about-me__text">
          <h1>{content.greeting}</h1>
          <img
            src={myImg}
            srcSet={myImg}
            alt=""
            className="about-me__image about-me__image--mobile"
          />
          {content.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <a rel="nofollow" href={`/public/files/my_resume(${resumeLang}).pdf`}>
            {content.resumeText}
          </a>
        </div>
      </section>

      <section className="experience">
        <h2>{content.experience.title}</h2>

        <div className="experience-item">
          <div>
            <div>
              <h3>
                {content.experience.company} ({content.experience.position})
              </h3>
              <p>{content.experience.period}</p>
            </div>

            <div>
              <h3>{content.experience.stackTitle}</h3>
              <ul className="stack-list">
                {content.experience.stack.map((obj, i) => {
                  return <StackElement src={obj.src} name={obj.name} key={i} />;
                })}
              </ul>
            </div>
          </div>

          <p>{content.experience.description}</p>
        </div>
      </section>
    </>
  );
}
