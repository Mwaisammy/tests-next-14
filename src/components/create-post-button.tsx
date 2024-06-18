"use client";
import { Button } from "./ui/button";
import { usePostStore } from "../../store/use-post-store";

function CreatePostButton() {
  const { onOpen } = usePostStore();
  return (
    <div>
      <Button onClick={onOpen}>Create Post</Button>
    </div>
  );
}

export default CreatePostButton;
