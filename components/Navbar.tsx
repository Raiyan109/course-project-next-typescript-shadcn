import logo from '@/public/images/assessment-logo 3.png'
import teacher from '@/public/images/teacher-image.png'
import { Search } from 'lucide-react'
import Image from 'next/image'


export const Navbar = () => {
    return (
        <header className="p-4 bg-[#26235B] text-gray-800 h-44">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <Image src={logo} height={150} width={150} alt='logo' />
                </a>
                {/* hidden lg:flex */}
                <ul className="items-stretch space-x-3 flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white uppercase">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white uppercase">About</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white uppercase">Courses</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white uppercase">Events</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white uppercase">Contact</a>
                    </li>
                </ul>
                {/* hidden lg:flex */}
                <div className="items-center flex-shrink-0 flex gap-4">
                    <button className="self-center p-2 text-white bg-[#222052] rounded-full shadow-xl">
                        <Search size={24} />
                    </button>
                    {/* <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">

                    </button> */}
                    <Image src={teacher} height={60} width={60} alt='logo' className='self-center' />
                </div>
                {/* <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button> */}
            </div>
            <h1 className='text-4xl text-center text-yellow-400 mt-9 uppercase font-bold'>Teachers Profile</h1>
        </header>
    )
}
