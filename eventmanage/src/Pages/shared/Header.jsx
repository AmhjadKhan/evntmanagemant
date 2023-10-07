import React from 'react'

function Header() {
  return (
    <div>
      <div className="w-full  rounded-xl mb-64">
        <div className='grid md:grid-cols-2 space-x-64'>
           <div className=''>
           <h1 className='text-6xl font-bold text-red-700'>Medical center <br /><span className='font-bold text-blue-700'>Service</span></h1>
           <p className='mt-10 ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae saepe iste officia distinctio sequi magnam, aspernatur vel quibusdam eveniet accusamus velit? Exercitationem, voluptatum consequuntur quo recusandae quod aliquam perspiciatis, praesentium quibusdam laudantium iste sint pariatur provident. Beatae temporibus saepe odit laborum sint esse est, assumenda doloribus sapiente nulla ducimus consequatur.</p>
           </div>
          <div >
          <img className='h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zUMtnVgXcy7foYVk4JDVnhNZLi4JVi_qgw&usqp=CAU" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
