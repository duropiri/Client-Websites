"use client";
import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const PlayIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="white"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const PauseIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="white"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-pause"
  >
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

// VideoCard component to handle each video
const VideoCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleVideoClick = (
    event: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const video = event.currentTarget.previousSibling as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <video
        src={videoSrc}
        className="w-full xl:min-w-[50vw] h-full object-cover"
        autoPlay={false}
        loop
        muted
        playsInline
        onClick={handleVideoClick}
      />
      <button
        className="absolute inset-0 flex items-center justify-center"
        onClick={togglePlayPause}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

const VideoTestimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const Videos = [
    {
      src: "/images/chachacha/video1.mp4",
      title: "Lorem ipsum",
    },
    {
      src: "/images/chachacha/video1.mp4",
      title: "Lorem ipsum",
    },
    {
      src: "/images/chachacha/video1.mp4",
      title: "Lorem ipsum",
    },
    {
      src: "/images/chachacha/video1.mp4",
      title: "Lorem ipsum",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto ">
      <div className="flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[20ch]">
          Lorem ipsum dolor sit amet
        </h2>
        <Carousel className="flex flex-col items-center justify-center w-full overflow-hidden">
          <div className="flex flex-col xl:flex-row items-center justify-center mt-12 w-[90vw]">
            <div className="hidden xl:flex flex-col items-center justify-center z-10">
              <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
            <CarouselContent className="-ml-1">
              {Videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex flex-col items-start justify-start min-w-[20vw] min-h-[497px] aspect-[9/16]"
                >
                  <div className="p-1 flex flex-col w-full h-full">
                    <Card className="flex flex-col w-full h-full rounded-lg overflow-hidden">
                      <CardContent className="relative flex flex-col items-center aspect-square justify-start w-full h-full p-0">
                        {/* Image and Icon */}
                        <div className="relative flex flex-col items-center justify-start w-full h-full z-10">
                          <div className="relative flex flex-col items-center justify-start w-full h-full overflow-hidden">
                            {/* <Image
                              src={video.src}
                              alt={video.title}
                              layout="fill"
                              objectFit="cover"
                              className="w-full h-full"
                            /> */}
                            {/* <video
                              src={video.src}
                              className="w-full h-full object-cover"
                              autoPlay={false}
                              loop
                              muted
                              playsInline
                              onClick={handleVideoClick}
                            /> */}
                            <VideoCard videoSrc={video.src} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:flex flex-col items-center justify-center z-10">
              <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
            <div className="xl:hidden flex flex-row items-center justify-center gap-10 mt-12">
              <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
              <CarouselDots
                itemCount={Videos.length}
                className="flex flex-row h-[11px]"
              />
              <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
});
VideoTestimonials.displayName = "VideoTestimonials";
export default VideoTestimonials;
