"use client";

import React from "react";
import {
  Sidebar,
  SidebarNav,
  Header,
  Footer,
  CommandMenu
} from "@/registry/default/global/sidebar";
import { List, Compass, House, Search, Network } from "lucide-react";

export default function Page() {
  const data = {
    name: "Vicky Tajpuriya",
    email: "vickytaj6459@gmail.com",
  };
  return (
    <div>
      <Sidebar
        defaultLayout={undefined}
        defaultCollapsed={false}
        navCollapsedSize={4}
      >
        <SidebarNav
          links={[
            {
              title: "Home",
              isactive: true,
              icon: House,
              href: "/sidebar",
            },
            {
              title: "Introduction",
              isactive: true,
              icon: List,
              href: "/sidebar/introduction",
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/workspace/sub2" },
              ],
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/sidebar" },
              ],
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/workspace/sub2" },
              ],
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/workspace/sub2" },
              ],
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/workspace/sub2" },
              ],
            },
            {
              title: "Templates",
              label: "9",
              icon: Network,
              subLinks: [
                { title: "Portfolio", href: "/workspace/sub1" },
                { title: "SaaS", href: "/workspace/sub2" },
                { title: "Portfolio", href: "/workspace/sub1" },
                { title: "SaaS", href: "/workspace/sub2" },
                { title: "Portfolio", href: "/workspace/sub1" },
                { title: "SaaS", href: "/workspace/sub2" },
                { title: "Portfolio", href: "/workspace/sub1" },
                { title: "SaaS", href: "/workspace/sub2" },
              ],
            },
          ]}
        >
          <Header label="Welcome" />
          <CommandMenu/>
          <Footer data={data} />
        </SidebarNav>
        <div>
          <h1>Hello</h1>
        </div>
      </Sidebar>
    </div>
  );
}
