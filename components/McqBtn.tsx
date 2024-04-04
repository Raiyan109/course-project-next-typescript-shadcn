import { Button } from '@/components/ui/button';

type StyledButtonProps = React.ComponentProps<typeof Button>

type Props = {}

const McqBtn = ({ ...props }: StyledButtonProps) => {
    return (
        <div>
            <Button variant={'link'} className='underline'>
                name and id MCQ file
            </Button>
        </div>
    )
}

export default McqBtn