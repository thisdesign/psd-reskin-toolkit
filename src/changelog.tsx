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
    number: "0.2.0",
    changes: ["Added Midnight Color"],
    date: new Date("4/29/20"),
  },
  {
    number: "0.2.1",
    changes: ["Added /sketch/ route for This design team."],
    date: new Date("4/29/20"),
  },
  {
    number: "0.2.2",
    changes: ["Changed some wording on component example"],
    date: new Date("4/30/20"),
  },
  {
    number: "0.3.0",
    changes: [
      "Added raincloud color too meet AA accessability standards for grey-on-grey",
    ],
    date: new Date("4/30/20"),
  },
];

export const LATEST_VERSION = VERSIONS[VERSIONS.length - 1];
