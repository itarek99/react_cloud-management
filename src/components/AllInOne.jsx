import { CheckIcon } from '@heroicons/react/solid';

function AllInOne() {
  return (
    <section name='platforms' className='container mx-auto p-2 mt-32'>
      <div className='text-center'>
        <h2 className='text-4xl md:text-5xl font-bold'>All-In-One Platform</h2>
        <p className='text-gray-500 max-w-md mx-auto mt-4 mb-12'>
          Perferendis odit perspiciatis doloribus officia sapiente doloremque asperiores, fugit voluptatum autem
          deserunt.
        </p>
      </div>
      <div className='grid gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <CheckIcon className='h-6 text-green-600 flex-shrink-0 items-start' />
          <div>
            <h3 className='font-bold'>Notification</h3>
            <p className='text-gray-500 mt-1'>Oremque officia molestias blanditiis nobis cum culpa magni optio nam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AllInOne;
