import Link from "next/link";

export default function TypesCard({
  imageSrc,
  title,
  description,
  bgColor,
}: any) {
  return (
    <div className="shadow-xl w-fit mx-auto rounded-[35px] hover:scale-[1.01] cursor-pointer transition-all duration-500">
      <div
        className={`md:w-[40rem] md:scale-105 h-[18rem] rounded-[35px] flex justify-end mx-auto ${bgColor} relative overflow-hidden shadow-inner`}
      >
        <div className="absolute hidden md:block -left-20 h-full">
          <img
            src={imageSrc}
            alt={title}
            className="md:w-[20rem] h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>

        <div className="md:min-w-[15rem] md:max-w-[10rem]"></div>
        <div className="flex md:ml-10 flex-col gap-5 justify-evenly items-end w-full">
          <div className="flex flex-col p-5">
            <span className="text-3xl font-semibold text-white">{title}</span>
            <span className="text-base md:text-xl font-medium text-white">
              {description}
            </span>
          </div>

          <Link
            href={"/about-us"}
            className="text-xl mb-5 text-white drop-shadow-xl mx-10 border-b-2 border-white w-fit border-dashed font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
