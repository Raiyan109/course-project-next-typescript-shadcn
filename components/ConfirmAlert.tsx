import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { X } from "lucide-react"
import bg from '@/public/images/Group 1000001836.png'


type Props = {}

const ConfirmAlert = (props: Props) => {
    return (
        <div className="relative">
            <AlertDialog >
                <AlertDialogTrigger>Confirm</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        {/* <div className="flex justify-between"> */}
                        <AlertDialogTitle className="mt-2">Congratulations!</AlertDialogTitle>
                        <AlertDialogCancel className="absolute right-3 -top-2">
                            <X />
                        </AlertDialogCancel>
                        {/* </div> */}
                        <AlertDialogDescription>
                            Your Student Name: <span style={{ color: 'white', fontWeight: 'bold' }}>Amir</span> Roll No: <span style={{ color: 'white', fontWeight: 'bold' }}>KC1122334</span>
                        </AlertDialogDescription>
                        <AlertDialogDescription>
                            Achieve 70 Out of 100
                        </AlertDialogDescription>
                        <AlertDialogDescription style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                            Pass
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>

                        <AlertDialogAction>Save Result</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default ConfirmAlert