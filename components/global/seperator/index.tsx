const Seperator = () => {
  return (
    <div
      className="absolute top-0 h-px w-full"
      style={{
        background:
          "radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)",
      }}
    ></div>
  );
};

export default Seperator;