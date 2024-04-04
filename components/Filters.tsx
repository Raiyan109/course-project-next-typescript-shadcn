import React from 'react'
import { Input } from './ui/input'
import StyledButton from './StyledButton'
import StyledSelect from './StyledSelect'
import CourseSelect from './CourseSelect'
import ExamsTable from './ExamsTable'
import SearchInput from './SearchInput'

type Props = {}

const Filters = (props: Props) => {
    return (
        <div className='bg-white rounded-3xl shadow-md w-[1400px]  py-9 px-1'>
            {/* flex justify-end items-start */}
            <div className='space-y-9'>
                <div className='flex justify-end pl-4 pr-8 gap-10'> {/* Adjust padding to create space */}
                    {/* <Input /> */}
                    <SearchInput />
                    <StyledButton />
                    <StyledSelect />
                    <CourseSelect />
                </div>
                <div className="pl-4 pr-8 w-full"> {/* Adjust padding to create space */}
                    <ExamsTable />
                </div>
            </div>
        </div>
    )
}

export default Filters