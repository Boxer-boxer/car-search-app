import { Car } from "@/types/carType";

import { Heading } from "@/components/UI";

type CarFilterProps = {};

export function FilterMenu() {
  return (
    <div className="flex w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900">
      <Heading variant="h6">Filters</Heading>
    </div>
  );
}
