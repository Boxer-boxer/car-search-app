import _ from "lodash";
import { useCallback, useMemo, useState } from "react";

import { CarFilters, FilterModel } from "@/types/carTypes";
import { Heading } from "@/components/UI";
import { IconFilter, RangeFilter, SelectFilter } from "@/components/cars";

type filterRenderOption = "icon" | "range";

type CarFilterProps = {
  filterOptions: FilterModel;
  filterUIConfig?: Record<keyof FilterModel, filterRenderOption>;
  className?: string;
  handleChange?: (value: Partial<CarFilters>) => void;
};

const renderFilter = ({
  filterOptions,
  filterUIConfig,
  handleChange,
}: CarFilterProps) => {
  const [filter, setFilter] = useState<Partial<CarFilters>>({});

  const handleFilter = useCallback(
    (filter) => {
      handleChange && handleChange(filter);
      setFilter(filter);
    },
    [filter],
  );

  return (
    filterOptions &&
    Object.entries(filterOptions).map(([key, values]) => {
      const config = filterUIConfig?.[key as keyof FilterModel];

      switch (config) {
        case "icon":
          return (
            <div key={key}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(key)}
              </Heading>
              <IconFilter
                values={values}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [key]: value })
                }
                key={key}
              />
            </div>
          );

        case "range":
          return (
            <div key={key}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(key)}
              </Heading>
              <RangeFilter
                values={values as number[]}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [key]: value })
                }
                key={key}
              />
            </div>
          );

        default:
          return (
            <div key={key}>
              <Heading variant="h5" className="mb-2">
                {_.startCase(key)}
              </Heading>
              <SelectFilter
                values={values}
                handleOnChange={(value) =>
                  handleFilter({ ...filter, [key]: value })
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
}: CarFilterProps) {
  return (
    <div
      className={`flex w-full flex-col rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 ${className}`}
    >
      <Heading variant="h4" className="mb-2">
        Filters
      </Heading>
      {renderFilter({ filterOptions, filterUIConfig, handleChange })}
    </div>
  );
}
