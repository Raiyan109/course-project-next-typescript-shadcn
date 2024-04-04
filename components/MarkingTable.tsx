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
import ConfirmBtnYellow from "./ConfirmBtnYellow"
import AllResultBtn from "./AllResultBtn"


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
                    <TableRow style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <TableCell>2</TableCell>
                        <TableCell>Practical Video</TableCell>
                        <TableCell className="text-center">50</TableCell>
                        <TableCell>
                            <MarkInput />
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            <div className="py-5 flex justify-end mr-8">
                <div className="flex flex-col gap-8">
                    <h1 className="text-lg font-normal mr-5">Total marks out of 100 is: <span className="text-green-700">70</span>  </h1>

                    <div className="flex items-center gap-6 ml-9">
                        <ConfirmBtnYellow />
                        <AllResultBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarkingTable