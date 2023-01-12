import clientPromise from "../lib/mongodb"

async function getMovies() {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const movies = await db
           .collection("movies")
           .find({})
           .sort({ metacritic: -1 })
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
