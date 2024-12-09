import { FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import profileIcon from "../assets/profile-icon.png";
import "./Hero.css";
const Hero = () => {
  
  
  return (
    <>
    <main className='w-full py-4'>
    <div className='w-full sm:w-5/6 mx-auto grid grid-cols-7 gap-4 justify-center items-center px-2'>
    <div className='intro col-span-5 bg-gray-800 rounded-md p-4'>
    <h1 className='text-4xl font-bold text-[#f0c]'>Welcome to My Story World</h1>
    <p className='text-xl font-normal text-justify leading-relaxed'>Hi, I’m <span className='font-semibold text-[#ec0]'>Abdur Rahman</span> A story-writer who believes in the magic of words. Through my tales, I weave emotions, adventures, and dreams, taking readers on journeys that inspire, captivate, and transform. From heartwarming characters to unforgettable plots, every story I create is a piece of my soul.</p>
    </div>
    <div className='profile mx-auto col-span-2'>
    <img src={ profileIcon } alt='profile picture' className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-white rounded-full'/>
    </div>
    <div>
    <button className='font-medium bg-blue-400 py-1 px-6 whitespace-nowrap rounded-full text-white tracking-tighter bg-gradient-to-tr from-[#00FF22] to-[#2300fE] hover:bg-gradient-to-tl from-[#FF0C00] to-[#A500FF]'>Hire Me</button>
    <div class="flex gap-4 mt-2">
          <a href="#" aria-label="XTwitter"><FaSquareXTwitter size='25' className='text-black cursor-pointer hover:text-[#0ee]'/></a>
        <a href="#" aria-label="Instagram"><FaSquareInstagram size='25' className='text-[#DD2A7B] cursor-pointer hover:text-[#0ee]'/></a>
         <a href="#" aria-label="LinkedIn"><FaLinkedin size='25' className='text-[#0a66c2] cursor-pointer hover:text-[#0ee]'/></a>
         <a href="#" aria-label="Facebook"><FaSquareFacebook size='25' className='text-[#1877f2] cursor-pointer hover:text-[#0ee]'/></a>
      </div>
    </div>
</div>
    </main>
    </>
    )
}

export default Hero;