import { Button } from '@/components/ui/button';

type StyledButtonProps = React.ComponentProps<typeof Button>

const ConfirmOpacityBtn = ({ ...props }: StyledButtonProps) => {
    return (
        <Button disabled size={'lg'}>
            Confirm
        </Button>
    )
}

export default ConfirmOpacityBtn