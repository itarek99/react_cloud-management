import { CheckIcon } from '@heroicons/react/solid';

function Pricing() {
  return (
    <section name='pricing' className='container mx-auto px-2 mt-32'>
      <div className='text-center bg-gray-800 h-[576px] pt-16'>
        <p className='text-2xl md:text-3xl text-gray-300'>PRICING</p>
        <h2 className='text-4xl md:text-5xl font-bold text-white my-4'>The Right Price For Your Research</h2>
        <p className='text-gray-300 max-w-xl lg:max-w-3xl mx-auto mt-4'>
          Orem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis esse eaque deserunt incidunt
          voluptatum asperiores magni facere. Rerum, voluptate.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-5xl px-4 md:px-8 mx-auto -mt-56'>
        <div className='bg-white shadow-2xl p-8 rounded-xl '>
          <span className='bg-indigo-600 text-white rounded-full px-4 py-2 uppercase text-sm'>Standard</span>
          <p className='mt-8 text-4xl font-bold'>
            $49<span className='text-xl'>/mo</span>
          </p>
          <p className='mt-4 font-medium'>
            Orem ipsum dolor sit facere culpa amet conse dolor sit sicing elit is cotetur!
          </p>

          <ul className='mt-6'>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Ipsum dolor sit.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Amet consec adip.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Quis facere culpa.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2' /> Nihil perfer autem.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2' /> Itationem corporis est.
            </li>
          </ul>
          <button className='btn-primary w-full py-2 mt-4'>Get Started</button>
        </div>
        <div className='bg-white shadow-2xl p-8 rounded-xl'>
          <span className='bg-indigo-600 text-white rounded-full px-4 py-2 uppercase text-sm'>Enterprise</span>
          <p className='mt-8 text-4xl font-bold'>
            $99<span className='text-xl'>/mo</span>
          </p>
          <p className='mt-4 font-medium'>Dolor sit amet ectetur adipisicing autem est elit onsec adip it cotetur!</p>

          <ul className='mt-6'>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Ipsum dolor sit.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Amet consec adip.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Quis facere culpa.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Nihil perfer autem.
            </li>
            <li className='flex items-center py-2 px-0'>
              <CheckIcon className='h-6 mr-2 text-green-600' /> Itationem corporis est.
            </li>
          </ul>
          <button className='btn-primary w-full py-2 mt-4'>Get Started</button>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
