export type Profile = {
  languages: string[];
  webFrameworks: string[];
  runtimesBundlers: string[];
  dataops: string[];
  libraries: string[];
  dbs: string[];
  devops: string[]
  other: string[];
  cloud: CloudSkills
  testing: string[]
  tools: string[]
};

export type CloudSkills = {
  webAppInfrastructure: string[];
  serverlessCompute: string[];
  dbs: string[];
  fontendDevOps: string[];
  devops: string[]
  logging: string[]
  auth: string[]
  dataops: string[]
  events: string[]
}

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
