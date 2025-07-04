import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function Home() {

  useEffect(() => {
    console.log("Home Page Mounted");

  },[]);

  const [count, setCount] = useState(0);

  useEffect(()=>{

    console.log("Home Component Updated");
    
  }, [count]);

  useEffect(()=>{
   return ()=>{
     console.log("Home Page Unmounted")
   }
  }, []);

  function IncrementHandle()
  {
        setCount(prev=>prev +1)
  }

  function DecrementHandle()
  {
        setCount(prev=>prev-1)
  }


  return (
    <div className='mt-24'>

      <h1 className="text-2xl text-center mt-24 font-black">This is Home Page</h1>
      <h1 className='text-2xl text-center mt-24 font-black'>Counting Number : {count}</h1>
      <div className="w-[400px] mx-auto flex justify-center gap-5 mt-5">
        <button className='bg-black text-white py-2 px-2 rounded-xl cursor-pointer ' onClick={IncrementHandle}>Increment</button>
        <button className='bg-black text-white py-2 px-2 rounded-xl cursor-pointer ' onClick={DecrementHandle}>Increment</button>

      </div>
    </div>
  )
}

export default Home
