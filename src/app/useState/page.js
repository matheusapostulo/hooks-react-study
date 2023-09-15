"use client";
import { Borel } from "next/font/google";
import { useState } from "react";

const BotaoAcao = (props) => {
    const estilo_botao = `bg-slate-500 ${props.mais_estilo}`
    return(
        <button onClick={props.onClick} className={estilo_botao}>
            {props.children}
        </button>
    )
}

export default function useStatePage(){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    }

    const decrementCount = () => {
        setCount(prevState => {
            if (prevState === 0){
                return prevState
            }
            
            return prevState - 1;
        });
    };

    return(
        <>
        <div className="text-black">
            <div className="pl-6 pt-10 pb-1">
                <h1 className=" text-2xl">
                    {count}
                </h1>
                <div className="flex pb-5">
                    <BotaoAcao onClick={incrementCount}>Incrementar</BotaoAcao>
                    <BotaoAcao onClick={decrementCount} mais_estilo="ml-5">Decrement</BotaoAcao>
                </div>
            </div>
            
        </div>
        </>
        

    )
}