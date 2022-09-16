import './App.css';
import { FcCheckmark } from "react-icons/fc";

function App() {
  return (
    <div>

      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/8Yk6mmB/vintrica-splash.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='img' />
          <div>
            <h1 class="text-3xl">E-vignette: here’s how it works</h1>
            <p class="py-6">With vintrica it’s easy to register your number plate online for all motorways and main roads that require a vignette. You can simply buy a vignette either from home before you start your journey or on the spur of the moment during your journey on your smartphone before you get on the motorway.</p>

            <p className='flex items-center'><FcCheckmark className='font-bold text-3xl' /> Quick to use</p>
            <p className='flex items-center'><FcCheckmark className='font-bold text-3xl' /> Instant activation</p>
            <p className='flex items-center'><FcCheckmark className='font-bold text-3xl' /> Vignette directly on your mobile phone</p>
            <p className='flex items-center'><FcCheckmark className='font-bold text-3xl' /> Secure online payment</p>



          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
