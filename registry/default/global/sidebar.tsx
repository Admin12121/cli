"use client";

import React, {
  ReactNode,
  Children,
  isValidElement,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { useRouter, usePathname } from "next/navigation";
import { VariantProps, cva } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, LucideIcon, ChevronsUpDown } from "lucide-react";

import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Seperator from "@/components/global/seperator";

interface SidebarProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  children: React.ReactNode;
}

interface SidebarContextType {
  provider: boolean;
  isCollapsed: boolean;
  links?: SidebarNavProps["links"];
  SetLinks?: any
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const Sidebar = ({
  defaultLayout = [20, 80],
  navCollapsedSize,
  children,
}: SidebarProps) => {
  const [links, SetLinks] = useState<SidebarNavProps["links"]>()
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [maxSize, setMaxSize] = useState(20);
  
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

  const sidebarNav = useMemo(() => {
    let nav: ReactNode = null;
    const content: ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === SidebarNav) {
        nav = child;
      } else {
        content.push(child);
      }
    });
    return { nav, content };
  }, [children]);



  return (
    <SidebarContext.Provider value={{ provider: true, isCollapsed, links , SetLinks}}>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full items-stretch max-w-[2400px]"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
              sizes
            )}`;
          }}
        >
          {sidebarNav.nav && (
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
              {sidebarNav.nav}
            </ResizablePanel>
          )}
          {sidebarNav.nav && (
            <ResizableHandle className="bg-transparent w-2 max-md:hidden" />
          )}
          <ResizablePanel>{sidebarNav.content}<Navigationbar/></ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

interface Sublink {
  title: string;
  href: string;
  variant?: "default" | "ghost";
}

interface SidebarNavProps {
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
  children: ReactNode;
  className?: string;
}

const SidebarNav = ({ links, children, className }: SidebarNavProps) => {
  const context = useContext(SidebarContext);
  const pathname = usePathname();

  if (!context) {
    throw new Error("SidebarNav must be used within a Sidebar component.");
  }

  const { isCollapsed , SetLinks} = context;

  useEffect(() => {
    if (context && links) {
      SetLinks(links)
    }
  }, [links, context]);

  let headerContent: ReactNode = null;
  let footerContent: ReactNode = null;
  const mainContent: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === Header) {
      headerContent = child;
    } else if (isValidElement(child) && child.type === Footer) {
      footerContent = child;
    } else {
      mainContent.push(child);
    }
  });

  const determineVariant = (href: string | undefined): "default" | "ghost" => {
    return pathname === href ? "default" : "ghost";
  };
  return (
    <div className="rounded-lg dark:bg-[#0C0C0C] h-full relative w-full">
      {headerContent && headerContent}
      <div
        data-collapsed={isCollapsed}
        className={cn(
          "group flex flex-col gap-4 data-[collapsed=true]:py-2 w-full overflow-hidden overflow-y-auto",
          className,
          {
            "h-[calc(100vh-80px)]": !headerContent,
            "h-[calc(100vh-130px)]": headerContent && footerContent,
            "h-[calc(100vh-70px)]": headerContent && !footerContent,
          }
        )}
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 w-full">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Link
                        href={link.href || "#"}
                        className={cn(
                          buttonVariants({
                            variant: determineVariant(link.href),
                            size: "icon",
                          }),
                          "h-9 w-9",
                          determineVariant(link.href) === "default" &&
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        )}
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </DropdownMenuTrigger>
                    {!link.href && (
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
                            <DropdownMenuItem
                              key={subItem.title}
                              className="p-0"
                            >
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
                    )}
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
                                variant: determineVariant(link.href) || "ghost",
                                size: "sm",
                              }),
                              determineVariant(link.href) === "default" &&
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
                  <div className="w-full">
                    <Link
                      href={link.href || "#"}
                      prefetch={link.prefetch ? link.prefetch : false}
                      className={cn(
                        buttonVariants({
                          variant: determineVariant(link.href),
                          size: "sm",
                        }),
                        determineVariant(link.href) === "default" &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "justify-start w-full"
                      )}
                    >
                      {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                      {link.title}
                      {link.label && (
                        <span
                          className={cn(
                            "ml-auto",
                            determineVariant(link.href) === "default" &&
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
                )}
              </div>
            )
          )}
        </nav>
      </div>
      {footerContent && footerContent}
    </div>
  );
};

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));

SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
));

SidebarMenuItem.displayName = "SidebarMenuItem";

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    // const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          //   hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

interface HeaderProps {
  logo?: string;
  label?: string;
  menuItems?: {
    title: string;
    icon: LucideIcon;
    href?: string;
    onClick?: () => void;
  }[];
  children?: ReactNode;
}

const Header = ({ logo, label, children, menuItems }: HeaderProps) => {
  const router = useRouter();
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Header must be used within a Sidebar component.");
  }

  const { isCollapsed } = context;
  return (
    <>
      {children ? (
        children
      ) : (
        <div className={cn("flex h-[52px] items-center justify-center")}>
          <div
            className={cn(
              "relative flex items-center px-1 gap-0 w-full [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
              isCollapsed &&
                "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
            )}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="flex gap-2 items-center cursor-pointer w-full">
                  {logo && (
                    <div className="logo">
                      <span
                        className={cn(
                          "bg-white flex w-[45px] h-[45px] rounded-lg",
                          isCollapsed && "w-[36px] h-[36px]"
                        )}
                      >
                        <Image
                          src={logo || ""}
                          alt="logo"
                          width={45}
                          height={45}
                          className="object-contain"
                        />
                      </span>
                    </div>
                  )}
                  <h1
                    className={cn(
                      "font-semibold",
                      !logo && "px-2",
                      !logo && isCollapsed && "text-2xl"
                    )}
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {label && isCollapsed ? `${label.slice(0, 1)}` : label}
                  </h1>
                  {menuItems && menuItems.length > 0 && (
                    <ChevronsUpDown className="w-4 h-4 absolute right-3" />
                  )}
                </span>
              </DropdownMenuTrigger>
              {menuItems && menuItems.length > 0 && (
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
                    {menuItems.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="gap-2 hover:dark:!bg-neutral-900"
                        onClick={() => {
                          if (item.href) {
                            router.push(item.href);
                          } else if (item.onClick) {
                            item.onClick();
                          }
                        }}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        {item.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
            <Seperator className={cn("top-7", isCollapsed && "top-9")} />
          </div>
        </div>
      )}
    </>
  );
};

const Footer = ({
  data,
  left = true,
  menuItems = [],
  children,
}: {
  data?: any;
  left?: boolean;
  menuItems?: {
    title: string;
    icon: LucideIcon;
    href?: string;
    onClick?: () => void;
  }[];
  children?: ReactNode;
}) => {
  const context = useContext(SidebarContext);
  const router = useRouter();

  if (!context) {
    throw new Error("Header must be used within a Sidebar component.");
  }

  const { isCollapsed } = context;
  return (
    <>
      {children ? (
        children
      ) : (
        <div
          className={cn(
            "flex h-[52px] items-center justify-center bottom-1 absolute w-full backdrop-blur-md",
            isCollapsed ? "h-[52px]" : "px-2"
          )}
        >
          <Seperator className={cn("-top-1")} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className={cn(
                  "relative h-11 w-full p-1 rounded-md flex items-center justify-start",
                  isCollapsed && "h-9 w-9 p-0 justify-center"
                )}
              >
                <div className="flex items-center space-x-4">
                  <Avatar
                    className={cn(
                      "h-9 w-9 rounded-md bg-white",
                      isCollapsed && "h-8 w-8 p-0"
                    )}
                  >
                    <AvatarImage src="/logo.png" />
                    <AvatarFallback className="bg-transparent">
                      OM
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "flex items-start justify-start flex-col",
                      isCollapsed && "hidden"
                    )}
                  >
                    <p className="text-sm font-medium text-muted-foreground leading-none">
                      {data?.name}
                    </p>
                    <p className="text-xs text-zinc-600">{data?.email}</p>
                  </div>
                  {menuItems.length > 0 && (
                    <ChevronsUpDown className="w-4 h-4 absolute right-3" />
                  )}
                </div>
              </Button>
            </DropdownMenuTrigger>
            {menuItems.length > 0 && (
              <DropdownMenuContent
                className={cn(
                  "w-56 dark:bg-muted border-0 outline-0",
                  isCollapsed && "relative",
                  left ? "left-4" : "-top-2"
                )}
                align="end"
                forceMount
              >
                <DropdownMenuGroup>
                  {menuItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="gap-2 hover:dark:!bg-neutral-900"
                      onClick={() => {
                        if (item.href) {
                          router.push(item.href);
                        } else if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      )}
    </>
  );
};

const container = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Navigationbar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Navigationbar must be used within a Sidebar component.");
  }
  const { links } = context;
  const [menu, setMenu] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseMove = (e: any) => {
    for (const card of document.getElementsByClassName("navigationbar")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const determineVariant = (href: string | undefined): "default" | "ghost" => {
    return pathname === href ? "default" : "ghost";
  };

  return (
    <>
      <div className="w-full relative flex lg:hidden">
        <motion.span className="w-full fixed bottom-0 h-0 flex items-center justify-center z-50">
          <motion.div
            className="navigationbar"
            style={{
              height: menu ? "335px" : "45px",
              bottom: menu ? "180px" : "35px",
              alignItems: menu ? "end" : "end",
              transition: ".5s ease",
            }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              style={{
                height: menu ? "285px" : "0px",
                padding: menu ? "25px" : "0px",
                transition: ".5s ease",
              }}
              className="linksWrapper"
            >
              <motion.span
                initial={{ opacity: 0 }}
                variants={container}
                animate={{
                  opacity: menu ? 1 : 0,
                  display: menu ? "flex" : "none",
                }}
                transition={{ delay: menu ? 0.5 : 0, duration: 1 }}
                className="web_links"
                style={{
                  height: menu ? "200px" : "0px",
                  width: menu ? "200px" : "0px",
                  transition: ".5s ease",
                }}
              >
                <p>Website</p>
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span>
                  <Link href="/about">About</Link>
                </span>
                <span>
                  <Link href="/project">Projects</Link>
                </span>
                <span>
                  <Link href="/contact">Contact</Link>
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                variants={container}
                animate={{
                  opacity: menu ? 1 : 0,
                  display: menu ? "flex" : "none",
                }}
                transition={{ delay: menu ? 0.5 : 0, duration: 1 }}
                className="web_links web_after_links"
                style={{
                  height: menu ? "200px" : "0px",
                  width: menu ? "200px" : "0px",
                  transition: ".5s ease",
                }}
              >
                <p>Social</p>
                <a href="https://www.instagram.com/vicky__taj/" target="_blank">
                  Instagram
                </a>
                <a href="https://github.com/Admin12121" target="_blank">
                  Github"
                </a>
                <a
                  href="https://www.linkedin.com/in/vickytajpuriya/"
                  target="_blank"
                >
                  Linkedin"
                </a>
              </motion.span>
            </motion.div>
            <div className="navigation_wrapper !p-1 !rounded-lg">
              {links &&
                links.map((link, index) => (
                  <Tooltip key={index} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div
                        onClick={() => {
                          if (link.href) {
                            router.push(link.href);
                            setMenu(false);
                          } else if (link.subLinks) {
                            setMenu((el) => !el);
                          }
                        }}
                        className={cn(
                          buttonVariants({
                            variant: determineVariant(link.href),
                            size: "icon",
                          }),
                          "h-9 w-9",
                          determineVariant(link.href) === "default" &&
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        )}
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span className="sr-only">{link.title}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
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
                ))}
            </div>
          </motion.div>
        </motion.span>
      </div>
    </>
  );
};

export { Sidebar, SidebarNav, Header, Footer };

export { SidebarContext };
