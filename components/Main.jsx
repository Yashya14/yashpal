import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'>Yash Pal</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'A Full Stack Developer',
            1000, 
            'UI/UX Designer',
            1000,
            'Android Developer',
            1000,
            'Youtuber',
            1000
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          />
          </h1>
          <p className='py-8 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/yash-pal-327362244/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href='https://github.com/Yashya14'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='/contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            <Link href='https://www.instagram.com/yash.14.02/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
