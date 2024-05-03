import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <div id='Team' className=''>
        <section className="text-white bg-blue-500 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-3xl font-extrabold title-font font-2 mb-4 text-white">
        OUR TEAM
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably havent
        heard of them.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require('../../../public/assets/pictures/pro.png')}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Alper Kamu
            </h2>
            <h3 className="text-gray-900 mb-3 capitalize">estate agent</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
           
           </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require('../../../public/assets/pictures/pro.png')}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Holden Caulfield
            </h2>
            <h3 className="text-gray-900 capitalize mb-3">estate agent</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require('../../../public/assets/pictures/pro.png')}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Atticus Finch
            </h2>
            <h3 className="text-gray-900 mb-3 capitalize">estate agent</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={require('../../../public/assets/pictures/pro.png')}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Henry Letham
            </h2>
            <h3 className="text-gray-900 mb-3 capitalize">estate agent</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Team