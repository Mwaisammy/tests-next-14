"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { useCreatePost } from "@/hooks/use-create-post";
import { toast } from "sonner";
import { usePostStore } from "../../store/use-post-store";

function PostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
    },
  });

  const { onClose } = usePostStore();

  const { mutate: createPostMutation, isPending } = useCreatePost();

  const { isValid } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    createPostMutation(values, {
      onSuccess: () => {
        onClose();
        toast.success("Post created successfully");
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid || isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default PostForm;
