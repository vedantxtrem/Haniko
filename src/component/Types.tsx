export default function Types({ imageSrc, title, description, bgColor }:any) {
    return (
        <div className="shadow-xl w-fit mx-auto rounded-[35px] hover:scale-105 cursor-pointer transition-all duration-500">
            <div
                className={`md:w-[40rem] h-[18rem] rounded-[35px] flex justify-end mx-auto ${bgColor} relative overflow-hidden shadow-inner`}
            >
                <div className="absolute hidden md:block -left-20 h-full">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="md:w-[20rem] h-full object-cover"
                    />
                </div>

                <div className="md:min-w-[15rem] md:max-w-[10rem]"></div>
                <div className="flex md:ml-10 flex-col gap-5 justify-evenly items-end w-full">
                    <div className="flex flex-col gap-3 p-5">
                        <span className="text-3xl font-semibold text-slate-900">
                            {title}
                        </span>
                        <span className="text-xl font-medium text-slate-900">
                            {description}
                        </span>
                    </div>

                    <span className="text-xl mb-5 text-slate-800 drop-shadow-xl mx-10 border-b-2 border-slate-800 w-fit border-dotted font-semibold">
                        Learn More
                    </span>
                </div>
            </div>
        </div>
    );
}
