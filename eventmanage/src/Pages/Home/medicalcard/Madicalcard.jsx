import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Madicalcard({medical}) {
  const notify = () => toast(`Booking Confirm pay ${price} doller ${name}`);
    const {id, name, short_description, image, price} = medical;
  return (
    <div>
       <div className="card w-96 bg-zinc-400 shadow-xl">
  <figure className="px-10 pt-10 w-full">
    <img src={image} alt="image" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-extrabold ">{name}</h2>
    <p className='font-bold text-gray-700'>{short_description}</p>
    <h2 className="card-title font-bold">{price}</h2>
    <div className="card-actions mt-5">
      <button onClick={notify} className="btn btn-secondary">Book Now</button>
      <button className="btn btn-primary">See Details</button>
    </div>
    <ToastContainer />
  </div>
</div>
    </div>
  )
}

export default Madicalcard
