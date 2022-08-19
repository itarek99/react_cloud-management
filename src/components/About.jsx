function About() {
  return (
    <div name='about' className='container mx-auto my-32 px-2'>
      <div>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Trusted By Developer <br /> Across The World
          </h2>
          <p className='max-w-md mx-auto my-4 text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore pariatur porro odio eligendi ullam.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row text-center space-y-8 sm:space-y-0 sm:space-x-8'>
          <div className='border py-8 rounded-xl w-full shadow-xl'>
            <p className='text-5xl md:text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-500 mt-2'>Completion</p>
          </div>

          <div className='border py-8 rounded-xl w-full shadow-xl'>
            <p className='text-5xl md:text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-500 mt-2'>Delivery</p>
          </div>

          <div className='border py-8 rounded-xl w-full shadow-xl'>
            <p className='text-5xl md:text-6xl font-bold text-indigo-600'>100K</p>
            <p className='text-gray-500 mt-2'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
