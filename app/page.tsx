import Filters from "@/components/Filters";
import MarkingTable from "@/components/MarkingTable";
import Steps from "@/components/Steps";
import StudentTable from "@/components/StudentTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F6F6F6] h-screen">
      <div className="absolute top-48 left-[400px]">
        <h1 className="text-4xl font-semibold uppercase text-[#26235B] pt-5">Exam & Grading</h1>
        <Steps />
        <div className="">
          <Filters />
        </div>
        <div className="mt-20 flex justify-around">
          <StudentTable />
          <MarkingTable />
        </div>
      </div>
    </main>
  );
}
