import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <div className='flex flex-col items-center p-10 h-screen bg-white'>
      <h1 className='text-black text-2xl mb-10'>
        HOOKS REACT
      </h1>
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
