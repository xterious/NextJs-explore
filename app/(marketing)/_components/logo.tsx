import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 dark:bg-[#1F1F1F]">
      <Image
        src="/kblack.png"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/klogo.png"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Kotion</p>
    </div>
  );
};
