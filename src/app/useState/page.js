"use client";
import { useState } from "react";

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
            <h1 className="pl-6 pt-10 pb-1 text-2xl">
                {count}
            </h1>
            <div className="flex pb-5">
                <button onClick={incrementCount} className="ml-5 bg-slate-500">
                    Incrementar
                </button>
                <button onClick={decrementCount} className="ml-1  bg-slate-500">
                    Decrementar
                </button>
            </div>
        </div>
        </>
        

    )
}