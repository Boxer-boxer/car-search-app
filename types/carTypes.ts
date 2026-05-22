export type Car = {
  colour: string;
  engine_size: number;
  horsepower: number;
  make: string;
  model: string;
  seats: number;
  top_speed: number;
  year: number;
};

export type FilterOptions = Record<string, (string | number)[]>;
