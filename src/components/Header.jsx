import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
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
    {
    isOpen ? <RxCross2 size='25'/> :
    <GiHamburgerMenu size='25'/>
    }
    </div>
    </nav>
    {
      isOpen &&
    <div className='container sm:hidden w-2/5 h-[90vh]  bg-blue-500 flex flex-col gap-6 justify-center text-white absolute top-[3rem] right-0 z-0'>
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
    }
    </>
    )
}


export default Header;