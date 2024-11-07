import Navbar from "@/components/theme/navbar/navbar";
import { Spotlight } from "@/components/global/spotlight";
import Intro from "./_components/intro";
import Hero from "./_components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100vw h-full overflow-y-auto">
        <Spotlight />
        <div className="py-40 relative flex justify-center items-center">
          <Hero />
        </div>
        <div className="min-h-screen h-full relative p-5">
          {/* <AnimatedBorder/> */}
          <Intro />
        </div>
      </div>
    </>
  );
}
