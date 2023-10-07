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
      <div className='grid md:grid-cols-3'>
         {
          medical.map(medicaltim => <Madicalcard 
            key={medical.id}
            medical={medicaltim}/>)
         }
      </div>
    </div>
  )
}

export default Home
