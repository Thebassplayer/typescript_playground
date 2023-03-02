// @ts-check

export type StorageItem = {
  weight: number;
};
export type ShipStorage = {
  max: number;
  items: StorageItem[];
};

declare const isDeveloper: boolean;

export type Article = {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
  rating?: number;
};
