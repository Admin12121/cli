import { cn } from "@/lib/utils";

const Seperator = ({className}:{className?:string}) => {
  return (
    <div
      className={cn("absolute top-0 h-px w-full", className)}
      style={{
        background:
          "radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)",
      }}
    ></div>
  );
};

export default Seperator;
