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
    name: "form-date-demo",
    type: "registry:example",
    registryDependencies: ["form-generator"],
    files: ["example/form-date-demo.tsx"],
  },
  {
    name: "form-input-demo",
    type: "registry:example",
    registryDependencies: ["form-generator"],
    files: ["example/form-input-demo.tsx"],
  },
  {
    name: "form-password-variant-demo",
    type: "registry:example",
    registryDependencies: ["form-generator"],
    files: ["example/form-password-variant-demo.tsx"],
  },
  {
    name: "form-select-demo",
    type: "registry:example",
    registryDependencies: ["form-generator"],
    files: ["example/form-select-demo.tsx"],
  },
];
