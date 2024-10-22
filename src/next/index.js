// next.ts
import { execSync } from "child_process";
import latestVersion from "latest-version";
import { cssContent, tailwindConfigContent, pageContent, notFoundContent, layoutContent } from "./contents.js"
import path from "path";
import fs from "fs";

export async function setupNext(projectName) {
  try {
    // Get the latest version of Next.js
    const nextVersion = await latestVersion("next");
    console.log(`Installing Next.js ${nextVersion}...`);

    // Initialize the Next.js project with user-provided name
    execSync(`npx create-next-app@latest ${projectName} --ts`, { stdio: "inherit" });

    // Change directory to the new project
    process.chdir(projectName);

    // Define dependencies to install
    const dependencies = [
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
      "next-auth",
      "next-themes",
      "novel",
      "react",
      "react-day-picker",
      "react-dom",
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
    ].join(" ");

    // Install dependencies
    console.log("Installing dependencies...");
    execSync(`npm install ${dependencies}`, { stdio: "inherit" });

    // Install dev dependencies
    const devDependencies = [
      "@types/node",
      "@types/react",
      "@types/react-dom",
      "eslint",
      "eslint-config-next",
      "postcss",
      "tailwindcss",
      "typescript",
    ].join(" ");

    console.log("Installing dev dependencies...");
    execSync(`npm install --save-dev ${devDependencies}`, { stdio: "inherit" });

    const useSrc = fs.existsSync("src");

    // Define the base path for downloading components
    const basePath = useSrc ?  "src" : ".";

    // Download components, constants, hooks, icons, lib, schemas
    const directories = ["components", "constants", "hooks", "icons", "lib", "schemas"];
    directories.forEach(dir => {
      console.log(`Downloading ${dir}...`);
      execSync(`degit Admin12121/Starter-Package/package/next-package/src/${dir} ${path.join(basePath, dir)}`, { stdio: "inherit" });
    });

    const globalsCssPath = path.join(basePath, 'app', 'globals.css');
    fs.writeFileSync(globalsCssPath, cssContent, 'utf8');
    console.log(`Updated ${globalsCssPath} with new styles.`);

    // Write the Tailwind CSS configuration to tailwind.config.ts
    const tailwindConfigPath = path.join('.', 'tailwind.config.ts');
    fs.writeFileSync(tailwindConfigPath, tailwindConfigContent, 'utf8');
    console.log(`Updated ${tailwindConfigPath} with new Tailwind CSS configuration.`);

    const pagePath = path.join(basePath, 'app', 'page.tsx');
    fs.writeFileSync(pagePath, pageContent, 'utf8');
    console.log(`Updated ${pagePath}`);

    const layoutPath = path.join(basePath, 'app', 'layout.tsx');
    fs.writeFileSync(layoutPath, layoutContent, 'utf8');
    console.log(`Updated ${layoutPath}`);

    const notFountPath = path.join(basePath, 'app');
    fs.writeFileSync(path.join(notFountPath, 'not-found.tsx'), notFoundContent, 'utf8');
    console.log(`Added ${notFountPath}`);

    console.log(`Setup complete! Run 'cd ${projectName} && npm run dev' to start.`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
