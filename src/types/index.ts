export type ImageType =
  | "blackberry"
  | "blueberry"
  | "cantaloupe"
  | "chiliMango"
  | "cinnamon"
  | "greenApple"
  | "sourLemon"
  | "watermelon";

export type Coffee = {
  id: number;
  name: string;
  country: string;
  region: string;
  subRegion: string;
  roastLevel: "Light" | "Light-Medium" | "Medium" | "Medium-Dark" | "Dark";
  type: "Single Origin" | "Blend";
  bagWeight: "8" | "10" | "12";
  price: string;
  flavorProfile: string;
  img: ImageType;
};
