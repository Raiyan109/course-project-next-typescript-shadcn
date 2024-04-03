import React from 'react';
import { Button } from '@/components/ui/button';
import filterIcon from '@/public/images/Filter.png'
import Image from 'next/image';

type StyledButtonProps = React.ComponentProps<typeof Button>

function StyledButton({ ...props }: StyledButtonProps) {
    return (
        <Button variant="outline">
            <Image src={filterIcon} height={15} width={15} alt='logo' />
            Filters
        </Button>
    );
}

export default StyledButton;