import Navigationbar from "@/components/theme/navbar/navigationbar";
import Doc from "./_components";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const awaitedParams = await params;
  return (
    <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100dvh-15px)]">
      <Doc params={awaitedParams} />
    </div>
  );
};

export default Page;
