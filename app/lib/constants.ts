export type groupsType = { id: number; belong: string; group: string }[];

export type itemType = {
  id: number;
  name: string;
  photos: string[];
  rentalPeriod: number;
  descriptionList: string[];
};

export const fetchUrl = "13.209.80.4";
