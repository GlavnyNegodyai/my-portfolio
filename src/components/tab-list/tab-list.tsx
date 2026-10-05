import { useState, useEffect } from "react";

import AboutMe from "../about-me/about-me";
import MyStack from "../my-stack/my-stack";
import MyProjects from "../my-projects/my-projects";
import ContactMe from "../contact-me/contact-me";
import "./tab-list.css";
import type { TabsContent } from "../../i18n/content-types";

type TabsContentProps = {
  content: TabsContent;
};

export default function TabList({ content }: TabsContentProps) {
  const [activeTab, setActiveTab] = useState<string>(content.tabs[0][0]);

  useEffect(() => {
    const url = new URL(window.location.href);
    console.log(url.searchParams.get("tab"));
    const initTabParam = url.searchParams.get("tab");
    if (initTabParam) {
      setActiveTab(initTabParam);
    } else {
      url.searchParams.set("tab", content.tabs[0][0]);
      window.history.replaceState({}, "", url);
    }
  }, []);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", id);
    window.history.replaceState({}, "", url);
  };

  return (
    <section className="tabs">
      <menu role="tablist">
        {content.tabs.map(([id, label]) => (
          <button
            key={id}
            role="tab"
            aria-controls={id}
            aria-selected={activeTab === id}
            onClick={() => handleTabChange(id)}
          >
            {label}
          </button>
        ))}
      </menu>

      <div className="tabs__wrapper">
        <article
          className="has-scrollbar"
          role="tabpanel"
          id="tab-A"
          hidden={activeTab !== "tab-A"}
        >
          <AboutMe content={content.aboutMe} />
        </article>

        <article
          className="has-scrollbar"
          role="tabpanel"
          id="tab-B"
          hidden={activeTab !== "tab-B"}
        >
          <MyStack content={content.myStack} />
        </article>

        <article
          className="has-scrollbar"
          role="tabpanel"
          id="tab-D"
          hidden={activeTab !== "tab-C"}
        >
          <MyProjects content={content.myProjects} />
        </article>

        <article
          className="has-scrollbar"
          role="tabpanel"
          id="tab-E"
          hidden={activeTab !== "tab-D"}
        >
          <ContactMe content={content.contactMe} />
        </article>
      </div>
    </section>
  );
}
