import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { Button } from "@/components/ui/button";



const Services = () => {
    return (
        <div className='bg-blue-500 h-screen  ' id='Services'>
            <div className='text-white mb-9 mt-12 text-center font-extrabold font-2 uppercase text-3xl md:5xl'><h1 className=''>our services</h1></div>
            <div className='flex justify-center items-center flex-grow  '>

                <Carousel className='h-[50%] w-[80vw] mt-8'>
                    <CarouselContent>
                        <CarouselItem><div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className=" w-full overflow-hidden">

                                                <Image
                                                    src={require('../../../public/assets/pictures/crousel1.jpg')}
                                                    alt='img'
                                                    className=' h-full'
                                                />
                                            </div>
                                            <div className="md:w-2/3 m-4 font-2 ">
                                                <div className="uppercase font-bold text-white text-3xl m-2">
                                                    sale
                                                </div>
                                                <div className="text-sm text-white mt-4 m-2">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta eum illo beatae quia nulla eaque quisquam. Facilis unde recusandae culpa temporibus ducimus incidunt illum. Odit corporis facere tempora atque.</p>
                                                </div>
                                                <div className="flex cursor-pointer">

                                                    <div className="grid m-1">
                                                        <div className="font-bold text-sm bg-slate-100 hover:text-blue-900 border rounded-sm mt-2">
                                                            <a href="#Contact"><Button variant="outline">Contact</Button></a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem><div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className=" w-full overflow-hidden">

                                                <Image
                                                    src={require('../../../public/assets/pictures/crousel2.jpg')}
                                                    alt='img'
                                                    className='w-full h-[15rem] md:h-[20rem]'
                                                />
                                            </div>
                                            <div className="md:w-2/3 m-4 font-2 ">
                                                <div className="uppercase font-bold text-white text-3xl m-2">
                                                    purchase
                                                </div>
                                                <div className="text-sm text-white mt-4 m-2">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta eum illo beatae quia nulla eaque quisquam. Facilis unde recusandae culpa temporibus ducimus incidunt illum. Odit corporis facere tempora atque.</p>
                                                </div>
                                                <div className="flex cursor-pointer">

                                                    <div className="grid m-1">
                                                        <div className="font-bold text-sm bg-slate-100 hover:text-blue-900 border rounded-sm mt-2">
                                                            <a href="#Contact"><Button variant="outline">Contact</Button></a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem><div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className=" w-full overflow-hidden">

                                                <Image
                                                    src={require('../../../public/assets/pictures/crousel3.jpeg')}
                                                    alt='img'
                                                    className='w-full h-[15rem] md:h-[20rem]'
                                                />
                                            </div>
                                            <div className="md:w-2/3 m-4 font-2 ">
                                                <div className="uppercase font-bold text-white text-3xl m-2">
                                                    bookings
                                                </div>
                                                <div className="text-sm text-white mt-4 m-2">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta eum illo beatae quia nulla eaque quisquam. Facilis unde recusandae culpa temporibus ducimus incidunt illum. Odit corporis facere tempora atque.</p>
                                                </div>
                                                <div className="flex cursor-pointer">

                                                    <div className="grid m-1">
                                                        <div className="font-bold text-sm bg-slate-100 hover:text-blue-900 border rounded-sm mt-2">
                                                            <a href="#Contact"><Button variant="outline">Contact</Button></a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem><div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className=" w-full overflow-hidden">

                                                <Image
                                                    src={require('../../../public/assets/pictures/rent.jpeg')}
                                                    alt='img'
                                                    className='w-full h-[15rem] md:h-[20rem]'
                                                />
                                            </div>
                                            <div className="md:w-2/3 m-4 font-2 ">
                                                <div className="uppercase font-bold text-white text-3xl m-2">
                                                    rent
                                                </div>
                                                <div className="text-sm text-white mt-4 m-2">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta eum illo beatae quia nulla eaque quisquam. Facilis unde recusandae culpa temporibus ducimus incidunt illum. Odit corporis facere tempora atque.</p>
                                                </div>
                                                <div className="flex cursor-pointer">

                                                    <div className="grid m-1">
                                                        <div className="font-bold text-sm bg-slate-100 hover:text-blue-900 border rounded-sm mt-2">
                                                            <a href="#Contact"><Button variant="outline">Contact</Button></a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem><div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className=" w-full overflow-hidden">

                                            <Image
                                                    src={require('../../../public/assets/pictures/int1.jpeg')}
                                                    alt='img'
                                                    className='w-full h-[15rem] md:h-[20rem]'
                                                />
                                            </div>
                                            <div className="md:w-2/3 m-4 font-2 ">
                                                <div className="uppercase font-bold text-white text-3xl m-2">
                                                    documentation
                                                </div>
                                                <div className="text-sm text-white mt-4 m-2">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta eum illo beatae quia nulla eaque quisquam. Facilis unde recusandae culpa temporibus ducimus incidunt illum. Odit corporis facere tempora atque.</p>
                                                </div>
                                                <div className="flex cursor-pointer">

                                                    <div className="grid m-1">
                                                        <div className="font-bold text-sm bg-slate-100 hover:text-blue-900 border rounded-sm mt-2">
                                                            <a href="#Contact"><Button variant="outline">Contact</Button></a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                        
                          </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>


        </div>
    )
}

export default Services