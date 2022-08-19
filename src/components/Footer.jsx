import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-800 mt-32'>
      <div className='container mx-auto p-2 text-gray-200 py-12'>
        <div className='grid gap-8 sm:grid-cols-3 lg:grid-cols-6'>
          <div>
            <h6 className='uppercase mb-2 font-medium'>Solutions</h6>
            <ul>
              <li className='py-1 cursor-pointer'>Marketing</li>
              <li className='py-1 cursor-pointer'>Analytics</li>
              <li className='py-1 cursor-pointer'>Commerce</li>
              <li className='py-1 cursor-pointer'>Data</li>
              <li className='py-1 cursor-pointer'>Cloud</li>
            </ul>
          </div>
          <div>
            <h6 className='uppercase mb-2 font-medium'>Support</h6>
            <ul>
              <li className='py-1 cursor-pointer'>Pricing</li>
              <li className='py-1 cursor-pointer'>Documentation</li>
              <li className='py-1 cursor-pointer'>Guides</li>
              <li className='py-1 cursor-pointer'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className='uppercase mb-2 font-medium'>Company</h6>
            <ul>
              <li className='py-1 cursor-pointer'>About</li>
              <li className='py-1 cursor-pointer'>Blog</li>
              <li className='py-1 cursor-pointer'>Jobs</li>
              <li className='py-1 cursor-pointer'>Press</li>
              <li className='py-1 cursor-pointer'>Partners</li>
            </ul>
          </div>
          <div>
            <h6 className='uppercase mb-2 font-medium'>Legal</h6>
            <ul>
              <li className='py-1 cursor-pointer'>Claim</li>
              <li className='py-1 cursor-pointer'>Private</li>
              <li className='py-1 cursor-pointer'>Policies</li>
              <li className='py-1 cursor-pointer'>Term</li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h6 className='uppercase mb-2 font-medium'>Subscribe to our Newsletter</h6>
            <p>The latest news, articles, and resources sent to your inbox weekly.</p>
            <div className='mt-8 flex flex-col sm:flex-row sm:space-x-4'>
              <input
                className='w-full p-2 rounded-sm outline-none text-gray-900'
                type='email'
                placeholder='Your email'
              />
              <button className='bg-indigo-600 p-2 rounded-sm hover:bg-indigo-700 mt-4 sm:mt-0'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className='border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
          <p className='font-sm sm:font-base'>&copy; 2022 Cloud Management. All Right Reserved</p>
          <div className='flex space-x-2'>
            <FaFacebook className='text-2xl cursor-pointer' />
            <FaTwitter className='text-2xl cursor-pointer' />
            <FaLinkedinIn className='text-2xl cursor-pointer' />
            <FaGithub className='text-2xl cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
