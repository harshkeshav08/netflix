import Movies,{movies} from "./movies"
function Cards() {
  return (
    <div className="w-full px-4 sm:px-5 md:px-10">

      <h2 className="text-white text-xl sm:text-2xl italic font-bold mb-5 mt-8 sm:mt-10">
        Trending Now
      </h2>

      <div className="w-full md:w-[900px] mx-auto">
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto h-[280px] sm:h-[320px] items-start pt-1"
          style={{ scrollbarWidth: "none" }}>

          <div className="min-w-[130px] sm:min-w-[140px] md:min-w-[180px] h-[195px] sm:h-[210px] md:h-[260px] rounded-lg relative group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojLyNgKOmUFMw657lzh7T5drKlmHtmhPJc_lrdp37bw&s=10"
              className="w-full h-full object-cover rounded-lg" />

             <Movies movie={movies[0]} />

          </div>

          <div className="min-w-[130px] sm:min-w-[140px] md:min-w-[180px] h-[195px] sm:h-[210px] md:h-[260px] rounded-lg relative group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlzmO9uCLXcQ5U55ciPJXIuAvIsCl_ix5HHAzkZCE0w&s=10"
              className="w-full h-full object-cover" />

            <Movies movie={movies[1]} />
          </div>

          <div className="min-w-[130px] sm:min-w-[140px] md:min-w-[180px] h-[195px] sm:h-[210px] md:h-[260px] rounded-lg relative group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZAN5RJ77Lv9lFIAdMn6g1aHPI3JzkF7CLybab5KNGw&s=10"
              className="w-full h-full object-cover" />

            <Movies movie={movies[2]} />
          </div>

          <div className="min-w-[130px] sm:min-w-[140px] md:min-w-[180px] h-[195px] sm:h-[210px] md:h-[260px] rounded-lg relative group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5LAxph0JB_KlUICGbdWVZhDFiyo7cXIigQc7ObBJMA&s=10"
              className="w-full h-full object-cover" />

            <Movies movie={movies[3]} />
          </div>

          <div className="min-w-[130px] sm:min-w-[140px] md:min-w-[180px] h-[195px] sm:h-[210px] md:h-[260px] rounded-lg relative group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBAr2CyX6hT6rj3T_SfRZU9qYvYO6c-wors-3jY4mKA&s=10"
              className="w-full h-full object-cover" />

            <Movies movie={movies[4]} />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Cards