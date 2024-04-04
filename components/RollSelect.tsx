import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

const RollSelect = (props: Props) => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[200px] outline-none border-none float-right">
                    <SelectValue placeholder="KC1122334" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default RollSelect