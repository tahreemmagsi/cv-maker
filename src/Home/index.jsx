import React from 'react';
import Header from '../components/ui/custom/header';
import Footer from '@/components/ui/custom/footer';
import homeImg from './../images/homepage.jpg';
import cvSample1 from './../images/template5.png';
import cvSample2 from './../images/template1.png';
import { AtomIcon, Edit, Share2, CheckCircle } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Home() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Header />
      <div className="bg-black h-[40rem] w-full flex justify-center items-center relative">
        {/* Container for the image and buttons */}
        <img src={homeImg} alt="Home" className="absolute object-cover opacity-80" />

        {/* Button container to ensure buttons are centered */}
        <div className="relative z-10 flex flex-col items-center">
          {isSignedIn ? (
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
              Create Resume
            </button>
          ) : (
            <Link to="/auth/sign-in">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Create Professional Resumes Easily</h2>
          <p className="text-gray-600 mt-4">Select from various templates, customize your resume, and download it instantly.</p>
        </div>

        {/* Sample CVs */}
        <div className="flex justify-center space-x-8">
          <div className="hover:scale-105 transition-transform duration-300">
            <img src={cvSample1} alt="CV Sample 1" className="h-64 rounded-lg shadow-lg" />
            <p className="text-center mt-2 font-medium">Modern Design</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <img src={cvSample2} alt="CV Sample 2" className="h-64 rounded-lg shadow-lg" />
            <p className="text-center mt-2 font-medium">Simple and Clean</p>
          </div>
        </div>

        {/* Additional Content */}
      </section>

      <div>
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">Give mock interview in just 3 simple easy steps</h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <AtomIcon className='h-8 w-8'/>
              <h2 className="mt-4 text-xl font-bold text-black">Write prompt for your form</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <Edit className='h-8 w-8'/>
              <h2 className="mt-4 text-xl font-bold text-black">Edit Your form</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <Share2 className='h-8 w-8' />
              <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>
          </div>
        </section>
      </div>

      {/* New Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Our Service?</h2>
          <p className="text-gray-600 mt-2">We offer an effortless and efficient way to create professional resumes</p>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">AI-Powered</h3>
            <p className="text-sm text-gray-600 mt-2">Generate high-quality resumes using cutting-edge AI technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">User-Friendly</h3>
            <p className="text-sm text-gray-600 mt-2">Our intuitive platform makes resume creation quick and easy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Customizable Templates</h3>
            <p className="text-sm text-gray-600 mt-2">Choose from a wide range of designs tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">"This tool made creating my resume so easy! The templates are beautiful and customizable."</p>
            <p className="mt-4 text-sm font-medium">- John Doe</p>
          </div>
          <div className="max-w-xs bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">"I landed my dream job thanks to the AI-powered resume generator."</p>
            <p className="mt-4 text-sm font-medium">- Jane Smith</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
