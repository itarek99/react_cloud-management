import { ChipIcon, SupportIcon } from '@heroicons/react/outline';
import { ArrowSmRightIcon, PhoneIcon } from '@heroicons/react/solid';
import supportImage from '../assets/support.jpg';

function Support() {
  return (
    <section name='support' className='container mx-auto relative'>
      <div className='w-full h-[480px] bg-gray-900/90 absolute'>
        <img
          className='w-full h-full object-cover mix-blend-overlay overflow-hidden'
          src={supportImage}
          alt='support'
        />
      </div>
      <div className='text-white relative'>
        <div className='text-center my-12'>
          <h2 className='pt-8 uppercase text-slate-300 text-2xl'>Support</h2>
          <h3 className='text-4xl md:text-5xl my-6 font-bold'>Finding The Right Team</h3>
          <p className='max-w-xl mx-auto'>
            Opsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam quidem natus a vero quaerat minima ea
            doloribus, eaque, rem velit qui nobis et illo.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 xl:gap-x-8 gap-y-16 px-6 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-lg'>
            <div className='p-6 py-8'>
              <PhoneIcon className='w-12 p-3 bg-indigo-600 text-white rounded-lg -mt-14' />
              <h3 className='font-bold text-2xl mt-6 mb-2'>Sales</h3>
              <p className='text-gray-500'>
                Sit amet consectetur elit Nemo sapiente sint, voluptas dolor veniam dicta adipisci provident ea numquam.
              </p>
            </div>
            <div className='bg-indigo-100 pl-6 py-4 cursor-pointer hover:bg-indigo-200'>
              <p className='flex items-center gap-x-2 text-indigo-600 font-medium '>
                Contact Us <ArrowSmRightIcon className='w-5' />
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-lg'>
            <div className='p-6 py-8'>
              <SupportIcon className='w-12 p-3 bg-indigo-600 text-white rounded-lg -mt-14' />
              <h3 className='font-bold text-2xl mt-6 mb-2'>Technical Support</h3>
              <p className='text-gray-500'>
                Sit amet consectetur elit Nemo sapiente sint, voluptas dolor veniam dicta adipisci provident ea numquam.
              </p>
            </div>
            <div className='bg-indigo-100 pl-6 py-4 cursor-pointer hover:bg-indigo-200'>
              <p className='flex items-center gap-x-2 text-indigo-600 font-medium '>
                Contact Us <ArrowSmRightIcon className='w-5' />
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-lg'>
            <div className='p-6 py-8'>
              <ChipIcon className='w-12 p-3 bg-indigo-600 text-white rounded-lg -mt-14' />
              <h3 className='font-bold text-2xl mt-6 mb-2'>Media Inquiries</h3>
              <p className='text-gray-500'>
                Sit amet consectetur elit Nemo sapiente sint, voluptas dolor veniam dicta adipisci provident ea numquam.
              </p>
            </div>
            <div className='bg-indigo-100 pl-6 py-4 cursor-pointer hover:bg-indigo-200'>
              <p className='flex items-center gap-x-2 text-indigo-600 font-medium '>
                Contact Us <ArrowSmRightIcon className='w-5' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Support;
