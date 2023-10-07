import React from 'react'

function Header() {
  return (
    <div>
      <div className="carousel w-full h-80">
  <div id="item1" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJfAIkfBxztC1ynu9NQt4g_vVVkZ46-LJ9Q&usqp=CAU" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD_JsmwXwrgvz-_sldjWR1YoYtXTlZ85nVQ&usqp=CAU" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFlCbpb_cLg9Jnm8rKhrqQKq0udWZ8ZIU0g&usqp=CAU" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhfyjX637PSyyrrDWw7WsykQOuWQqmA46IA&usqp=CAU" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default Header
