"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "Tab 1",
    content: (
      <div className="flex flex-col gap-y-2 w-full h-full p-4">
        <h2 className="text-4xl font-cormorant font-medium text-dark mb-4">
          Tab 1 Title
        </h2>
        <p className="text-base font-sans font-light text-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: (
      <div className="flex flex-col gap-y-2 w-full h-full p-4">
        <h2 className="text-4xl font-cormorant font-medium text-dark mb-4">
          Tab 2 Title
        </h2>
        <p className="text-base font-sans font-light text-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full flex flex-col gap-y-6", className)}>
      {/* Tabs Navigation (Pill/Segmented Control style) */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-dark/5 backdrop-blur-sm border border-border/50 self-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-2.5 text-[11px] font-sans tracking-[0.18em] uppercase rounded-lg outline-none transition-colors",
              activeTab === tab.id
                ? "text-dark font-medium"
                : "text-mid hover:text-dark font-normal"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white shadow-sm rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full relative min-h-[300px] p-8 rounded-2xl bg-white/40 border border-border/30 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    x: -10,
                    filter: "blur(4px)",
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, x: 10, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.5,
                    ease: "circInOut",
                    type: "spring",
                  }}
                  className="w-full h-full"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { AnimatedTabs };
