import { describe, expect, it } from "vitest";
import { filterCars, buildFilterOptions } from "@/lib/filters";
import { cars } from "@/tests/fixtures/cars";

describe("buildFilterOptions", () => {
  it("groups unique values per field", () => {
    const result = buildFilterOptions(cars as any);

    expect(result.make).toEqual(["Make 1", "Make 2", "Make 3"]);
  });
  it("sorts values", () => {
    const result = buildFilterOptions(cars as any);

    expect(result.model).toEqual(["Model 1", "Model 2", "Model 3", "Model 5"]);
  });
  it("removes duplicates", () => {
    const duplicateCars = [
      { make: "Make 1", model: "Model 3" },
      { make: "Make 1", model: "Model 3" },
    ];

    const result = buildFilterOptions(duplicateCars as any);

    expect(result.make).toEqual(["Make 1"]);
    expect(result.model).toEqual(["Model 3"]);
  });
});

describe("filterCars", () => {
  it("filters by make", () => {
    const result = filterCars(cars, { make: "Make 1" }, "");

    expect(result).toHaveLength(2);
    expect(result[0].make).toBe("Make 1");
  });
  it("filters by year range", () => {
    const result = filterCars(cars as any, { year: [2019, 2021] }, "");

    expect(result).toHaveLength(2);
    expect(result.map((c) => c.year)).toEqual([2020, 2019]);
  });
  it("filters by search input", () => {
    const result = filterCars(cars as any, {}, "Model 1");

    expect(result).toHaveLength(1);
    expect(result[0].model).toBe("Model 1");
  });
  it("filters by make + range", () => {
    const result = filterCars(
      cars as any,
      {
        make: "Make 1",
        year: [2019, 2020],
      },
      "",
    );

    expect(result).toHaveLength(1);
    expect(result[0].model).toBe("Model 1");
  });
  it("returns all cars when no filters applied", () => {
    const result = filterCars(cars as any, {}, "");

    expect(result).toHaveLength(cars.length);
  });
  it("filters by string match (colour)", () => {
    const result = filterCars(cars as any, { colour: "red" }, "");

    expect(result.every((c) => c.colour === "red")).toBe(true);
  });
  it("search input overrides filters when no match", () => {
    const result = filterCars(
      cars as any,
      { make: "Make 1" },
      "does-not-exist",
    );

    expect(result).toHaveLength(0);
  });
});
