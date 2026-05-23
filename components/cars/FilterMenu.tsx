import _ from "lodash";
import { useCallback, useMemo, useState } from "react";

import { CarFilters, FilterModel, Range } from "@/types/carTypes";
import { Heading } from "@/components/UI";
import { IconFilter, RangeFilter, SelectFilter } from "@/components/cars";

type filterRenderOption = "icon" | "range";

type CarFilterProps = {
  filterOptions: FilterModel;
  filterUIConfig?: Record<keyof FilterModel, filterRenderOption>;
  className?: string;
  filterValues: Partial<CarFilters>;
  handleChange?: (value: Partial<CarFilters>) => void;
};

const renderFilter = ({
  filterOptions,
  filterUIConfig,
  handleChange,
  filterValues,
}: CarFilterProps) => {
  const [filter, setFilter] = useState<Partial<CarFilters>>({});

  const handleFilter = useCallback(
    (filter: Partial<CarFilters>) => {
      handleChange && handleChange(filter);
      setFilter(filter);
    },
    [handleChange],
  );

  return (
    filterOptions &&
    Object.entries(filterOptions).map(([key, values]) => {
      const config = filterUIConfig?.[key as keyof FilterModel];
      const typedKey = key as keyof CarFilters;

      switch (config) {
        case "icon":
          return (
            <div key={typedKey}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(typedKey)}
              </Heading>
              <IconFilter
                value={filterValues[typedKey] as string[]}
                options={values as string[]}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [typedKey]: value })
                }
              />
            </div>
          );

        case "range":
          return (
            <div key={typedKey}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(typedKey)}
              </Heading>
              <RangeFilter
                value={filterValues[typedKey] as Range}
                values={values as number[]}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [typedKey]: value })
                }
              />
            </div>
          );

        default:
          return (
            <div key={typedKey}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(typedKey)}
              </Heading>
              <SelectFilter
                value={filterValues[typedKey] as string}
                options={values}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [typedKey]: value })
                }
              />
            </div>
          );
      }
    })
  );
};

export function FilterMenu({
  filterOptions,
  filterUIConfig,
  className,
  handleChange,
  filterValues,
}: CarFilterProps) {
  return (
    <div
      className={`flex w-full flex-col rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 ${className}`}
    >
      <Heading variant="h4" className="mb-2">
        Filters
      </Heading>
      {renderFilter({
        filterOptions,
        filterUIConfig,
        handleChange,
        filterValues,
      })}
    </div>
  );
}
