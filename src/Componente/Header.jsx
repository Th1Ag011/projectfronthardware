import React, {useState} from 'react'

import { FaSearch, FaInstagram} from 'react-icons/fa' 
import { WiMoonAltFirstQuarter , WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { Link } from 'react-router-dom';

const Hearder = () => {

 
    
   const [ dark, setDark] = useState(true);

  return (
    <div className='  w-full h-20 my-1 border-b-2 border-[#333338] dark:border-[#bbbaba] flex items-center '>
         
         <div className=' sm:w-[20rem] w-[20rem] mx-2 border-r-2 border-[#333338] dark:border-[#bbbaba]  '> 
         <Link to="/"><h1 className=' hover:scale-105 duration-300 text-3xl text-violet-500 sm:mx-6 mx-0 '> BLUETECH </h1></Link> 
        </div>
        
        <div className='flex items-center mx-2 text-[#9c9c9c] dark:text-[#747272]'>
          <FaSearch size={25}/>
          <input maxLength={15} className='bg-inherit mx-4 md:text-lg text-sm outline-none' type='text' placeholder='Search...' />
        </div> 



        <ul className=' text-[#c2b9c7] flex justify-end itens-center sm:w-[75rem] w-10'>
         <li className=' w-10  mx-2'> 
         {dark ?  <WiMoonAltFirstQuarter className='cursor-pointer  text-[#dad6d6] h-10 w-8 hover:text-[#bbb8b8] duration-150' size={25} onClick={() => {
          document.querySelector('html').classList.toggle('dark')
          setDark(!dark)}}  /> : <WiMoonAltWaningCrescent1 className='cursor-pointer text-[#383838] h-10 w-8 hover:text-[#555555] duration-150 ' size={25} onClick={() => {
            document.querySelector('html').classList.toggle('dark')
            setDark(!dark)}} />  } 
        </li>
        <a href='https://www.instagram.com/juancsz_/?hl=pt-br' className='dark:text-[#2b2b2b] dark:hover:text-[#5e1b79]  my-auto flex hover:text-[#c963f1] '>
          <FaInstagram className='sm:w-10 w-3 ' size={25}/>
            <h1 className='dark:text-[#2b2b2b] dark:hover:text-[#5e1b79] border-r-2 border-[#ffffff] dark:border-[#706f6f] sm:flex hidden px-2'>_juancsz </h1>
            </a>
          
          <a href='https://www.instagram.com/_thiagovillani/?hl=pt-br' className='dark:text-[#2b2b2b] dark:hover:text-[#5e1b79] my-auto flex hover:text-[#c963f1]  '>
          <FaInstagram className='ml-2 mr-2 sm:w-10 w-3' size={25}/>
            <h1 className='sm:flex hidden dark:hover:text-[#5e1b79] pr-4 dark:text-[#2b2b2b]'>_thiagovillani</h1>
            <h1></h1>
            </a>
        </ul>
        </div>
          

  
  )
}

export default Hearder

