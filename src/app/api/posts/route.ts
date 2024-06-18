import { db } from "@/lib/db";
import { formSchema } from "@/lib/validators"
import { UUID } from "@datastax/astra-db-ts";
import OpenAI from "openai";
import { PostVector } from "../../../../typings";



const openai = new OpenAI();




export async function POST(request: Request){
    try {

        const body = await request.json()
        const validatedFields = formSchema.safeParse(body)
        if(!validatedFields.data) {
            return new Response("Invalid fields", {status: 400})
        }


        const { username, description} = validatedFields.data;


        const res = await db.collection<PostVector>('posts').insertOne({
            username,
            description,
            _id: new UUID(crypto.randomUUID()),

            $vectorize: username
        },

        // {}
        )


        console.log(res)

        return new Response("Success", {status: 201})

     

        // return new Response("Success", {status: 201})

        
    } catch (error) {

        console.log(error)

        return new Response('Internal server error', {status: 500})
        
    }
}

