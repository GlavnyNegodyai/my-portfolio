import "./header.css";
import type { HeaderContent } from "../../i18n/content-types";
import siteIcon from "../../assets/icons/imageres_130-8.webp";
import langIcon from "../../assets/icons/globe.svg";
import resumeIcon from "../../assets/icons/document.svg";

export default function Header({content, currLang, resumeLang}: {content: HeaderContent, currLang: string, resumeLang: string}) {
  const handleLangChange = (langPath: string) => {
    const params = new URLSearchParams(window.location.search);
    window.location.href = `${langPath}?${params}`;
  };

  return (
    <>
      <header className="title-bar">
        
        <div className="title-bar-text">
          <img
            src={siteIcon.src}
            alt=""
            width="18px"
            height="18px"
          />
          <span>Pavel_Dubovik</span>
        </div>
      </header>
      <ul className="header-menu" role="menubar">
        <li role="menuitem">
          <div>
            <img src={langIcon.src} alt="" />
            <span>{content.lang}</span>
          </div>
          <ul role="menu" className="can-hover menu-dropdown">
            <li role="menuitem">
              <input
                type="radio"
                name="lang"
                id="ru"
                onClick={() => {
                  handleLangChange("/ru");
                }}
                defaultChecked={currLang === "ru"}
              />
              <label htmlFor="ru">Русский</label>
            </li>
            <li role="menuitem">
              <input
                type="radio"
                name="lang"
                id="en"
                onClick={() => {
                  handleLangChange("/en");
                }}
                defaultChecked={currLang === "en"}
              />
              <label htmlFor="en">English</label>
            </li>
          </ul>
        </li>
        <li role="menuitem">
          <div>
            <img src={resumeIcon.src} alt="" />
            <span>
              <a href={`/files/my_resume(${resumeLang}).pdf`}>{content.resume}</a>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
