import React from 'react'
import { Input } from './ui/input'
import { Search } from "lucide-react"
type Props = {}

const SearchInput = (props: Props) => {
    return (
        <div className='relative'>
            <Input
                placeholder="Search anything here"
                className=''
            />
            <span className="absolute top-2 right-2 text-black/70">
                <Search size={20} />

            </span>
        </div>
    )
}

export default SearchInput