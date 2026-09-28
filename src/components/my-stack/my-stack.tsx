import "./my-stack.css";

type pieceProps = {
  src: string;
  name: string;
};

const stackObjs = [
    {name: "React",
        src: "react"
    },
        {name: "JavaScript",
        src: ""
    },
        {name: "HTML",
        src: ""
    },
        {name: "CSS",
        src: ""
    },
        {name: "GSAP",
        src: "gsap"
    },
];

function StackPiece({ src, name }: pieceProps) {
  return (
    <li>
      <div className="stack-list__element">
        <img src={`/src/assets/stack-icons/${src != '' ? src: 'default-file'}.webp`} alt="" />
        <p>{name}</p>
      </div>
    </li>
  );
}

export default function MyStack() {
  return (
    <section>
      <h1>My stack</h1>
      <ul className="stack-list">
        {
            stackObjs.map((obj: pieceProps, i) => {
                return(
                    <StackPiece name={obj.name} src={obj.src} key={i}/>
                )
            })
        }
      </ul>
    </section>
  );
}
