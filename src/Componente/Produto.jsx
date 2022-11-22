import React from 'react'
import pc from '../img/logo.png'
import Header from './Header'

const Produto = () => {
  return (
  
    <div classname='w-full h-screen'>
         <Header/>
    <div className='flex justify-around my-20'>
        <div className=''>
            <h2 className='font-bold text-violet-500'>Apresentamos a AMD Radeon™ RX 7900 XTX</h2>
            <p className='text-xl font-bold py-4 text-violet-400'>A placa de vídeo mais avançada para jogadores e criadores.</p>
            <p className='text-violet-300 dark:text-[#7d4b9e]'>Construídas com base na inovadora arquitetura AMD RDNA™ 3 com tecnologia de chiplet,<br></br> as placas de vídeo AMD Radeon™ RX 7900 XTX oferecem desempenho, recursos visuais e<br></br> eficiência de última geração em 4K e mais além.</p>
            <p className='font-bold text-violet-500 pt-3 text-xl'>Por apenas <br></br> R$8.999,00</p>
        </div>
        <div className='shadow-lg shadow-violet-500 rounded-xl flex items-center justify-center p-4'>
            <img src={pc} className="rounded-xl" alt="pc" width="350" height="300" />
        </div>
    </div>
    <div className='flex gap-4 justify-center pt-6'>
    <div className='flex justify-center pt-4 '> <p className='shadow-md shadow-violet-500/50 bg-gradient-to-r from-violet-500 to-violet-600 rounded-md py-1 px-1 cursor-pointer text-black hover:text-gray-800 uppercase text-7 font-semibold hover:-translate-y-1'>Adicionar ao carrinho</p></div>
    <div className='flex justify-center pt-4'> <p className='shadow-md shadow-violet-500/50 bg-gradient-to-r from-violet-600 to-violet-500 rounded-md py-1 px-1 cursor-pointer text-black hover:text-gray-800 uppercase font-semibold hover:-translate-y-1'>Comprar agora</p></div>
    </div>
</div>
  )
}

export default Produto