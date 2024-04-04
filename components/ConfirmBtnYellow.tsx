import { Button } from '@/components/ui/button';

type StyledButtonProps = React.ComponentProps<typeof Button>

const ConfirmBtnYellow = ({ ...props }: StyledButtonProps) => {
    return (
        <div>
            <Button size={'lg'} className='bg-[#FFB606] text-[#26235B]'>
                Confirm
            </Button>
        </div>
    )
}

export default ConfirmBtnYellow