import React from 'react'
import Header from './Header'
import Video from '../img/video.mp4'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
     <Header/>
      <div className='sm:bg-[#202024] dark:bg-[#d1d0d0] '> 
      
     <video className=' h-[48rem] w-[115rem] mx-auto my-4 sm:flex object-cover ' src={Video} autoPlay muted loop />
      
     </div>
          <div className=' z-1 list-none flex justify-center mx-auto ' > 
           <li className='w-[15rem] text-center rounded-md hover:scale-110 duration-150  mx-2   bg-gradient-to-r from-[#342999] to-[#76239c] text-[#ececec]' ><Link  to="/contato"><h1 className='py-2 text-xl'>CONTATO </h1></Link></li> 
           <li className=' w-[15rem] text-center rounded-md hover:scale-110 duration-150 mx-2  bg-gradient-to-r from-[#342999] to-[#76239c] text-[#ececec]'><Link to="/product"><h1 className='py-2 text-xl'> PRODUTOS</h1></Link></li> 
          </div>

    </div>
  )
}

export default Main