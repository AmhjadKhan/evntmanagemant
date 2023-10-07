import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const notify = () => toast("Thanks For Following");
  return (
    <div>
      <h1 className="bg-zinc-400 py-20 mt-0 text-5xl text-white">About Us</h1>
      <div>
        <div className="card mt-7 w-full text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-3xl text-black">
              Story Medicine Is …
            </h2>
            <p className="text-black text-2xl">
              An Indigenous healing modality blending ritual with the written
              word. Medicine begins with words in Indigenous cultures. Myth and
              legend heal because they remind us of balance and right
              relationship. In Western culture, we are disconnected from our
              ancestral stories, and from the value of our individual story. To
              reclaim our story is to reclaim the lost self. This is what makes
              Story Medicine so transformational.
            </p>
            <br />
            <h2 className="card-title text-3xl text-black">
              Story Medicine Utilizes …
            </h2>
            <p className="text-black text-2xl">
              <ul>
                <li>An Indigenous frame of reference</li>
                <li>The power of words</li>
                <li>The sacredness of story</li>
                <li>Memory as raw material and community resource</li>
                <li>Heart-centered language for what has happened to us</li>
                <li>Community learning and healing</li>
              </ul>
            </p>
          </div>
          <button onClick={notify} className="bg-blue-400 py-20 mt-0 text-5xl text-white rounded-full">Follow us in Facebook</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default About;
