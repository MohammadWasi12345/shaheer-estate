import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div id='Home' className='h-screen '>


            <div className="flex justify-center bg-blue-500 p-8 ">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                        <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
                            <div className="text-5xl md:text-7xl text-pretty font-bold font-2">Discover Your Dream Home </div>
                            <div className=" uppercase text-pretty  font-2 ">
                            <p>Your journey to finding the perfect home starts here. Explore our curated listings, connect with top real estate experts, and experience a seamless path to your future residence. Let’s turn your vision into reality.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 md:space-x-9 md:m-4">
                            <div className="md:w-40 w-20 h-60 md:h-96  overflow-hidden rounded-xl">
                                <Image
                                    
                                    src={require('../../../public/assets/pictures/int2.jpeg')}
                                    className="h-full w-full"
                                    alt="img"
                                />
                            </div>
                            <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                <Image
                                    src={require('../../../public/assets/pictures/int3.jpeg')}
                                    className="h-full w-full"
                                    alt="img"
                                />
                            </div>
                            <div className="md:w-40  w-40 h-60 md:h-96  overflow-hidden rounded-xl">
                                <Image
                                    src={require('../../../public/assets/pictures/int1.jpeg')}
                                    className="w-full h-full"
                                    alt="img"
                                />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        <div/>

    </div >
  )
}

export default Hero