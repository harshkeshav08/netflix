import { useNavigate } from "react-router-dom"

const movies = [
  {
    id: 1,
    title: "India’s Got Latent",
    description: "India’s Got Latent is a Hindi comedy-talent reality show.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes1irsGcoylnDkdnPO5IKPx3FnUesqfaru2BfzIfGxyz2YDj9EQViZZNR52eWbz1mJwBXaFsLPVvUvmrdalZaj3StiV_H6xK-VRxshan4jA&s=10",
    video: "/videos/episode1.mp4"
  },
  {
    id: 2,
    title: "Cocktail 2",
    description: "After a decade together, Diya and Kunal's relationship is shaken when Ally, an old friend, re-enters their lives.",
    image: "https://static.toiimg.com/thumb/msid-132798882,imgsize-639277,width-400,resizemode-4/cocktail-2-ott-release-when-and-where-to-watch-shahid-kriti-and-rashmikas-film-online.jpg",
    video: "/videos/cocktail2.mp4"
  },
  {
    id: 3,
    title: "Lust Stories 2",
    description: "Four eminent Indian directors explore sex, relationships, desire and love through short films.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAR0SpFVkRG1Ylzn-34NpTXevOAnGsqyDHoySNib9rrg&s=10",
    video: "/videos/video1.mp4"
  },
  {
    id: 4,
    title: "Alpha",
    description: "Two girls are forced to join forces and pushed to their limits as they confront a ruthless nemesis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi3ch0v1VMdfLZ7ID4emsJjP7kYGk1sccg6QinZOYzg&s",
    video: "/videos/video2.mp4"
  },
  {
    id: 5,
    title: "Dhamal 4",
    description: 'The boys chase the "Treasure of Life," facing crazy challenges along the way.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckI__BXb3OUfTnIZrLqA0KFp9xrg225jKjmIITz3mkg&s=10",
    video: "/videos/Ovideo3.mp4"
  }
]

function Movies({ movie }) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="absolute hidden group-hover:block z-50 top-0 left-0 w-[180px] sm:w-[200px] md:w-[220px] bg-black rounded-lg overflow-hidden cursor-pointer"
    >

      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-[110px] sm:h-[120px] md:h-[130px] object-cover"
      />

      <div className="p-2 sm:p-3">

        <h2 className="text-white font-bold text-base sm:text-lg">
          {movie.title}
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm mt-1">
          {movie.description}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/movie/${movie.id}`)
          }}
          className="bg-white text-black px-3 py-1 rounded mt-3 text-sm"
        >
          Play Now
        </button>

      </div>

    </div>
  )
}

export { movies }
export default Movies