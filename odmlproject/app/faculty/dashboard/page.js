import Sidebar from "@/components/facultysidebar";
import ApplicationCardFac from "@/components/facultyappcard";
import applicationCounts from "./applicationsdata";
import HODCard from "@/components/HODcard";
import hodData from "./HoDdata";
export default function NewTeacherDash() {
  return (
    <div className="min-h-screen flex bg-[#1B1919] pb-10 sm:pb-0">
      <Sidebar />
      <div className="mainpage lg:pl-5 2xl:pl-28 pt-20 pl-10 ">
        <h1 className="text-5xl  text-white font-semibold self-center">
          Welcome <br /> Idly Sambar🪴
        </h1>

          <div className="flex flex-col lg:flex-row ">
        <div className="applicationcards flex flex-col gap-7 lg:grid lg:grid-cols-2 mt-16">
          {applicationCounts.map((group, index) => (
            <ApplicationCardFac
              key={index}
              department={group.department}
              section={group.section}
              bignumber={group.bignumber}
              pending={group.pending}
              approved={group.approved}
            />
          ))}
        </div>
          <div className="bg-[#303030] sm:w-52 w-60 xl:w-60 self-center lg:self-auto h-[30rem] lg:h-auto rounded-2xl mt-14 ml-0 lg:ml-4 2xl:ml-8 flex flex-col items-center py-6 gap-5">

          {hodData.map((data, index) => (
              <HODCard key={index} dept={data.dept} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
