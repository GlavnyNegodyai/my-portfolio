import "./stack-element.css";

type elementProps = {
  src: string;
  name: string;
};

export default function StackElement({ src, name }: elementProps) {
  return (
    <li>
      <div className="stack-list__element">
        <img
          src={`/stack-icons/${src != "" ? src : "default-file"}`}
          alt={`${src} icon`}
        />
        <p>{name}</p>
      </div>
    </li>
  );
}
