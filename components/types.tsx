export type Profile = {
  languages: string[];
  technologies: string[];
  other: string[];
};

export type Project = {
  title: string;
  description: string;
  languages: string[];
  technologies: string[];
  links: string[];
  id: string;
};

export type TOCItem = {
  title: string,
  id: string,
}
