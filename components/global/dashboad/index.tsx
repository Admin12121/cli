"use client";

import * as React from "react";
import { List, Compass, House, Search, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/global/dashboad/nav";
import { usePathname } from "next/navigation";
import { LogoSwitcher } from "./logo";
import Kbd from "@/components/ui/kbd";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PanalProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  children: React.ReactNode;
}

export function Dashboard({
  defaultLayout = [20, 80],
  defaultCollapsed = false,
  navCollapsedSize,
  children,
}: PanalProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [maxSize, setMaxSize] = useState(20);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let maxSizeValue;
      if (width <= 1200 && width >= 768) {
        maxSizeValue = 35 - ((width - 768) / (1200 - 768)) * 10;
      } else if (width < 768) {
        maxSizeValue = 20;
      } else {
        maxSizeValue = 20;
      }
      setMaxSize(maxSizeValue);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch max-w-[2400px]"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={maxSize}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            "p-2 max-md:hidden h-[100dvh]",
            isCollapsed &&
              "min-w-[68px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="rounded-lg dark:bg-[#0C0C0C] h-full relative w-full">
            <div className={cn("flex h-[52px] items-center justify-center")}>
              <LogoSwitcher isCollapsed={isCollapsed} />
            </div>
            {
              <div className=" p-2">
                <form>
                  <div
                    className={`relative dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white rounded-lg ${
                      isCollapsed ? "w-[36px] h-[36px]" : "w-full"
                    }`}
                  >
                    {isCollapsed ? (
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Kbd
                            keys={["command"]}
                            className="rounded-md absolute right-1 top-[4px] shadow-lg bg-neutral-900 text-white"
                          ></Kbd>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="flex items-center gap-4"
                        >
                          <span className="ml-auto text-muted-foreground">
                            search
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <>
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search"
                          className="pl-8 border-0 focus:outline-none focus-visible:ring-0"
                        />
                        <Kbd
                          keys={["command"]}
                          className="rounded-md absolute right-1 top-[4px] shadow-lg bg-neutral-900 text-white"
                        ></Kbd>
                      </>
                    )}
                  </div>
                </form>
              </div>
            }
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Getting Started",
                  collapsible: true,
                  isactive: true,
                  icon: House,
                  subLinks: [
                    {
                      title: "Introduction",
                      href: "/docs",
                      variant: pathname == "/docs" ? "default" : "ghost",
                    },
                    {
                      title: "Installation",
                      href: "/docs/installation",
                      variant:
                        pathname == "/docs/installation" ? "default" : "ghost",
                    },
                    {
                      title: "Theming",
                      href: "/docs/theming",
                      variant:
                        pathname == "/docs/theming" ? "default" : "ghost",
                    },
                    {
                      title: "CLI",
                      href: "/docs/cli",
                      variant: pathname == "/docs/cli" ? "default" : "ghost",
                    },
                  ],
                },
                {
                  title: "Installation",
                  collapsible: true,
                  isactive: true,
                  label: "2",
                  icon: Network,
                  subLinks: [
                    {
                      title: "Next.js",
                      href: "/docs/installation/next",
                      variant:
                        pathname == "/docs/installation/next"
                          ? "default"
                          : "ghost",
                    },
                    {
                      title: "React",
                      href: "/docs/installation/react",
                      variant:
                        pathname == "/docs/installation/react"
                          ? "default"
                          : "ghost",
                    },
                  ],
                },
                {
                  title: "Templates",
                  label: "9",
                  collapsible: true,
                  isactive: true,
                  icon: Compass,
                  variant: pathname.startsWith("/browser")
                    ? "default"
                    : "ghost",
                  subLinks: [
                    { title: "Portfolio", href: "/workspace/sub1" },
                    { title: "SaaS", href: "/workspace/sub2" },
                  ],
                },
                {
                  title: "Components",
                  label: "",
                  icon: List,
                  prefetch: true,
                  variant: pathname.startsWith("/courses")
                    ? "default"
                    : "ghost",
                  subLinks: [
                    { title: "Sparklin", href: "/docs/components/sparklin" },
                    { title: "Form", href: "/docs/components/form-generator" },
                    {
                      title: "Gradient Background",
                      href: "/docs/components/gradient-background",
                    },
                  ],
                },
              ]}
            />
            <div
              className={cn(
                "flex h-[52px] items-center justify-center bottom-1 absolute w-full",
                isCollapsed ? "h-[52px]" : "px-2"
              )}
            ></div>
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-transparent w-2 max-md:hidden" />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          className="p-2 overflow-hidden overflow-y-auto h-[100vh] relative"
        >
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
