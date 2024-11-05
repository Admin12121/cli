"use client";

import { useRouter } from "next/navigation";
import { Empty } from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex h-full items-center">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="lg:col-span-3 md:col-span-2 flex flex-col items-center justify-center gap-y-16 h-screen w-screen">
            <Empty />
            <span className="flex flex-col gap-5 items-center ">
              <h1 className="font-semibold text-4xl">Page not Found</h1>
              <Button
                variant="secondary"
                className="flex gap-3 text-themeTextGray border-0"
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
