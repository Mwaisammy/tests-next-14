"use server"
import { string, z } from "zod";
import clientPromise from "./lib/mongodb";
import { formSchema } from "./lib/validators";
import { revalidatePath } from "next/cache";

import {ObjectId} from "mongodb"

export const OnAddUserName = async (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid form fields",
    };
  }

  const { username } = validatedFields.data;

  const client = await clientPromise;

  const collection = client.db("sample").collection("sample");

  const result = await collection.insertOne({
    username,
    createdAt: Date.now(),
  });

  revalidatePath("/");

  return {
    success: result.insertedId.toString(),
  };
};


export const onDeleteUser = async(userId: string)=>{

  const client = await clientPromise;

  const collection = client.db("sample").collection("sample");

  const result = await collection.deleteOne({
    _id: new ObjectId(userId)
  })

  console.log('result', result)

  revalidatePath("/")

  return {
    success: result.deletedCount
  }




}

export const onUpdateUserName = async(userId: string, username: string) => {
  const client = await clientPromise;
  const collection = client.db("sample").collection("sample");


  const filter = { _id: new ObjectId(userId)}
  const options = { upsert: true }
  const updateDoc = {
    $set: {
      username,
    },
  }

  const result  = await collection.updateOne(filter, updateDoc, options )

  revalidatePath("/")

  return {
    success: result.upsertedId?.toString()
  }
}
