import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { movies } from "./movies"

function MoviePage() {

  const { id } = useParams()
  const navigate = useNavigate()

  const movie = movies.find((item) => item.id === Number(id))

  const [currentMovie, setCurrentMovie] = useState(movie)

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <button
        onClick={() => navigate("/")}
        className="bg-white text-black px-4 py-2 rounded mb-6"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto">

        <video
          key={currentMovie.video}
          src={currentMovie.video}
          controls
          autoPlay
          className="w-full max-h-[650px] rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-5">
          {currentMovie.title}
        </h1>

        <p className="text-gray-400 mt-3">
          {currentMovie.description}
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-5">
          More Videos
        </h2>

        <div className="flex gap-4 overflow-x-auto">

          {movies
            .filter((item) => item.id !== currentMovie.id)
            .map((item) => (

              <div
                key={item.id}
                onClick={() => setCurrentMovie(item)}
                className="min-w-[180px] bg-gray-900 rounded-lg cursor-pointer"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[130px] object-cover rounded-t-lg"
                />

                <h3 className="p-3 font-bold">
                  {item.title}
                </h3>

              </div>

            ))}

        </div>

      </div>

    </div>
  )
}

export default MoviePage