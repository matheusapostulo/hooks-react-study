"use client";

import { useState, useEffect } from "react"

const ButtonAction = (props) => {
    return(
        <button onClick={props.onClick} className="text-black bg-gray-400 p-2 rounded-md text-sm focus:bg-slate-500 active:bg-slate-600">
            {props.children}
        </button>
    )
} 

export default function useEffectPage(){
    const [items, setItems] = useState([])
    const [resourceType, SetResourceType] = useState("Posts");

    const changeResourceType = (resourceType) =>{
        SetResourceType(resourceType)
    }

    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const responseJSON = await response.json()
            
            setItems(responseJSON)
        }

        fetchResourceTypes()
    }, [resourceType])

    console.log("Renderizou")

    return(
        <div className="flex flex-col text-black pl-5 pt-10 text-4xl">
            <h1 className="mb-3">
                {resourceType}
            </h1>

            <div className="flex flex-row text-xl space-x-3">
                <ButtonAction onClick={() => changeResourceType("posts")}>Posts</ButtonAction>
                <ButtonAction onClick={() => changeResourceType("comments")}>Comentários</ButtonAction>
                <ButtonAction onClick={() => changeResourceType("todos")}>Todos</ButtonAction>
            </div>
            
            {items.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>

        
    )
}