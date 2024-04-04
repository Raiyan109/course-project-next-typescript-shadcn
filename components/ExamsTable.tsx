import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ConfirmBtn from "./ConfirmBtn"
import ConfirmOpacityBtn from "./ConfirmOpacityBtn"

type Props = {}

const ExamsTable = (props: Props) => {
    return (
        <div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Batch</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Start time</TableHead>
                        <TableHead>End time</TableHead>
                        <TableHead className="text-center">Teacher Confirmation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>1st Monthly</TableCell>
                        <TableCell>Karate Course 22041</TableCell>
                        <TableCell>27th Feb, 2024</TableCell>
                        <TableCell>10:00 am</TableCell>
                        <TableCell>2:00 pm</TableCell>
                        <TableCell className="text-center">
                            <ConfirmBtn />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>2nd Monthly</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>Karate Course 22041</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>26th March, 2024</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>10:00 am</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>2:00 pm</TableCell>
                        <TableCell className="text-center">
                            <ConfirmOpacityBtn />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium" style={{ color: "gray", opacity: '0.6' }}>2</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>3rd Monthly</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>Karate Course 22041</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>23th April, 2024</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>10:00 am</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>2:00 pm</TableCell>
                        <TableCell className="text-center">
                            <ConfirmOpacityBtn />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>2</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>Final</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>Karate Course 22041</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>1th May, 2024</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>10:00 am</TableCell>
                        <TableCell style={{ color: "gray", opacity: '0.6' }}>2:00 pm</TableCell>
                        <TableCell className="text-center">
                            <ConfirmOpacityBtn />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default ExamsTable