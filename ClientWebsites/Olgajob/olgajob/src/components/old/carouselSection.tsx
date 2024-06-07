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


const carouselSection = ({
}) => {

  const delay = 3000;
  const stopOnInteraction = false;
  const items = [
    {
      name: "Emek Altun",
      description:
        "Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.",
      title: "CEO @ Vitaservices",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6642796850b7b15735eb52fd_Untitled%20design-9.png",
    },
    {
      name: "Emek Altun",
      description:
        "Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.",
      title: "CEO @ Vitaservices",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6642796850b7b15735eb52fd_Untitled%20design-9.png",
    },
    {
      name: "Emek Altun",
      description:
        "Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.",
      title: "CEO @ Vitaservices",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6642796850b7b15735eb52fd_Untitled%20design-9.png",
    },
  ];

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
    <section className="flex flex-col items-center relative pt-12 min-h-[100vh] overflow-hidden ">
      {/* <CarouselPlugin items={items} delay={3000} className="flex flex-col justify-center w-[40vw] " /> */}
      <Carousel
        plugins={[plugin.current]}
        className="flex flex-col justify-center w-[40vw] "
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
                  <CardContent className="flex flex-col gap-10 aspect-square items-center justify-center p-6 overflow-hidden">
                    <div className=" text-center w-full max-w-[800px] testimonials__descr">
                      <p className="f-18">{item.description}</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                      <div className="overflow-hidden rounded-full w-[5.56rem] h-[5.56rem] mb-[1.67rem]">
                        <img alt="" loading="eager" src={item.img} />
                      </div>
                      <div className="mb-[0.56rem]">
                        <div className="f-24">{item.name}</div>
                      </div>
                      <div className="flex opacity-50">{item.title}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row items-center justify-between mt-12 outline outline-1">
          <CarouselPrevious className="flex flex-col bg-[#ff6014] p-2 w-[5vw] h-[5vw] outline outline-1" />
          <CarouselDots className="flex flex-row flex-grow h-[5vw]" />
          <CarouselNext className="flex flex-col bg-[#ff6014] p-2 w-[5vw] h-[5vw] outline outline-1" />
        </div>
      </Carousel>
    </section>
  );
};

export default carouselSection;
