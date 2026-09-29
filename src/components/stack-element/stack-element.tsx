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
          src={`/src/assets/stack-icons/${src != "" ? src : "default-file"}.webp`}
          alt={`${src} icon`}
        />
        <p>{name}</p>
      </div>
    </li>
  );
}
