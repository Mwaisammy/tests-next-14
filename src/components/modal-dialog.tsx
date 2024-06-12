"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { useModalStore } from "@/lib/use-modal-store";
import { useModalStore } from "@/use-model-store";
import { FormEvent, useState } from "react";
import { useIsClient } from "usehooks-ts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { onUpdateUserName } from "@/actions";

function ModalDialog() {
  const isClient = useIsClient();

  const { isOpen, onclose, username } = useModalStore();
  const [input, setInput] = useState<string>(username);

  if (username === "") return;

  const mutation = useMutation({
    mutationFn: onUpdateUserName,
    
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputToSend = input;
    setInput("");
    // console.log(inputToSend);

    mutation.mutate(inputToSend);
    onclose();
  };

  if (!isClient) return;
  return (
    <Dialog open={isOpen} onOpenChange={onclose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-balance">
            Update Username
          </DialogTitle>

          <div className="mt-4 space-y-4 flex flex-col">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                // defaultValue={username}
                // placeholder={`${
                //   !!username ? username : "Please enter a username"
                // }`}
                value={input}
                onChange={({ target }) => target.value}
              />
              <Button className="w-full">Update username</Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDialog;
