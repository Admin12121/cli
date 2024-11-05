"use client";
import "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "../toogle-mode";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Github from "@/icons/github";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = ({
  isLoading = false,
  position = false,
  className,
}: {
  className?: string;
  isLoading?: boolean;
  position?: boolean;
  showHome?: string | null;
}) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleMouseMove = (e: any) => {
    const navElements = document.getElementsByClassName("nav");
    for (let i = 0; i < navElements.length; i++) {
      const card = navElements[i];
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <>
      <motion.div
        className={cn("Nav_wrapper", className)}
        style={{ position: position ? "absolute" : "fixed" }}
      >
        <div className="nav" onMouseMove={handleMouseMove}>
          <motion.div
            initial={{ height: 54 }}
            animate={{ height: toggle ? "24rem" : 54 }}
            transition={{ duration: 0.3 }}
            className="nav_wrap flex"
          >
            <span className="nav_wrap flex justify-between items-center h-[52px]">
              {position ? (
                ""
              ) : (
                <span className="flex gap-2 items-center justify-center cursor-pointer">
                  <div className="logo">
                    <Link href="/">
                      <span>
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
              )}
              <span className="ml-3">
                <nav className="flex items-center gap-4 text-sm lg:gap-6">
                  <Link
                    href="/docs"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname === "/docs"
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/docs/components"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/docs/components") &&
                        !pathname?.startsWith("/docs/component/chart")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Components
                  </Link>
                  <Link
                    href="/blocks"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/blocks")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Blocks
                  </Link>
                  <Link
                    href="/charts"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/docs/component/chart") ||
                        pathname?.startsWith("/charts")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Charts
                  </Link>
                  <Link
                    href="/themes"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/themes")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Themes
                  </Link>
                  <Link
                    href="/examples"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/examples")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Examples
                  </Link>
                  <Link
                    href="/colors"
                    className={cn(
                      "transition-colors hover:text-white",
                      pathname?.startsWith("/colors")
                        ? "dark:text-foreground text-white"
                        : "dark:text-foreground/60 text-white/80"
                    )}
                  >
                    Colors
                  </Link>
                </nav>
              </span>
              <span className="hidden md:flex gap-2 items-center justify-center h-[52px]">
                <Button
                  asChild
                  className="w-[45px] h-[45px] p-0 bg-white shadow-none"
                >
                  <Link
                    href="https://github.com/Admin12121/cli"
                    target="_blank"
                    className="dark:invert"
                  >
                    <Github />
                  </Link>
                </Button>
                <ModeToggle />
              </span>
              <span className="flex md:hidden">
                <Button
                  className="h-11 w-11 p-0 rounded-[8px]"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  <Menu className="w-7 h-7" />
                </Button>
              </span>
            </span>
            <span className="bg-[#202224] w-full h-[calc(100%-56px)] top-14 flex justify-between items-center relative rounded-md"></span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
