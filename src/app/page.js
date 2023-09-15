import Image from 'next/image'
import Link from 'next/link'
import botaoHome from './components/botaoHome'

export default function Home() {
  return (
    <div className='flex flex-col items-center p-10 h-screen bg-white'>
      <h1 className='text-black text-2xl mb-10'>
        HOOKS REACT
      </h1>
      <ol className='text-black self-start space-y-2'>
        <li> 
          <Link href="/useState" className='text-black text-xl'>
              Use state
          </Link>
        </li>
        <li>
          <Link href="/useEffect" className='text-black text-xl'>
              Use effect
          </Link>
        </li>
        <li>
          <Link href="/useReduce" className='text-black text-xl'>
              Use reduce
          </Link>
        </li>
      </ol>
      <botaoHome/>
    </div>
  )
}
