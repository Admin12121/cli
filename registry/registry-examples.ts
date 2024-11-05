import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "sparklin-demo",
    type: "registry:example",
    registryDependencies: ["spaklin"],
    files: ["example/sparklin-demo.tsx"],
  },
  {
    name: "form-generator-demo",
    type: "registry:example",
    registryDependencies: ["form-generator", "glass-card"],
    files: ["example/form-generator-demo.tsx"],
  },
  {
    name: "gradient-background-demo",
    type: "registry:example",
    registryDependencies: ["gradient-background"],
    files: ["example/gradient-background-demo.tsx"],
  },
  {
    name: "animated-border-demo",
    type: "registry:example",
    registryDependencies: ["animated-border"],
    files: ["example/animated-border-demo.tsx"],
  },
];
