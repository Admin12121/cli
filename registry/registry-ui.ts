import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "sparklin",
    type: "registry:ui",
    dependencies: [""],
    files: ["global/sparklin.tsx"],
  },
  {
    name: "form-generator",
    type: "registry:ui",
    dependencies: [""],
    files: ["global/form-generator.tsx"],
  },
  {
    name: "glass-card",
    type: "registry:ui",
    dependencies: [""],
    files: ["global/glass-card.tsx"],
  },
  {
    name: "gradient-background",
    type: "registry:ui",
    dependencies: [""],
    files: ["global/gradient-background.tsx"],
  },
];
