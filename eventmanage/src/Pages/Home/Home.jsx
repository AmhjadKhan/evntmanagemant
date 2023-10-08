import React from 'react'
import Header from '../shared/Header'
import Navber from '../shared/Navber'
import { useLoaderData } from 'react-router-dom'
import Madicalcard from './medicalcard/Madicalcard'

const Home = () => {
  const medical = useLoaderData();
  // console.log(medical)
  return (
    <div>
      <Header />
      <button className='text-4xl bg-success h-24 w-52 rounded-2xl text-white font-semibold mb-10'>ALL SERVICE</button>
      <div className='grid md:grid-cols-3 gap-5'>
         {
          medical.map(medicaltim => <Madicalcard 
            key={medicaltim.id}
            medical={medicaltim}/>)
         }
      </div>
    </div>
  )
}

export default Home
