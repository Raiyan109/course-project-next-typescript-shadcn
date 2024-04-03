import stepImg from '@/public/images/step-image.png'
import Image from 'next/image';

type Props = {}

const Steps = (props: Props) => {
    return (
        <div>
            <Image src={stepImg} height={30} width={30} alt='logo' />
        </div>
    )
}

export default Steps;