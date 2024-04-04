import React from 'react'
import { Input } from './ui/input'

type Props = {}

const MarkInput = (props: Props) => {
    return (
        <div className='flex justify-end items-center'>
            <Input
                type='number'
                placeholder='00'
                className='outline-none border-none bg-transparent w-24 text-center text-sm placeholder:text-gray-400'
            />
        </div>
    )
}

export default MarkInput