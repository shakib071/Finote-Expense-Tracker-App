import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} 
else {
  // In production mode
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}


export async function testConnection() {
  try {
    const client = await clientPromise
    await client.db("admin").command({ ping: 1 })
    console.log(" Successfully connected to MongoDB!")
    return true
  } catch (error) {
    console.error("MongoDB connection failed:", error)
    return false
  }
}

export default clientPromise;