const movies = [
  {
    id: 1,
    title: "India’s Got Latent",
    description: "India’s Got Latent is a Hindi comedy-talent reality show.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes1irsGcoylnDkdnPO5IKPx3FnUesqfaru2BfzIfGxyz2YDj9EQViZZNR52eWbz1mJwBXaFsLPVvUvmrdalZaj3StiV_H6xK-VRxshan4jA&s=10",
   video: "https://www.youtube.com/embed/ONqp22xweLM"
  },
  {
    id: 2,
    title: "Cocktail 2",
    description: "After a decade together, Diya and Kunal's relationship is shaken when Ally, an old friend, re-enters their lives.",
    image: "https://static.toiimg.com/thumb/msid-132798882,imgsize-639277,width-400,resizemode-4/cocktail-2-ott-release-when-and-where-to-watch-shahid-kriti-and-rashmikas-film-online.jpg",
    video: "https://www.youtube.com/embed/XXxUqLHq1xg"
  },
  {
    id: 3,
    title: "Lust Stories 2",
    description: "Four eminent Indian directors explore sex, relationships, desire and love through short films in this sequel to 2018's Emmy-nominated Lust Stories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAR0SpFVkRG1Ylzn-34NpTXevOAnGsqyDHoySNib9rrg&s=10",
    video: "https://www.youtube.com/embed/PhNJ34l5NFo"
  },
  {
    id: 4,
    title: "Alpha",
    description: "Two girls are forced to join forces and pushed to their limits as they confront a ruthless nemesis, leading to a brutal showdown with unexpected allies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi3ch0v1VMdfLZ7ID4emsJjP7kYGk1sccg6QinZOYzg&s",
    video: "https://www.youtube.com/embed/QRqGwGwo1Y0"
  },
  {
    id: 5,
    title: "Dhamal 4",
    description: 'The boys chase the "Treasure of Life," facing crazy challenges along the way.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckI__BXb3OUfTnIZrLqA0KFp9xrg225jKjmIITz3mkg&s=10",
    video: "https://www.youtube.com/embed/IG-eByZdz6Y"
  }
];

function Movies({ movie }) {
  return (
    <div className="absolute hidden group-hover:block z-50 top-0 left-0 w-[220px] bg-black rounded-lg overflow-hidden">

      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-[130px] object-cover"
      />

      <div className="p-3">
        <h2 className="text-white font-bold text-lg">
          {movie.title}
        </h2>

        <p className="text-gray-300 text-sm mt-1">
          {movie.description}
        </p>

        <button
        onClick={() => window.open(movie.video, "_blank")}
        className="bg-white text-black px-3 py-1 rounded mt-3">
          Play Now
        </button>
      </div>

    </div>
  );
}

export { movies };
export default Movies;