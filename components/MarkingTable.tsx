import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import MarkInput from "./MarkInput"


type Props = {}

const MarkingTable = (props: Props) => {
    return (
        <div className="rounded-3xl border border-[#f1efef] bg-white">
            <Table className="flex-1  rounded-3xl">

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">No</TableHead>
                        <TableHead>Question Category</TableHead>
                        <TableHead>Full Mark</TableHead>
                        <TableHead>Student Mark</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>MCQ</TableCell>
                        <TableCell className="text-center">50</TableCell>
                        <TableCell>
                            <MarkInput />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Practical Video</TableCell>
                        <TableCell className="text-center">50</TableCell>
                        <TableCell>
                            <MarkInput />
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            <div className="py-5 flex justify-end mr-5">
                <h1 className="text-lg font-normal">Total marks out of 100 is: <span className="text-green-700">70</span>  </h1>

                <div>

                </div>
            </div>
        </div>
    )
}

export default MarkingTable