"use client";

import React from "react";
import { Sidebar, SidebarNav, Header, Footer } from "@/registry/default/global/sidebar1";
import { List, Compass, House, Search, Network } from "lucide-react";

export default function Page() {
    const data = {
        name: "Vicky Tajpuriya",
        email: "vickytaj6459@gmail.com"
    }
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
              icon: House,
              href: "/sidebar/introduction",
            },
            {
              title: "Installation",
              label: "9",
              collapsible: true,
              isactive: true,
              icon: Compass,
              subLinks: [
                { title: "CLI", href: "/workspace/sub1" },
                { title: "Next", href: "/workspace/sub2" },
              ],
            },
            {
              title: "Templates",
              label: "9",
              isactive: true,
              icon: Compass,
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
            {
              title: "Templates",
              label: "9",
              isactive: true,
              icon: Compass,
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
            {
              title: "Templates",
              label: "9",
              isactive: true,
              icon: Compass,
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
            {
              title: "Templates",
              label: "9",
              isactive: true,
              icon: Compass,
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
          <Header label="Welcome"/>
          <Footer data={data}/>
        </SidebarNav>
        <div>
          <h1>Hello</h1>
        </div>
      </Sidebar>
    </div>
  );
}
