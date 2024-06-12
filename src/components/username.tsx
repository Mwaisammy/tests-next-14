"use client";
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { onDeleteUser } from "@/actions";
import { toast } from "sonner";
import { useModalStore } from "@/use-model-store";

type Props = {
  item: {
    _id: string;
    username: string;
    createdAt: number;
  };
};

function UserName({ item }: Props) {
  const [isPending, startTransition] = useTransition();

  const { onOpen } = useModalStore();

  const deleteUser = () => {
    startTransition(() => {
      onDeleteUser(item._id).then((data) => {
        if (data.success) {
          toast.success("User deleted successfully");
        }
      });
    });
  };
  return (
    <div className="flex items-center mt-5 justify-between">
      <h3>{item.username}</h3>

      <div className="flex items-center space-x-3">
        <Button onClick={() => onOpen(item.username)}>Update</Button>
        <Button onClick={deleteUser} disabled={isPending}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserName;
