import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div id='About'>
        <section className="text-white font-2 bg-blue-500 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className='uppercase text-3xl font-extrabold m-5'> about us</div>
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="logo"
      src={require('../../../public/assets/pictures/logo.jpeg')}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font uppercase sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        shaheer estate
      </h1>
      <p className="mb-8 leading-relaxed">
      Welcome to our seasoned estate agents team, where expertise meets excellence. With years of collective experience under our belt, we navigate the intricacies of the real estate landscape with finesse. From property valuations to negotiations, we pride ourselves on delivering tailored solutions and unparalleled service. Trust in our proficiency to guide you through every step of your real estate journey, ensuring smooth transactions and satisfied clients. Together, lets turn your dreams into addresses and houses into homes.</p>
      <div className="flex justify-center">
      <Button variant="outline" className='text-gray-600 bg-slate-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg'>Contact</Button>

      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About