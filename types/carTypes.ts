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

export type FilterModelInput = {
  colour: Set<string | number>;
  engine_size: Set<string | number>;
  horsepower: Set<string | number>;
  make: Set<string | number>;
  model: Set<string | number>;
  seats: Set<string | number>;
  top_speed: Set<string | number>;
  year: Set<string | number>;
};

export type FilterModel = { [k: string]: (string | number)[] };

export type Range = [number, number];

export type CarFilters = {
  colour: string[];
  engine_size: Range;
  horsepower: Range;
  make: string;
  model: string;
  seats: Range;
  top_speed: Range;
  year: Range;
};

export type FilterOptions = Record<string, string | string[] | Range>;
