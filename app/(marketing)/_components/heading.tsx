"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 dark:bg-[#1F1F1F]">
      <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
        Your Ideas, Document, & Planes
        <span className="underline">Kotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Kotion is the connected workspace where
        <br />
        better, faster work happens.
        <Button>
          Enter Kotion
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </h3>
    </div>
  );
};
