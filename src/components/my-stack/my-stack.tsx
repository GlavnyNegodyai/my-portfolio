import "./my-stack.css";
import StackElement from "../stack-element/stack-element";
import type { MyStackContent } from "../../i18n/content-types";

type MyStackProps = {
  content: MyStackContent;
};

export default function MyStack({ content }: MyStackProps) {
  return (
    <section>
      <h1>{content.title}</h1>
      <div className="stack__items">
        {content.categories.map((category, i) => {
          return (
            <div className={i === 0 ? "stack__item" : ""} key={i}>
              <h2>{category.title}</h2>
              <ul className="stack-list">
                {category.stack.map((obj, i) => {
                  return (
                    <StackElement
                      name={obj.name}
                      src={obj.src}
                      key={i}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}