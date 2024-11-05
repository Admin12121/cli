import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

interface LogoSwitcherProps {
  isCollapsed: boolean;
}

export function LogoSwitcher({ isCollapsed }: LogoSwitcherProps) {
  return (
    <div
      className={cn(
        "flex items-center px-1 gap-0 w-full [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
        isCollapsed &&
          "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
      )}
    >
      <span className="flex gap-2 items-center cursor-pointer w-full">
          <div className="logo">
            <Link href="/">
              <span className={cn("bg-white flex w-[45px] h-[45px] rounded-lg", isCollapsed && "w-[36px] h-[36px]")}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </span>
            </Link>
          </div>
          <h1
            className="font-semibold"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Jhapali-ui
          </h1>
      </span>
    </div>
  );
}
