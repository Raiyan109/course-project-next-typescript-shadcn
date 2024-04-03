import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

const CourseSelect = (props: Props) => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Online Courses" />
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

export default CourseSelect