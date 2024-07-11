"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useTransition } from "react";
import { generate } from "../../../actions";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onClick = () => {
    // console.log("Generate Data");

    startTransition(() => {
      generate().then((data) => {
        if (data) {
          router.push(`/dashboard/${data.id}`);
        }
      });
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {" "}
      {/* <h3>
        <Link href={"/dashboard/settings"}>Settings</Link>
      </h3> */}
      <Button onClick={onClick} disabled={isPending}>
        Generate Data
      </Button>
    </div>
  );
}

export default DashboardPage;
