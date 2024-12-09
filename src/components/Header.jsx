import { useState } from "react";
import profileIcon from "../assets/profile-icon.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  
  
  return (
    <>
    <nav className='w-full h-[3rem] max-w-4/6 mx-auto px-4 flex flex-rows justify-between items-center bg-gray-700 fixed top-0 z-10'>
    <Link to="/">
    <h1 className='text-2xl font-black cursor-pointer text-[#0ff] border-[2px] rounded-full py-[3px] px-[1px]'>S<span className='text-[#f0e]'>W</span></h1>
    </Link>
    <div className='container hidden  sm:grid grid-cols-6 justify-between items-center text-white'>
    <Link to="/" className='col-start-3 hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium'>Home</button>
    </Link>
    <Link to='/about' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium'>About Me</button>
    </Link>
    <Link to='/stories' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium'>My Works</button>
    </Link>
    <Link to='/contact' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium'>Contact</button>
    </Link>
    </div>
    <div className='sm:hidden text-white' onClick={openMenu}>
    <GiHamburgerMenu size='25'/>
    </div>
    </nav>
    {
      isOpen &&
    <div className='sm:hidden w-2/5 h-screen rounded-bl-md  bg-blue-500 fixed top-0 right-0 z-20'>
    <div className='container flex flex-col gap-6 justify-center text-white'>
    <div className='mt-3 mx-2'>
    <RxCross1 size='25' onClick={openMenu}/>
    </div>
    <div className='profile mx-auto my-2'>
    <img src={ profileIcon } alt='profile picture' className='w-[100px] h-[100px] bg-white rounded-full'/>
    </div>
    <Link to="/" className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium flex flex-row gap-2 mx-[1rem]'><FaHome size='25'/>Home</button>
    </Link>
    <Link to='about' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium flex flex-row gap-2 mx-[1rem]'><IoPersonCircle size='25'/>About Me</button>
    </Link>
    <Link to='stories' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium flex flex-row gap-2 mx-[1rem]'><MdWork size='25'/>My Works</button>
    </Link>
    <Link to='contact' className='hover:text-[#f03]'>
    <button className='cursor-pointer text-xl font-medium flex flex-row gap-2 mx-[1rem]'><RiContactsFill size='25'/>Contact</button>
    </Link>
    </div>
    </div>
    }
    </>
    )
}


export default Header;