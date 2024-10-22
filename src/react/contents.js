export const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

.radial {
  background-image: radial-gradient(
    ellipse farthest-side,
    white,
    #716768,
    black
  );
  background-size: 100% 90%;
  background-repeat: no-repeat;
}

.text-gradient {
  background: linear-gradient(to right, #4a4e58, white, #716768);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-radial {
  background-image: radial-gradient(
    ellipse farthest-side,
    rgba(113, 103, 104, 0.2) 30%,
    black 70%
  );
  background-size: 100% 50%;
  background-repeat: no-repeat;
}

.text-radial--circle {
  background-image: radial-gradient(
    circle farthest-side,
    rgba(113, 103, 104, 0.35) 20%,
    black 70%
  );
  background-size: 50% 70%;
  background-repeat: no-repeat;
  background-position: top center;
}

.backdrop--blur__safari {
  -webkit-backdrop-filter: blur(5px);
}

.radial--blur {
  -webkit-backdrop-filter: blur(100px);
  filter: blur(100px);
  background: #877874;
}

@media only screen and (max-width: 800px) {
  .text-radial--circle {
    background-image: radial-gradient(
      circle farthest-side,
      rgba(113, 103, 104, 0.2) 20%,
      black 70%
    );
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: top center;
  }
}

.swiper-autoheight .swiper-slide {
  height: 100% !important;
}

.content-width-slide {
  width: fit-content !important;
}

.img--overlay {
  background-image: -webkit-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image: -moz-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* For Firefox (3.6 to 15) */
  background-image: -o-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* Standard syntax; must be last */
}

.slider-overlay {
  background-image: -webkit-linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  ); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image: -moz-linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  ); /* For Firefox (3.6 to 15) */
  background-image: -o-linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  ); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  ); /* Standard syntax; must be last */
}

.slider-overlay-rev {
  background-image: -webkit-linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  ); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image: -moz-linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  ); /* For Firefox (3.6 to 15) */
  background-image: -o-linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  ); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  ); /* Standard syntax; must be last */
}

.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
`;

export const tailwindConfigContent = `
/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backgroundImage: {
      "radial-gradient": "radial-gradient(circle at 50% 40%, white, black)",
    },
    extend: {
      colors: {
        themeBlack: "#09090B",
        themeGray: "#27272A",
        themeDarkGray: "#27272A",
        themeTextGray: "#B4B0AE",
        themeTextWhite: "#F7ECE9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "ripple": {
          '0%': {
            width: '0',
            height: '0',
            opacity: '0.5',
          },
          '100%': {
            width: '520px',
            height: '520px',
            opacity: '0',
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "ripple": 'ripple 1.4s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
`;

export const AppContent = `
import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { getToken } from "@/api/service/localStorageServices";

import Pagenotfound from "@/pages/empty/pagenotfound";
import { Toaster } from "sonner";
import Spinner from "@/components/ui/spinner";
import Home from "@/pages/home/index"
import Dashboard from "@/pages/dashboard/dashboard";

function App() {
  const { access_token } = getToken();

  const routes = useMemo(
    () => (

        <Routes>
          <Route index element={<Home/>} />
          <Route path="dashboard" element={ <Dashboard /> } >
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
    ),
    [ access_token]
  );

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            height: "50px",
            padding: "10px",
          },
        }}
        icons={{ loading: <Spinner /> }}
        invert={true}
        pauseWhenPageIsHidden={true}
        theme="system"
        position="top-right"
      />
      {routes}
    </>
  );
}

export default App;
`;

export const middlewareContent = `
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from "@/api/service/localStorageServices";
import { publicRoutes, protectedRoutes, authRoutes, rolebaseRoutes, Default_Login_Redirect } from "@/routes";

const RouteProvider = ({ children }:{ children: React.ReactNode }) => {
  const { access_token, user_role } = getToken();
  const location = useLocation();
  const isProtectedRoute = protectedRoutes.some(route => new RegExp(route).test(location.pathname));
  const isPublicRoute = !isProtectedRoute && publicRoutes.some(route => new RegExp(route).test(location.pathname));
  const isAuthRoute = authRoutes.some(route => new RegExp(route).test(location.pathname));
  const roleBasedRoute = rolebaseRoutes.find(route => new RegExp(route.path).test(location.pathname));

  if (isProtectedRoute && !access_token) {
    return <Navigate to="/" />;
  }

  if (isAuthRoute && access_token) {
    return <Navigate to={Default_Login_Redirect} />;
  }

  if (roleBasedRoute && (!access_token || typeof user_role !== 'string' || !roleBasedRoute.roles.includes(user_role))) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RouteProvider;
`;

export const routes = `
export const publicRoutes = [
    "/",
    "/home",
    "/register",
    "/login",
    "/login/:username",
    "/active-account/:username",
];

export const protectedRoutes = [
    "/dashboard",
    "/dashboard/.*",
];

export const rolebaseRoutes = [
    { path: "/dashboard/users", roles: ["superadmin"] },
];

export const authRoutes = [
    "/register",
    "/login",
    "login/:username",
    "active-account/:username",
];

export const Default_Login_Redirect = "/dashboard";
`;

export const mainContent = `
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/api/store.tsx";
import { ThemeProvider } from "@/components/providers/theme-provider"
import RouteProvider from "@/middleware";
import { TooltipProvider } from "@/components/ui/tooltip"
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Router>
          <RouteProvider>
            <TooltipProvider delayDuration={0}>
              <App />
            </TooltipProvider>
          </RouteProvider>
        </Router>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
`;

export const dependencies = [
  "@hookform/error-message",
  "@hookform/resolvers",
  "@radix-ui/react-accordion",
  "@radix-ui/react-alert-dialog",
  "@radix-ui/react-aspect-ratio",
  "@radix-ui/react-avatar",
  "@radix-ui/react-checkbox",
  "@radix-ui/react-collapsible",
  "@radix-ui/react-context-menu",
  "@radix-ui/react-dialog",
  "@radix-ui/react-dropdown-menu",
  "@radix-ui/react-hover-card",
  "@radix-ui/react-icons",
  "@radix-ui/react-label",
  "@radix-ui/react-menubar",
  "@radix-ui/react-navigation-menu",
  "@radix-ui/react-popover",
  "@radix-ui/react-progress",
  "@radix-ui/react-radio-group",
  "@radix-ui/react-scroll-area",
  "@radix-ui/react-select",
  "@radix-ui/react-separator",
  "@radix-ui/react-slider",
  "@radix-ui/react-slot",
  "@radix-ui/react-switch",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toast",
  "@radix-ui/react-toggle",
  "@radix-ui/react-toggle-group",
  "@radix-ui/react-tooltip",
  "@reduxjs/toolkit",
  "@tanstack/react-table",
  "@tsparticles/engine",
  "@tsparticles/react",
  "@tsparticles/slim",
  "class-variance-authority",
  "canvas-confetti",
  "clsx",
  "cmdk",
  "crypto-js",
  "gsap",
  "date-fns",
  "embla-carousel-autoplay",
  "embla-carousel-react",
  "framer-motion",
  "html-react-parser",
  "input-otp",
  "jotai",
  "js-cookie",
  "lucide-react",
  "lz-string",
  "next-themes",
  "novel",
  "react-day-picker",
  "react-hook-form",
  "react-redux",
  "react-resizable-panels",
  "react-router-dom",
  "react-secure-storage",
  "react-wrap-balancer",
  "recharts",
  "sass",
  "sonner",
  "swiper",
  "tailwind-merge",
  "tailwindcss-animate",
  "ts-morph",
  "vaul",
  "zod",
];

export const devDependencies = [
  "@types/canvas-confetti",
  "@types/crypto-js",
  "@types/js-cookie",
  '@vitejs/plugin-react',
  "tailwindcss",
  "sass-embedded",
  "postcss",
];

export const viteconfig = `
import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { 'ts(6133)': 'silent' },
  },
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

  `;

export const tsconfigapp = `
  {
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ],
    },

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

  `;

export const tsconfig = `
  {
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
`;
