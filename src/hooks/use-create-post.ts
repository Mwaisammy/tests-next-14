import { formSchema } from "@/lib/validators";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const { data, status } = await axios.post("/api/posts", values);
      if (status !== 201) throw new Error("Error creating post");
      return data;
    },

   
  });

  return createPostMutation;
};

// 201 -> post, 200 -> fetch something 302, 301 -> redirect , 400 -> invalid fields, 404 -> not found 401-> unautheticated user , 403-> unauthorised
