import { Button } from '@/components/ui/button';

type StyledButtonProps = React.ComponentProps<typeof Button>

const ConfirmBtn = ({ ...props }: StyledButtonProps) => {
    return (
        <Button size={'lg'}>
            Confirm
        </Button>
    )
}

export default ConfirmBtn