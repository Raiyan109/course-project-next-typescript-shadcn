import Link from "next/link"
import teacher from '@/public/images/teacher-image.png'
import education from '@/public/images/Education.png'
import online from '@/public/images/Group.png'
import students from '@/public/images/Education(1).png'
import attendance from '@/public/images/Group(1).png'
import exam from '@/public/images/Exam.png'
import notification from '@/public/images/Vector.png'
import profile from '@/public/images/User.png'
import setting from '@/public/images/Gear.png'
import signout from '@/public/images/Frame.png'
import Image from 'next/image'

export const Sidebar = () => {
    const links = [
        {
            name: 'Karate Course',
            icon: education
        },
        {
            name: 'Online Karate Courses',
            icon: online
        },
        {
            name: 'Students',
            icon: students
        },
        {
            name: 'Attendance',
            icon: attendance
        },
        {
            name: 'Exam & Grading',
            icon: exam
        },
    ]
    const bottomLinks = [
        {
            name: 'Notification',
            icon: notification
        },
        {
            name: 'My Profile',
            icon: profile
        },
        {
            name: 'Setting',
            icon: setting
        },
        {
            name: 'Sign out',
            icon: signout
        }
    ]
    return (
        <div>
            {/* w-14 hover:w-64 md:w-64 transition-all duration-300 h-full */}
            <div className="fixed flex flex-col top-48 left-10 h-[730px] w-14 hover:w-64 tiny:w-14  md:w-64 lg:w-64 xl:w-64 2xl:w-64 3xl:w-64 transition-all duration-300 bg-white text-black border-none rounded-3xl z-10 sidebar">
                <div className="overflow-y-hidden overflow-x-hidden flex flex-col justify-between flex-grow">

                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5 md:flex lg:flex xl:flex 2xl:flex 3xl:flex hidden items-center justify-center ">
                            <Image src={teacher} height={150} width={150} alt='logo' />
                        </li>
                        <li className="px-5 md:flex lg:flex xl:flex 2xl:flex 3xl:flex hidden items-center justify-center pt-4">
                            <h1 className="text-xl font-medium">Adil Rashid</h1>
                        </li>
                        <li className="px-5 md:flex lg:flex xl:flex 2xl:flex 3xl:flex hidden items-center justify-center pt-4">
                            <h1 className="text-sm text-gray-400">Sr. Karate Teacher</h1>
                        </li>
                        <div className="space-y-1 pb-5">
                            {links.map((link) => (
                                <li>
                                    <Link href='add' className="relative flex flex-row items-center justify-center h-11 focus:outline-none 
                            bg-[#E9E9EF]
                            hover:bg-[#26235B]  hover:text-white  border-l-4 border-transparent hover:border-blue-500  pr-6">
                                        <span className="inline-flex justify-center items-center ml-0 md:ml-4">
                                            <Image src={link.icon} height={15} width={15} alt='icons' />
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate hidden md:block lg:block xl:block 2xl:block 3xl:block">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </div>

                        {bottomLinks.map((link) => (
                            <li className="">
                                <Link href='add' className="relative flex flex-row items-center justify-center h-11 focus:outline-none 
                            bg-[#E9E9EF]
                            hover:bg-[#26235B]  hover:text-white  border-l-4 border-transparent hover:border-blue-500  pr-6">
                                    <span className="inline-flex justify-center items-center ml-0 md:ml-4">
                                        <Image src={link.icon} height={15} width={15} alt='icons' />
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate hidden tiny:hidden md:block lg:block xl:block 2xl:block 3xl:block">{link.name}</span>
                                </Link>
                            </li>
                        ))}


                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
                </div>
            </div>
        </div>
    )
}
