import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  items: React.ReactNode[];
  delay?: number;
  stopOnInteraction?: boolean;
  className?: string;
}

export const CarouselPlugin: React.FC<CarouselProps> = ({
  items,
  delay = 2000,
  stopOnInteraction = false,
  className = "w-full max-w-xs",
}) => {
  const plugin = React.useRef(Autoplay({ delay, stopOnInteraction }));

  const [activeIndex, setActiveIndex] = React.useState(0);

  // Mock carousel ref and state management
  const carouselRef = React.useRef(null);
  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  // Update active index when item changes (mocked)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, items.length]);

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className={className}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex gap-[15vw]">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center basis-auto p-0 w-full"
            >
              <div className="flex items-center justify-center">
                <Card className="flex items-center justify-center w-[40vw] h-[60vh]">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {item}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row items-center justify-between mt-12 outline outline-1">
          <CarouselPrevious className="flex flex-col bg-[#ff6014] p-2 w-[5vw] h-[5vw] outline outline-1" />
          <CarouselDots className="flex flex-row flex-grow h-[5vw]"/>
          <CarouselNext className="flex flex-col bg-[#ff6014] p-2 w-[5vw] h-[5vw] outline outline-1" />
        </div>
      </Carousel>
    </>
  );
};
