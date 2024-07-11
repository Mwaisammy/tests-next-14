import { redis } from "@/lib/redis";
import React from "react";

type Props = {
  params: {
    dashboardId: string;
  };
};

async function DashboardPageId({ params }: Props) {
  const data = await redis.get(`key-${params.dashboardId}`);
  console.log(params);
  return <div>DashboardPageId: {params.dashboardId}</div>;
}

export default DashboardPageId;
