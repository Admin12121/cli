"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
                            variant: link.variant || 'ghost',
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
                    <SidebarMenu className="w-full">
                      <SidebarMenuItem
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
                      </SidebarMenuItem>
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
                    </SidebarMenu>
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
