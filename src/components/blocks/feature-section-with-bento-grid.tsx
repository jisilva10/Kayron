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
      description: "Track and manage your project issues with ease.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 md:col-span-2 border-b md:border-r border-border",
    },
    {
      title: "Capture pictures with AI",
      description: "Capture stunning photos effortlessly.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 border-b border-border",
    },
    {
      title: "Watch our AI on YouTube",
      description: "Get to know about our product on YouTube.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-2 border-b md:border-r md:border-b-0 border-border",
    },
    {
      title: "Deploy in seconds",
      description: "Deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-2 border-border",
    },
  ];

  return (
    <div className="relative z-20 pb-12 w-full">
      <div className="w-full mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 border border-border bg-transparent rounded-xl shadow-sm overflow-hidden">
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
    <div className={cn(`p-6 relative overflow-hidden flex flex-col justify-start`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="w-full text-left tracking-tight text-dark text-xl font-cormorant font-semibold mb-1 relative z-20">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "w-full text-left",
        "text-sm text-mid font-sans font-normal leading-relaxed mb-4 relative z-20"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 px-2 gap-4 h-full min-h-[140px]">
      <div className="w-full p-2 mx-auto bg-transparent shadow-sm group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="header"
            width={400}
            height={400}
            className="h-full w-full aspect-video object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-4 h-full min-h-[140px] group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-12 w-12 absolute z-10 inset-0 text-red-500 m-auto" />
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            alt="header"
            width={400}
            height={400}
            className="h-full w-full aspect-video object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
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
    <div className="relative flex flex-col items-start p-4 gap-4 h-full min-h-[140px] overflow-hidden">
      <div className="flex flex-row -ml-8">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-2 p-1 bg-transparent border border-border flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="images"
              width="200"
              height="200"
              className="rounded-lg h-16 w-16 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-40 flex flex-col items-center relative bg-transparent mt-4 overflow-hidden">
      <Globe className="absolute -right-4 -bottom-20" />
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
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.96, 0.94, 0.92], /* Cream */
      markerColor: [0.72, 0.60, 0.04], /* Gold */
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
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
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
