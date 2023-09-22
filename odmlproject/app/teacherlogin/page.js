import img from "../../public/graphic1.jpg"
import Image from "next/image"
import Navbar from "@/components/navbar"
export default function TeacherLogin(){
    return(
        <div>
               <Navbar/>
        <div className=" md:-mt-12 flex flex-col items-center justify-center min-h-screen w-full bg-[#FAE969]">

                <div className=" md:pt-0 pt-32 p-4 flex items-center md:justify-between justify-center bg-white rounded-xl w-96 h-auto md:w-[85rem] md:h-[35rem]">
                    <div className="md:px-10 flex flex-col items-center  md:h-96 h-[50rem] ">
                        <h1 className="text-black font-mono  text-3xl">
                            Teacher Login:
                        </h1>
                        <div className="flex flex-col form mt-8">
                          <h2 className="mb-1 text-black text-xl font-semibold"> Username:  </h2>  
                        <input className="p-1 text-xl border-2 rounded-xl border-black "/>
                        </div>
                        <div className="flex flex-col form mt-8">
                          <h2 className="mb-1 text-black text-xl font-semibold "> Password:  </h2>  
                        <input className="p-1 text-xl border-2 rounded-xl border-black"/>
                        </div>
                    </div>

                    <div className="md:flex flex-col hidden md:flex-row">
                    <Image src={img} className="w-[40rem] " />
                    </div>
                </div>
        </div>
        </div>
    )
}