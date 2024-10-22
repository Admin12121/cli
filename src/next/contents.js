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
import type { Config } from "tailwindcss";

const config: Config = {
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
  plugins: [require("tailwindcss-animate")],
};
export default config;
`;


export const pageContent = `
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      </main>
    </div>
  );
}
`;


export const notFoundContent = `
"use client";
import { Empty } from "@/components/ui/empty";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <div className="lg:col-span-3 md:col-span-2 flex flex-col items-center justify-center gap-y-16 h-screen w-screen">
        <Empty />
        <span className="flex flex-col gap-5 items-center ">
          <h1 className="font-semibold text-4xl">Page not Found</h1>
          <Button
            variant="secondary"
            className="flex gap-3 text-themeTextGray border-0"
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
        </span>
      </div>
    </>
  );
};

export default NotFound;
`;

export const layoutContent = `
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme";
import LayoutProvider from "@/components/providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
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
  "@types/bcryptjs",
  "bcryptjs",
  "class-variance-authority",
  "clsx",
  "cmdk",
  "date-fns",
  "embla-carousel-react",
  "framer-motion",
  "html-react-parser",
  "input-otp",
  "js-cookie",
  "lucide-react",
  "next-auth@beta",
  "next-themes",
  "novel",
  "react-day-picker",
  "react-hook-form",
  "react-resizable-panels",
  "recharts",
  "sass",
  "sonner",
  "swiper",
  "tailwind-merge",
  "tailwindcss-animate",
  "vaul",
  "zod",
];
