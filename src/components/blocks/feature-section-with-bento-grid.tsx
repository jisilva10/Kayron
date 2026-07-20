import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Track issues effectively",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-border",
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-border",
    },
    {
      title: "Watch our AI on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-border",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none border-border",
    },
  ];
  return (
    <div className="relative z-20 pb-10 lg:pb-20 max-w-[1200px] mx-auto w-full px-6 md:px-12">

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 border border-border bg-white rounded-xl shadow-sm">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-6 sm:p-10 relative overflow-hidden flex flex-col justify-start`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="w-full text-left tracking-tight text-dark text-2xl md:text-3xl font-cormorant font-semibold mb-2 relative z-20">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "w-full text-left",
        "text-sm md:text-base text-mid font-sans font-normal leading-relaxed mb-6 relative z-20"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-cream shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white via-white to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-border flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-border flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.96, 0.94, 0.92], /* Cream color approximation */
      markerColor: [0.72, 0.60, 0.04], /* Gold color approximation */
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      // @ts-ignore
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
