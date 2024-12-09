import { Link } from "react-router-dom";
import { FaSquarePhone, FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  
  
  return (
    <>
    <div>
    <footer class="bg-gray-700 text-white py-6 px-6 sm:px-0">
  <div class="container w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
    
    <div>
      <h3 class="font-bold text-lg text-yellow-400">About Me</h3>
      <p>Crafting tales that inspire, entertain, and resonate. Explore my world of storytelling.</p>
    </div>

    <div>
      <h3 class="font-bold text-lg text-yellow-400">Quick Links</h3>
      <ul>
        <li><a href="/" class="hover:underline">Home</a></li>
        <li><a href="/about" class="hover:underline">About Me</a></li>
        <li><a href="/stories" class="hover:underline">My Works</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg text-yellow-400">Connect</h3>
      <p className='flex flex-row items-center pb-2 gap-2'><FaSquarePhone size='20'/> <a href="mailto:writername@example.com">writername@example.com</a></p>
      <p className='flex flex-row items-center pb-2 gap-2'><MdMail size='20'/> <a href='tel:+880 1234567890'>+880 1234567890</a></p>
      <div class="flex gap-4 mt-2">
        <div className='bg-white mt-[5px] ml-[4px] relative w-[15px] h-[15px]'><a href="#" aria-label="XTwitter"><FaSquareXTwitter size='25' className='text-black cursor-pointer hover:text-[#0ee] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'/></a></div>
        <a href="#" aria-label="Instagram"><FaSquareInstagram size='25' className='text-[#Df2A7B] cursor-pointer hover:text-[#0ee]'/></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin size='25' className='text-[#0a66c2] cursor-pointer hover:text-[#0ee]'/></a>
        <a href="#" aria-label="Facebook"><FaSquareFacebook size='25' className='text-[#1877f2] cursor-pointer hover:text-[#0ee]'/></a>
      </div>
    </div>
  </div>
  <div class="text-center mt-6">
    <p>© 2024 <Link to="/">
    <span className='text-xl font-black cursor-pointer text-[#0ff]'>S<span className='text-[#f0e]'>W</span></span>
    </Link>. All Rights Reserved.</p>
  </div>
</footer>
    </div>
    </>
    )
}

export default Footer;