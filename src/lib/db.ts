import { DataAPIClient } from "@datastax/astra-db-ts";

// Initialize the 

const  {ASTRA_DB_API_TOKEN,ASTRA_DB_API_URL } = process.env;

if(!ASTRA_DB_API_TOKEN && !ASTRA_DB_API_URL){
    throw new Error("Missing database fields!")
}



const client = new DataAPIClient(ASTRA_DB_API_TOKEN!);
export const db = client.db(ASTRA_DB_API_URL!,{namespace: "default_keyspace"});

