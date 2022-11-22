import React, { useEffect, useState } from "react";
import Header from "./Header";

const Sobre = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const [tellValue, setTellValue] = useState("");

  const setMascara = (e) => {
    setTellValue(e.target.value);

    console.log(tellValue);

    let telength = tellValue.length;

    if (telength === 0) {
      setTellValue(tellValue + "(");
    } else if (telength === 3) {
      setTellValue(tellValue + ") ");
    } else if (telength === 6) {
      setTellValue(tellValue + " ");
    } else if (telength === 11) {
      setTellValue(tellValue + "-");
    }
  };

  function armazenar() {
    let armazenar = {
      Nome: name.value,
      Emai: email.value,
      Telefone: tellValue,
    };

    console.log(armazenar);

    alert("MENSAGEM ENVIADA");
  }

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <form className="flex flex-col items-start justify-center my-20">
          <label className="mx-auto text-3xl  h-12 border-b-2 border-[#76239c] dark:text-gray-900 font-mono py-2 mb-10 text-[#f8f8f8]">
            {" "}
            PÁGINA DE CONTATO
          </label>
          <input
            id="name"
            type="text"
            placeholder=" Digite seu nome."
            className="bg-[#ffffff] dark:bg-[#eeeded] font-mono lg:w-[600px] w-[400px]  my-2 h-[50px] rounded-md outline-none px-2"
          />
          <input
            id="email"
            type="email"
            placeholder=" Digite seu email."
            name="user_email"
            className="bg-[#ffffff] dark:bg-[#eeeded]  font-mono lg:w-[600px] w-[400px] my-2 h-[50px] rounded-md outline-none px-2"
          />
          <input
            id="tell"
            onChange={setMascara}
            value={tellValue}
            maxLength="16"
            type="text"
            placeholder=" (DD) 9 9999-9999"
            name="user_email"
            className="bg-[#ffffff] dark:bg-[#eeeded]  font-mono lg:w-[600px] w-[400px] my-2 h-[50px] rounded-md outline-none px-2"
          />
          <textarea
            type="text"
            placeholder="Digite uma mensagem..."
            name="message"
            className="bg-[#ffffff] dark:bg-[#eeeded] my-2 py-2 pb-20  h-[150px] lg:w-[600px]  text-gray-400 w-[400px] font-mono rounded-md outline-none px-2"
          />
          <a
            onClick={armazenar}
            className="cursor-pointer bg-gradient-to-r from-[#342999] to-[#76239c] dark:text-[#fdfdff] font-mono  my-2 py-2 w-[25rem] lg:w-[600px]  text-center rounded-xl"
          >
            ENVIAR MENSAGEM
          </a>
        </form>
      </div>
    </div>
  );
};

export default Sobre;
