import "./header.css";

export default function Header() {
  return (
    <>
      <header className="title-bar">
        
        <div className="title-bar-text">
          <img src="/src/assets/icons/imageres_130-8.webp" alt="" width="18px" height="18px"/>
          <span>Pavel_Dubovik</span>
          </div>
      </header>
      <ul className="header-menu" role="menubar">
        <li role="menuitem">
          <div>
            <img src="/src/assets/icons/globe.svg" alt=""/>
            <span>Language</span>
          </div>
          <ul role="menu" className="can-hover menu-dropdown">
            <li role="menuitem">
              <input type="radio" name="lang" id="ru"/>
              <label htmlFor="ru">
                <a href="/ru">Русский</a>
              </label>
            </li>
            <li role="menuitem">
              <input type="radio" name="lang" id="eng" checked/>
              <label htmlFor="eng">
                <a href="/eng">English</a>
              </label>
            </li>
          </ul>
        </li>
        <li role="menuitem">
          <div>
            <img src="/src/assets/icons/document.svg" alt=""/>
            <span>
              <a href="/public/files/MyResume.pdf">My resume</a>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
