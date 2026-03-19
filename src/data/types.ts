export type Kudo = {
  id: string;
  author: string;
  message: string;
  color: string;
};

export type Board = {
  id: string;
  title: string;
  description: string;
  kudos: Kudo[];
};
