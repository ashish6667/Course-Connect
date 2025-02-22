import React from 'react'
import logo from'../images/logo.webp'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Home()  {
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 '>
        <div className='h-screen text-white container mx-auto'>

            <header className='flex items-center justify-between  p-6'>
                <div className='flex items-center space-x-2'>
                    <img src={logo} alt='not valid image' className='w-10 h-10 rounded-full' />
                    <h1 className='text-2xl text-orange-500 font-bold'>CourseProvider</h1>
                </div>
                <div className='space-x-4'>
                  <Link 
                   to={"/login"} 
                   className='bg-transparent text-white py-2 px-4 border border-white rounded'
                   >
                   Login
                  </Link>
                  <Link 
                  to={"/signup"} 
                  className='bg-transparent text-white py-2 px-4 border border-white rounded'
                  >
                   Signup
                  </Link>
                </div>
             </header>

            <section className='text-center py-20'>
              <h1 className='text-4xl font-semibold text-orange-500'>
                CourseProvider</h1>
              <br />
              <p className='text-gray-500'>
                Sharpen your skills with courses crafted by experts.</p>
              <div className='space-x-4 mt-8'>
                <button className='bg-green-500 text-white py-3 px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black'>Explor courses</button>
                <button className='bg-white text-black py-3 px-6 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white'> Courses videos</button>
              </div>
            </section>
            <section>Section2</section>

            <footer>
              <div className='grid grid-cols-1 md:grid-cols-3'>               
                <div className='flex flex-col items-center md:items-start'>
                <div className='flex items-center space-x-2'>
                    <img src={logo} alt='not valid image' className='w-10 h-10 rounded-full' />
                    <h1 className='text-2xl text-orange-500 font-bold'>
                      CourseProvider
                    </h1>       
                </div>
                <div className='mt-3 ml-4'>
                  <p className='mb-2'>Follow us</p>
                  <div className='flex space-x-4'>
                    <a href="">
                      <FaFacebook />
                      </a>
                      <a href="">
                      <FaInstagram />
                        </a>
                        <a href="">
                        <FaTwitter />
                          </a>
                      </div>
                </div>
                </div>
                <div>center</div>
                <div>right</div>
              </div>
            </footer>
        </div>
    </div>
  );
}

export default Home