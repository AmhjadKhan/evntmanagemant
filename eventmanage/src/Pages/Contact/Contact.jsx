import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const notify = () => toast("We will receved the call");
  return (
    <div>
      <h1 className='bg-blue-500 py-20 mt-0 text-5xl text-white'>Contact us</h1>
      <div>
      <div className="card mt-7 w-full text-primary-content">
     <div className="card-body">
       <h2 className="card-title text-3xl text-black">Medical Team</h2>
       <p className='text-black'>medical orem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolorum quod rerum. Doloremque, quam. Rem, recusandae ex accusamus vitae facilis ratione atque corporis, vero beatae pariatur consectetur dignissimos dolor incidunt placeat doloremque deleniti cupiditate animi similique aliquam in totam iusto quos, veniam nesciunt. Voluptate libero nihil, iste, a magnam quibusdam dignissimos cum quod temporibus ut est labore maiores odio itaque adipisci ipsum ipsam nisi, illum sapiente rem quidem. Rem ab facere error praesentium quisquam, tempora quia possimus commodi laudantium ad omnis? Repudiandae, deserunt cum! Excepturi, sequi veritatis. Libero tenetur eligendi culpa, explicabo eum labore optio corrupti cupiditate maiores porro repellendus!</p>
    <div className="card-actions justify-end">
      <button onClick={notify} className="btn bg-red-500 text-white">Call Us</button>
      <ToastContainer />
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Contact
