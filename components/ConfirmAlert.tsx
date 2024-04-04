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
import bigFull from '@/public/images/big-full.png'
import bigHalf from '@/public/images/big-half.png'
import smallHalf from '@/public/images/small-half.png'
import Image from "next/image"


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
                        <Image src={bigFull} alt="circle" height={160} width={160} className="absolute bottom-0 left-0" />
                        <Image src={smallHalf} alt="circle" height={90} width={90} className="absolute bottom-0 right-10" />
                        <Image src={bigHalf} alt="circle" height={160} width={160} className="absolute -top-5 -right-1 overflow-hidden z-0" />
                        <Image src={bigFull} alt="circle" height={60} width={60} className="absolute top-16 right-52" />
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