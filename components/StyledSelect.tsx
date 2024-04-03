import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

const StyledSelect = (props: Props) => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Karate Course 22041" />
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

export default StyledSelect