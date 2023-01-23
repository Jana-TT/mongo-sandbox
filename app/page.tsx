import clientPromise from "../lib/mongodb"

async function getMovies() {
  const client = await clientPromise;
  const db = client.db("food");

  const movies = await db
           .collection("recipes")
           .find({})
           .limit(10)
           .toArray();

  return JSON.stringify(movies);
}

export default async function Home() {
  const movies = await getMovies();
  
  return (
    <div>
      {movies}
      
    </div>
  )
}
