"use client";

import { OnAddUserName } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function TodoForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const {
    mutate: createUsername,
    error,
    isPending: isLoading,
  } = useMutation({
    mutationFn: OnAddUserName,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // make to the backend -- server action
    createUsername(
      { username: values.username },
      {
        onSuccess(data) {
          if (data.success) {
            toast.success(`Username of id ${data.success} was added!`);
          }
          // if (data.error) {
          //   toast.error(data.error);
          // }

          // onAdUsername(values).then(() => { console.log(data)})
        },
        onError() {
          toast.error("Something went wrong!");
        },
      }
    );
    // startTransition(() => {
    //   onAddUsername(values)
    //     .then((data) => {
    //       if (data.error) {
    //         toast.error(data.error || "Something went wrong");
    //       }

    //       if (data.success) {
    //         toast.success(`Username of id ${data.success} was added!`);
    //       }
    //     })
    //     .catch(() => toast.error("Something went wrong!"));
    // });
  }
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-xl mx-auto ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" disabled={isLoading} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
