type Version = {
  number: string;
  changes: string[];
  date: Date;
};

export const VERSIONS: Version[] = [
  {
    number: "0.1.0",
    changes: ["Initial version"],
    date: new Date("4/9/20"),
  },
  {
    number: "0.1.1",
    changes: ["Added Midnight Color"],
    date: new Date("4/29/20"),
  },
  {
    number: "0.1.2",
    changes: ["Added /sketch/ route for This design team."],
    date: new Date("4/29/20"),
  },
];

export const LATEST_VERSION = VERSIONS[VERSIONS.length - 1];
