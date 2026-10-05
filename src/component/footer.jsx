function Footer(){
  return(

<footer>
  <div>
    <h1 className="text-white text-xl">Questions? Call 000-800-919-1743</h1>
  </div>

<div className="text-white grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 m-8 md:m-20">
  <div className="flex flex-col  gap-4">
    <a href="#">FAQ</a>
    <a href="#">Investor Relations</a>
    <a href="#">Privacy</a>
    <a href="#">Speed test</a>
  </div>

  <div className="flex flex-col  gap-4">
    <a href="#">Help Centre</a>
    <a href="#">Jobs</a>
    <a href="#">Cookie Preferences</a>
    <a href="#">Legal notice</a>
  </div>

  <div className="flex flex-col  gap-4">
    <a href="#">Account</a>
    <a href="#">Ways to watch</a>
    <a href="#">Corporate Information</a>
    <a href="#">Only on Netflix</a>
  </div>

  <div className="flex flex-col  gap-4">
    <a href="#">Media Centre</a>
    <a href="#">Terms of use</a>
    <a href="#">Contact Us</a>
  </div>
  </div>

  <div className="text-white bg-black mt-10 md:mt-20" >
    <select  name="Language" id="">
      <option className="bg-black" value="">English</option>
      <option className="bg-black" value="">Hindi</option>
    </select>
  </div>

<div className="m-8 text-white">
  <a href="#">Netflix India</a>
</div>

<div className=" p-1 pb-8  text-[15px] text-white">
  <a href="#">This page is protected by Google reCAPTCHA to make sure you're not a bot.</a>
</div>

  
</footer>
  )
}
export default Footer;