"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div className={cn("w-full flex flex-col gap-y-8", className)}>
      {/* Tabs Navigation */}
      <div className="flex gap-0 border-b border-border mb-0 w-full overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-8 py-4 text-[13px] font-sans tracking-[0.18em] uppercase outline-none transition-colors",
              activeTab === tab.id
                ? "text-dark font-medium"
                : "text-light hover:text-dark font-normal"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-underline"
                className="absolute left-0 right-0 bottom-[-1px] h-[1.5px] bg-gold"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full relative min-h-[300px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.8,
                  ease: "circOut",
                }}
                className="w-full"
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
