"use client";

import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import Kbd from "@/components/ui/kbd";
import Image from "next/image";
import {
  List,
  Compass,
  House,
  Search,
  Network,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PanalProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  children: React.ReactNode;
}

interface Sublink {
  title: string;
  href: string;
  variant?: "default" | "ghost";
}

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    href?: string;
    variant?: "default" | "ghost";
    prefetch?: boolean;
    subLinks?: Sublink[];
    collapsible?: boolean;
    isactive?: boolean;
  }[];
}

interface LogoSwitcherProps {
  isCollapsed: boolean;
}

export function Sidebar({
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
                  href: "/docs",
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
                  href: "/browser",
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
                  href: "/courses",
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

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <SidebarProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 data-[collapsed=true]:py-2 w-full"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 w-full">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div
                        className={cn(
                          buttonVariants({
                            variant: link.variant,
                            size: "icon",
                          }),
                          "h-9 w-9",
                          link.variant === "default" &&
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        <span className="sr-only">{link.title}</span>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className={cn(
                        "w-56 dark:bg-muted border-0 outline-0",
                        isCollapsed && "relative",
                        "left-4"
                      )}
                      align="end"
                      forceMount
                    >
                      <DropdownMenuGroup>
                        {link.subLinks?.map((subItem) => (
                          <DropdownMenuItem key={subItem.title} className="p-0">
                            <Link
                              href={subItem.href || "#"}
                              className={cn(
                                buttonVariants({
                                  variant: subItem.variant || "ghost",
                                  size: "sm",
                                }),
                                "flex items-center text-xs justify-start w-full hover:dark:!bg-neutral-900",
                                subItem.variant === "default" &&
                                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
                              )}
                            >
                              <span>{subItem.title}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <div key={index} className="w-full">
                {link.collapsible ? (
                  <SidebarMenu>
                    <Collapsible
                      asChild
                      defaultOpen={link.isactive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={link.title}
                            className={cn(
                              buttonVariants({
                                variant: link.variant || "ghost",
                                size: "sm",
                              }),
                              link.variant === "default" &&
                                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                              "justify-start w-full"
                            )}
                          >
                            {link.icon && <link.icon />}
                            <span>{link.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {link.subLinks?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link
                                    href={subItem.href || "#"}
                                    className={cn(
                                      buttonVariants({
                                        variant: subItem.variant || "ghost",
                                        size: "sm",
                                      }),
                                      "flex items-center text-xs justify-start",
                                      subItem.variant === "default" &&
                                        "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
                                    )}
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  </SidebarMenu>
                ) : (
                  <>
                    <div className="w-full">
                      <Link
                        href={link.href || "#"}
                        prefetch={link.prefetch ? link.prefetch : false}
                        className={cn(
                          buttonVariants({ variant: link.variant, size: "sm" }),
                          link.variant === "default" &&
                            "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                          "justify-start w-full"
                        )}
                      >
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.title}
                        {link.label && (
                          <span
                            className={cn(
                              "ml-auto",
                              link.variant === "default" &&
                                "text-background dark:text-white"
                            )}
                          >
                            {link.label}
                          </span>
                        )}
                      </Link>
                      {link.subLinks && link.subLinks.length > 0 && (
                        <SidebarMenuSub>
                          {link.subLinks.map((subLink, subIndex) => (
                            <SidebarMenuSubItem key={subIndex}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={subLink.href || "#"}
                                  className="dark:hover:bg-zinc-800 flex items-center text-xs"
                                >
                                  {subLink.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </nav>
      </div>
    </SidebarProvider>
  );
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
            <span
              className={cn(
                "bg-white flex w-[45px] h-[45px] rounded-lg",
                isCollapsed && "w-[36px] h-[36px]"
              )}
            >
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
 