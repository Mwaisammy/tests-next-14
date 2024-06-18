"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePostStore } from "../../store/use-post-store";
import PostForm from "./post-form";
import { useCreatePost } from "@/hooks/use-create-post";

function PostDialog() {
  const { isOpen, onClose } = usePostStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Posts</DialogTitle>
          <PostForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PostDialog;
