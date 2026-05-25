import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("@/hooks/useCarData", () => ({
  useCarData: vi.fn(),
}));

vi.mock("@/hooks/useCarFilters", () => ({
  useCarFilters: vi.fn(),
}));

import Home from "@/app/page";
import { cars } from "@/tests/fixtures/cars";
import { useCarData } from "@/hooks/useCarData";
import { useCarFilters } from "@/hooks/useCarFilters";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Home Page", () => {
  it("renders car cards", () => {
    (useCarData as any).mockReturnValue({
      carList: cars,
      loading: false,
    });

    (useCarFilters as any).mockReturnValue({
      setSearchInput: vi.fn(),
      searchInput: "",
      setFilterValue: vi.fn(),
      filterValue: {},
      filterOptions: {
        make: ["Make 1", "Make 2"],
        model: ["Model 1", "Model 2"],
      },
      displayCars: [
        { make: "Make 1", model: "Model 1", year: 2020 },
        { make: "Make 2", model: "Model 2", year: 1960 },
      ],
    });

    render(<Home />);

    expect(screen.getByText("Make 1")).toBeInTheDocument();
    expect(screen.getByText("Make 2")).toBeInTheDocument();
  });
  it("shows loading icon", () => {
    (useCarData as any).mockReturnValue({
      carList: [],
      loading: true,
    });

    (useCarFilters as any).mockReturnValue({
      displayCars: [],
      filterOptions: null,
    });

    render(<Home />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
  it("calls search input handler", async () => {
    const user = userEvent.setup();

    const setSearchInput = vi.fn();

    (useCarData as any).mockReturnValue({
      carList: cars,
      loading: false,
    });

    (useCarFilters as any).mockReturnValue({
      setSearchInput,
      searchInput: "",
      setFilterValue: vi.fn(),
      filterValue: {},
      filterOptions: {},
      displayCars: [],
    });

    render(<Home />);

    const input = screen.getByRole("textbox");

    await user.type(input, "Make 1");

    expect(setSearchInput).toHaveBeenCalled();
  });
  it("shows empty state when no cars are found", () => {
    (useCarData as any).mockReturnValue({
      carList: [],
      loading: false,
    });

    (useCarFilters as any).mockReturnValue({
      setSearchInput: vi.fn(),
      searchInput: "",
      setFilterValue: vi.fn(),
      filterValue: {},
      filterOptions: {},
      displayCars: [],
    });

    render(<Home />);

    expect(screen.getByText(/No cars found/i)).toBeInTheDocument();
  });
});
