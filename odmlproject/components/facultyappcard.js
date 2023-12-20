export default function ApplicationCardFac(props){
    const { department, section, bignumber, pending, approved } = props;
    return(
        <div className=" px-6 py-12  md:w-52 xl:w-80 xl:h-60 w-80 h-60 bg-[#303030] rounded-2xl flex flex-col justify-center items-center "> 

<div className="flex sm:gap-1 xl:gap-5 gap-5">

               <div className="flex flex-col items-center ">
            <h1 className="department text-[#F0F0F0] sm:text-lg xl:text-xl text-xl font-semibold w-28">{department} </h1>
            <h2 className="section text-[#F0F0F0] text-xl font-semibold"> {section} </h2>
                </div> 

            <div className="bignumber">
                <h1 className="text-white text-7xl -mt-2"> {bignumber} </h1>
            </div>
</div>

            <div className="flex sm:flex-col flex-row xl:flex-row">

            <div className="pending w-28 h-8 flex items-center justify-center rounded-lg bg-[#E4ECF7] mt-10 ">
                <h2 className="text-[#505780] font-bold"> Pending {pending} </h2>
            </div>

            <div className="approved w-28 h-8 flex items-center justify-center rounded-lg bg-[#4C6FFF] mt-10 sm:ml-0 xl:ml-4 ml-4">
                <h2 className="text-[#303030] font-bold"> Approved {approved} </h2>
            </div>

            </div>
          </div>
    )
}