import Image from 'next/image';
import React from 'react';

interface HeroProps {
  media: string;
  isVideo?: boolean;
}

const Hero: React.FC<HeroProps> = ({ media, isVideo = false }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={media}
          autoPlay
          loop
          muted
        />
      ) : (
        <Image
          className="absolute inset-0 w-full h-full"
          src={media}
          alt="Hero Media"
          layout="fill"
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default Hero;
