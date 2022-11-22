import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./Componente/Main"
import Contato from "./Componente/Contato"
import Product from "./Componente/Produto"



function App() {

  return (

    <BrowserRouter >
     <Routes>
            
          <Route path="/" element={<Main/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/product" element={<Product/>} />
      </Routes>
       </BrowserRouter>
   
  )
}

export default App