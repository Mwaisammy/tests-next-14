import Posts from "@/components/posts";
import { db } from "@/lib/db";
import React from "react";

async function Home() {
  const collections = await db.listCollections({
    nameOnly: true,
  });

  console.log(collections);
  return (
    <div>
      <Posts />
    </div>
  );
}

export default Home;
