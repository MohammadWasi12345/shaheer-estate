import React from 'react';
import Image from 'next/image';;
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,

} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
    return (
        <div className=' sticky z-10 shadow-lg  top-0' >


            <div className="flex justify-betweeen  bg-blue-500">
                <nav className="self-center w-full  max-w-7xl  ">
                    <div >
                        <Sheet>
                            <SheetTrigger className='lg:invisible md:visible px-3  mx-auto text-3xl'><IoMenu className='text-white' /></SheetTrigger>
                            <SheetContent className='bg-blue-500 w-65 text-white mb-8'>
                                <SheetHeader>
                                    <SheetTitle>SHAHEER ESTATE </SheetTitle>
                                    <SheetDescription>
                                        <ul className=' text-xl mb-4 p-4'>
                                            <li className='p-3 ' ><a href="#Home">Home</a></li>
                                            <li className='p-3 '><a href="#Services">Services</a></li>
                                            <li className='p-3 '><a href="#About">About</a></li>
                                            <li className='p-3 '><a href="#Team">Team</a></li>
                                            <li className='p-3 '><a href="#Contact">Contact</a></li>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-around items-center text-white md:mb-3">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-2">
                            <Image
                                alt='logo'
                                height={100}
                                width={100}
                                src={require("../../../public/assets/pictures/logo.jpeg")}
                                className='w-20 rounded-full mx-auto' />
                            <span className="ml-3 text-xl text-white font-extrabold custom-font tracking-widest">SHAHEER ESTATE</span>
                        </a>
                        <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
                            <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#Home">Home</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#Services">Services</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#About">About</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#Team"> Our Team</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#Contact">Contact</a>
                            </li>
                        </ul>
                        <div className="text-white text-center text-base pr-5  inline-flex">
                            {" "}
                            <a
                                href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
                            >
                                <i className="fa fa-twitter" />
                            </a>{" "}
                            <a
                                href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
                            >
                                <i className="fa fa-instagram" />
                            </a>{" "}
                            <a
                                href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
                            >
                                <i className="fa fa-facebook" />
                            </a>{" "}
                            <a
                                href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
                            >
                                <i className="fa fa-google" />
                            </a>{" "}
                            <a
                                href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
                            >
                                <i className="fa fa-linkedin" />
                            </a>{" "}
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    )
}
export default Navbar