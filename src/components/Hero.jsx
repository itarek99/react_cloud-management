import { CloudDownloadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid';
import heroImg from '../assets/cyber-bg.png';

function Hero() {
  return (
    <section name='home' className='bg-zinc-200'>
      <div className='container mx-auto relative'>
        <div className='flex flex-col justify-between min-h-screen relative'>
          <div className='grid md:grid-cols-2 items-center m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 text-center md:text-left mt-10'>
              <p className='text-2xl'>Unique Sequencing & Production</p>
              <h1 className='my-3 text-4xl md:text-6xl font-semibold'>Cloud Management</h1>
              <p className='text-2xl'>This is our Tech Brand</p>
              <button className='btn-primary py-2 px-6 mt-4 sm:w-7/12 mx-auto md:mx-0'>Get Started</button>
            </div>
            <div>
              <img className='w-full' src={heroImg} alt='hero' />
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 mx-2 left-0 right-0 rounded-xl translate-y-1/2 bg-zinc-200 py-8 px-2 sm:px-6 shadow-xl border border-slate-300  lg:left-1/2 lg:-translate-x-1/2 lg:w-8/12 '>
          <div className=''>
            <p className='mb-6 text-xl font-medium text-left md:text-center'>Data Services</p>
            <div className='grid grid-cols-2 md:flex md:justify-between gap-y-3 gap-x-2 text-sm sm:text-base'>
              <p className='flex items-center'>
                <CloudDownloadIcon className='h-6 text-indigo-600 sm:mr-2' />
                App Security
              </p>
              <p className='flex items-center'>
                <DatabaseIcon className='h-6 text-indigo-600 sm:mr-2' />
                Dashboard Design
              </p>
              <p className='flex items-center'>
                <ServerIcon className='h-6 text-indigo-600 sm:mr-2' />
                Cloud Data
              </p>
              <p className='flex items-center'>
                <PaperAirplaneIcon className='h-6 text-indigo-600 sm:mr-2' />
                Api Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
