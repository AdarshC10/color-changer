import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color , setColor]= useState('green')

// function changeColor(color){
//   setColor(color)
//because we don't use extra function here we can use setColor
// }

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
     
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3  py-2 rounded-3xl'>
   
      <button 
      onClick={()=>setColor("red")}
      className='outline-none px-4 py-1 rounded-full bg-red-600   text-black shadow-lg' 
      style={{backgroundColor:'red'}}
      >
        Red
      </button>
      <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'blue'}}>
      Blue
      </button>
      <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'yellow'}}>
     Yellow
      </button>
      <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'orange'}}>
        Orange
      </button>
      <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'pink'}}>
        Pink
      </button>
      <button onClick={()=> setColor("violet")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'violet'}}>
        Violet
      </button>
      <button onClick={()=> setColor("brown")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'brown'}}>
       Brown
      </button>
      <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}>
        Black
      </button>
      <button onClick={()=> setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'white'}}>
        White
      </button>
     
      </div>

    </div>

   </div>
  )
}

export default App
