export type StackObject = {
  name: string;
  src: string;
};

export type MyStackContent = {
  title: string;
  categories: {
    title: string;
    stack: StackObject[];
  }[];
};

export type AboutMeContent = {
  greeting: string;
  paragraphs: string[];
  resumeText: string;
  experience: {
    title: string;
    company: string;
    position: string;
    period: string;
    stackTitle: string;
    stack: StackObject[];
    description: string;
  };
};

export type ContactMeContent = {
  title: string;
  description: string;
  form: {
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    buttonText: string;
    successMessage: string;
    errorMessage: string;
  };
  contacts: {
    title: string;
    description: string;
  };
};

export type projPropsTypes = {
  name: string;
  desc: string;
  live_link: string;
  github_link: string;
  liveLinkText: string;
  githubLinkText: string;
};

export type MyProjectsContent = {
  title: string;
  projects: projPropsTypes[];
};

export type TabsContent = {
  aboutMe: AboutMeContent;
  myProjects: MyProjectsContent;
  myStack: MyStackContent;
  contactMe: ContactMeContent;
  tabs: string[][];
};

export type HeaderContent = {
  lang: string;
  resume: string;
};