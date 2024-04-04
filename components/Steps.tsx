import stepImg from '@/public/images/belts pointer.png'
import Image from 'next/image';

type Props = {}

const Steps = (props: Props) => {
    return (
        <div className='py-10'>
            <Image src={stepImg} height={1000} width={1400} alt='logo' />
        </div>
    )
}

export default Steps;