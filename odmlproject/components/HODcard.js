export default function HODCard(props){
    const {dept} = props;
    return(
        <div className="w-44 h-14 bg-[#6969694D] rounded-lg shadow-lg flex justify-center items-center">

        <h1 className="text-white text-xl font-semibold"> HoD - {dept} </h1>

        </div>
    )
}