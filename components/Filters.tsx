import React from 'react'
import { Input } from './ui/input'
import StyledButton from './StyledButton'
import StyledSelect from './StyledSelect'
import CourseSelect from './CourseSelect'

type Props = {}

const Filters = (props: Props) => {
    return (
        <div>
            <Input />
            <StyledButton />
            <StyledSelect />
            <CourseSelect />
        </div>
    )
}

export default Filters