type Version = {
  number: string;
  changes: string[];
};

export const VERSIONS: Version[] = [
  {
    number: "0.1.0",
    changes: ["Initial version"],
  },
  {
    number: "0.1.1",
    changes: ["Added Midnight Color"],
  },
];

export const LATEST_VERSION = VERSIONS[VERSIONS.length - 1];
