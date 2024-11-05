"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/ui/empty";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function NotFound() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <Empty />

          <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <Button
              onClick={() => router.back()}
              className={buttonVariants({ variant: "secondary" })}
            >
              <Icons.chevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Go back</span>
            </Button>

            <Link href="/" className={buttonVariants({ variant: "default" })}>
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
