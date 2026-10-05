import Cards from "./component/cards"
import Footer from "./component/footer"
import Details from "./component/details"
import Questions from "./component/questions"

function App(){
  return(

    // home 

    <div className="min-h-screen bg-black">
  
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzuGI-jXraEJip6qyYLyJWHzlf_gsT9_aJnrqgQlLmA&s=10')] bg-cover bg-center">
    
    <div className="absolute inset-0 bg-black/80">
  <div className="flex justify-between items-center mb-20 md:mb-32 lg:mb-40 px-5 md:px-10">
      <div className="ml-0 md:ml-10 logo text-red-600 text-2xl md:text-4xl font-bold">NETFLIX</div>
    
<div className="text-white bg-black mr-0 md:mr-10 lg:mr-20" >
    <select className="m-2 md:m-4" name="Language" id="">
      <option className="bg-black" value="">English</option>
      <option className="bg-black" value="">Hindi</option>
    </select>
    <button className="bg-red-700 rounded p-2">Sign up</button>
    </div>
    </div>
    
    <div className="text-center text-white px-4">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold italic my-5">See what the whole <br />world is watching</h1>
    <h2 className="text-lg md:text-xl font-bold italic my-5">Starts at ₹149. Cancel at any time.</h2>
    <p className="m-6">Ready to watch? Enter your email to create or restart your membership.</p>
    
<div className="flex flex-col sm:flex-row justify-center gap-3">
<input className="border border-white px-2 h-12 w-full sm:w-[400px] rounded" type="text" placeholder="Email Address" />
<button className="bg-red-700 rounded h-12 w-full sm:w-[200px]">Get Started› </button>
</div>
    </div>
    </div>
    </div>

<Cards />

<Details/>
 
<Questions />

<div> 
  <h1 className="flex justify-center text-white mt-20 mb-4 text-center px-4">
    Ready to watch? Enter your email to create or restart your membership.
  </h1> 
</div> 
 
<div className="flex flex-col sm:flex-row justify-center gap-3 pb-10"> 
  <input className="border border-white px-2 h-12 sm:h-15 w-full sm:w-[500px] rounded text-white" type="text" placeholder="Email Address" /> 
  <button className="bg-red-700 rounded h-12 sm:h-15 w-full sm:w-[200px]">Get Started› </button> 
</div> 
  
<Footer />
</div> 

  ) 
} 

export default App
