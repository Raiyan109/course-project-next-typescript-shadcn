import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import headImg from '@/public/images/Group 1000001834.png'
import Image from "next/image"
import StudentSelect from "./StudentSelect"
import RollSelect from "./RollSelect"
import McqBtn from "./McqBtn"


type Props = {}

const StudentTable = (props: Props) => {
    return (
        <div>
            <Table className="border border-[#f1efef] bg-white">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[480px] p-0" colSpan={4}>
                            <Image src={headImg} height={480} width={480} alt='logo' />
                        </TableHead>
                        {/* <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="h-20">
                        <TableCell className="font-medium">Student Name:</TableCell>
                        <TableCell>
                            <StudentSelect />
                        </TableCell>

                    </TableRow>
                    <TableRow className="h-20">
                        <TableCell className="font-medium">Roll:</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            <RollSelect />
                        </TableCell>

                    </TableRow>
                    <TableRow className="h-20">
                        <TableCell className="font-medium">Course:</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            SHITO-RYU KARATE White Belt
                        </TableCell>

                    </TableRow>
                    <TableRow className="h-20">
                        <TableCell className="font-medium">Batch:</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            Karate Course 22041
                        </TableCell>

                    </TableRow>

                    <TableRow className="h-20">
                        <TableCell className="font-medium">Trainer:</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            Adil Rashid
                        </TableCell>
                    </TableRow>

                    <TableRow className="h-20 border-none">
                        <TableCell className="font-semibold text-2xl">Submitter answer</TableCell>
                    </TableRow>

                    <TableRow className="h-20">
                        <TableCell className="">MCQ File :</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            <McqBtn />
                        </TableCell>
                    </TableRow>

                    <TableRow className="h-20">
                        <TableCell className="">Practical video :</TableCell>
                        <TableCell className="text-center mr-4 text-black">
                            <McqBtn />
                        </TableCell>
                    </TableRow>

                    <TableRow className="h-20">
                        <TableCell className="">Result :</TableCell>
                        <TableCell className="text-center mr-4">
                            Confirm your result
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default StudentTable