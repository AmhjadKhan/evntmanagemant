import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <button className='btn btn-success text-white'>
         <Link to='/'>Home</Link>
      </button>
      
      <h1 className='text-5xl mt-10 font-bold'>Error your<br /> page <br />not found</h1>
      <h2 className='text-8xl'>404</h2>
    </div>
  )
}

export default Error
