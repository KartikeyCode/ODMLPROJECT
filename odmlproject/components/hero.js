import heroimg from "../public/graphic1.jpg"
import Image from "next/image"

export default function Hero(){
    return(
        <div className="p-8 md:mt-20 mt-28 max-h-screen w-full ">
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-around">
                <h1 className="self-center text-black md:w-80 md:text-8xl text-3xl font-Chivo font-semibold "> Manage OD/ML forms securely online  </h1>
                <Image className="w-96 md:w-[40rem]" src={heroimg} />
            </div>
        </div>
    )
}