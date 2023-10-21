"use client";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href="/documents">
              Enter Kotion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Get Kotion <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </h3>
    </div>
  );
};
