import Navbar from "@/components/navbar"
import Cards from "@/components/cards"
import cardData from "./cardData"
export default function TeacherDashboard(){

    

    return(
        <div className="min-h-screen w-full">
            <Navbar/>
            <div className=" flex justify-start items-center">

                <div className=" mt-16 md:mt-0 cardsdiv ">
                <Cards data={cardData}/>
                </div>

                <div className="teacherconsole ">

                </div>
            </div>
        </div>
    )
}