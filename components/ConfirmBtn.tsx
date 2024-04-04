import { Button } from '@/components/ui/button';
import ConfirmAlert from './ConfirmAlert';

type StyledButtonProps = React.ComponentProps<typeof Button>

const ConfirmBtn = ({ ...props }: StyledButtonProps) => {
    return (
        <Button size={'lg'}>
            <ConfirmAlert />
        </Button>
    )
}

export default ConfirmBtn