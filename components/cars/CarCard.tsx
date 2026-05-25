import { Circle } from "lucide-react";
import { Car } from "@/types/carTypes";
import { Card, Heading, Subtitle, Badge } from "@/components/UI";

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="bg-neutral-primary-soft border border-gray-300">
      <Heading variant="h3">
        {car.make} {car.model}
      </Heading>
      <Subtitle>{car.year}</Subtitle>
      <div className="mb-2 flex w-full items-center">
        <span className="mr-2 text-sm">Colour: </span>
        <Badge>
          <Circle color={car.colour} />
        </Badge>
      </div>

      <div className="mb-2 flex w-full flex-col justify-start">
        <div className="mb-2 inline">
          <span className="mr-2 text-sm"> Engine Size: </span>
          <Badge>{car.engine_size}L</Badge>
        </div>
        <div className="mb-2 inline">
          <span className="mr-2 text-sm"> Horse Power: </span>
          <Badge>{car.horsepower}</Badge>
        </div>

        <div className="mb-2 inline">
          <span className="mr-2 text-sm"> Seats: </span>
          <Badge>{car.seats}</Badge>
        </div>

        <div className="mb-2 inline">
          <span className="mr-2 text-sm"> Top Speed: </span>
          <Badge>{car.top_speed}km/h</Badge>
        </div>
      </div>
    </Card>
  );
}
