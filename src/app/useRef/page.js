"use client"

import { useState, useRef, useEffect } from "react";

const ExempleCount = () => {
    const [name, setName] = useState("")
    
    const numeroPassado = useRef(0) 

    console.log("Renderizou e esse é o nome", name)     
        
    /* Não precisa de use Effect sendo que já está acompanhando o estado pelo state nome em si, 
    //ou seja, não será um evento assicrono */
    numeroPassado.current = name.length

    return(
        <div>
            <input className="border-2 border-black rounded-md mb-2 h-8 pl-2" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            <p>Oi! Meu nome é <span className="text-rose-700 font-bold">{name}</span></p>
            <p>Número de letras do seu nome é <span className="text-rose-700 font-bold">{numeroPassado.current}</span>! </p>
        </div>
    )
}


const ExempleFocus = () => {
    const [name2, setName2] = useState("")
    
    const inputRef = useRef();

    const apagarFocarInput = () => {
        inputRef.current.focus()
        setName2("")
    }

    return(
        <div>
            <input 
            ref={inputRef}
            className="border-2 border-black rounded-md mb-2 h-8 pl-2" 
            value={name2} 
            onChange={(e) => {setName2(e.target.value)}}
            />
            <p>Oi! Meu nome é <span className="text-rose-700 font-bold">{name2}</span></p>
            <button className="bg-rose-300 py-1 px-4 rounded-lg mt-2" onClick={apagarFocarInput}>Apagar Input</button>
        </div>
    )
}


export default function useRefPage(){
    return(
        <div className="flex flex-col text-black mt-14 ml-10 mr-10 space-y-10">
            <div>
                <h3 className="text-rose-900 text-2xl font-bold mb-1">CONTADOR DE LETRAS DO NOME</h3>
                <ExempleCount/>
           </div>
           <div>
                <h3 className="text-rose-900 text-2xl font-bold mb-1">APAGAR INPUT DO NOME</h3>
                <ExempleFocus/>
           </div>
            


            
        </div>
        
    )
}