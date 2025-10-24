import clientPromise from "@/lib/mongodb";

export async function GET(){
    return Response.json({message: "API is running"});
}