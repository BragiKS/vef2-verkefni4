export type Status = {
  name: string;
  description: string;
};

export type Mission = {
  name: string;
  description: string;
};

export type Window = {
  start: Date;
  end: Date;
};

export type Launch = {
  id: number;
  name: string;
  image: string;
  status: Status;
  window: Window;
  mission: Mission;
};
