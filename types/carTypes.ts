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

export type CarPropertyValues = string | number;

export type FilterModelInput = {
  colour: Set<CarPropertyValues>;
  engine_size: Set<CarPropertyValues>;
  horsepower: Set<CarPropertyValues>;
  make: Set<CarPropertyValues>;
  model: Set<CarPropertyValues>;
  seats: Set<CarPropertyValues>;
  top_speed: Set<CarPropertyValues>;
  year: Set<CarPropertyValues>;
};

export type FilterModel = { [k: string]: CarPropertyValues[] };

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

export type FilterValue = string | string[] | Range;

export type FilterOptions = Record<string, FilterValue>;
