import React from "react";
import CreatePostButton from "./create-post-button";

function Posts() {
  return (
    <div className="flex items-center justify-between mt-3 p-5">
      <h3 className="font-semibold tracking-wide text-xl ">
        Posts app next 14
      </h3>
      <div />

      <CreatePostButton />
    </div>
  );
}

export default Posts;
