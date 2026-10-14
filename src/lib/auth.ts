import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
const URI = process.env.MONGODB_URI;
if(!URI){
    throw new Error("mongodb is not connecting");
}
const client = new MongoClient(URI);
const db = client.db("tech");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
