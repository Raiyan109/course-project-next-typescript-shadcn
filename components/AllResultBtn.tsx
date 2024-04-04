import { Button } from '@/components/ui/button';
import ConfirmAlert from './ConfirmAlert';
import { CircleChevronRight } from 'lucide-react';
import arrow from '@/public/images/arrow 3.png'
import Image from 'next/image';

type StyledButtonProps = React.ComponentProps<typeof Button>

const AllResultBtn = ({ ...props }: StyledButtonProps) => {
    return (
        <Button size={'lg'} className='flex items-center gap-4 px-5 text-[#26235B]' variant={'secondary'}>
            All Result
            <Image src={arrow} width={15} height={15} alt='arrow' />
        </Button>
    )
}

export default AllResultBtn