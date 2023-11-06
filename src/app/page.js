'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ListItem = (props) => {
  console.log(props.href)
  return(
    <li> 
      <Link href={`/${props.href}`} className='text-black text-xl'>
          {props.children}
      </Link>
    </li>
  )
}

export default function Home() {
  const [tecla, setTecla] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.on)
    setTecla(`${e.keyCode} ${e.key}`)
  }

  return (
    <div className='flex flex-col items-center p-10 h-screen bg-white'>
      <h1 className='text-black text-2xl mb-10'>
        HOOKS REACT
      </h1>
      <input
        type="text"
        value={tecla}
        onKeyDown={(e) => handleSubmit(e)}
        // fazendo a barra de pesquisa se adaptar a 3 diferentes tamanhos de telas (Trocar o "lg:py-2" quando arrumar a altura do select)
        // Diminuir text do placeholder quando vai pro mobile 
        className="py-1 pr-1 placeholder:text-xs sm:pr-11 lg:py-2 lg:pr-36 rounded-lg dark:text-slate-600 text-slate-500 placeholder:text-slate-400 lg:placeholder:text-sm focus:ring-yellow-600 focus:border-amber-600"
        placeholder={"teste"}
      />
      <h1 className='text-black'>{tecla}</h1>
      <ol className='text-black self-start space-y-2'>
        <ListItem href="useState">
          Use State
        </ListItem>
        <ListItem href="useRef">
          Use Ref
        </ListItem>
        <ListItem href="useEffect">
          Use Effect
        </ListItem>
        <ListItem href="useReduce">
          Use Reduce
        </ListItem> 
      </ol>
      <botaoHome/>
    </div>
  )
}
