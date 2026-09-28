import { useState } from "react";

import AboutMe from "../about-me/about-me";
import MyStack from "../my-stack/my-stack";
import MyExp from "../my-experience/my-experience";
import MyProjects from "../my-projects/my-projects";
import ContactMe from "../contact-me/contact-me";
import "./tabs.css";

export default function TabList() {
  const [activeTab, setActiveTab] = useState("tab-A");

  const tabs = [
    ["tab-A", "About me"],
    ["tab-B", "My stack"],
    ["tab-C", "My experience"],
    ["tab-D", "My projects"],
    ["tab-E", "Contact me"],
  ];

  return (
    <section className="tabs">
      <menu role="tablist">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            role="tab"
            aria-controls={id}
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </menu>

      <div className="tabs__wrapper">
        <article className="has-scrollbar" role="tabpanel" id="tab-A" hidden={activeTab !== "tab-A"}>
          <AboutMe />
        </article>

        <article className="has-scrollbar" role="tabpanel" id="tab-B" hidden={activeTab !== "tab-B"}>
          <MyStack />
        </article>

        <article className="has-scrollbar" role="tabpanel" id="tab-C" hidden={activeTab !== "tab-C"}>
          <MyExp />
        </article>

        <article className="has-scrollbar" role="tabpanel" id="tab-D" hidden={activeTab !== "tab-D"}>
          <MyProjects />
        </article>

        <article className="has-scrollbar" role="tabpanel" id="tab-E" hidden={activeTab !== "tab-E"}>
          <ContactMe />
        </article>
      </div>
    </section>
  );
}
