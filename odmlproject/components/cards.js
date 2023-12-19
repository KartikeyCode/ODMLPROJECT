export default function Cards({ data }) {
  return (
    <div className="md:p-4 md:flex-wrap max-w-[37rem] md:overflow-y-auto overflow-y-scroll  justify-start  max-h-screen flex flex-col  ">
      {data.map((item) => (
        <article
          key={item.RegistrationNumber}
          className=" w-52 md:w-72 rounded-xl border-2 border-gray-100 bg-white"
        >
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <a href="#" className="block shrink-0">
              <img
                alt="Speaker"
                src={item.imageSrc} // You can add an image source to your data object
                className="md:h-20 md:w-20 h-14 w-14 rounded-lg object-cover"
              />
            </a>

            <div>
              <h3 className="font-medium sm:text-lg">
                <a href="#" className="hover:underline">
                  {item.name}
                </a>
              </h3>

              <p className="RA line-clamp-2 text-sm text-gray-700">
                {item.RegistrationNumber}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <p className="text-xs md:text-base font-semibold">
                    {item.ODML}
                  </p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="text-xs md:text-base  sm:text-gray-500">
                  Year: {item.year}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
