export default function Types() {
    return (
        <div className="shadow-2xl w-fit mx-auto rounded-2xl">
            <div className=" md:w-[40rem] h-[18rem] flex justify-end mx-auto bg-[#ffdfcc] relative overflow-hidden rounded-2xl shadow-xl shadow-inner">
                <div className="absolute hidden md:block -left-20">
                    <img
                        src="https://brokenovenbaking.com/wp-content/uploads/2022/11/honey-bun-cookies-14.jpg"
                        alt=""
                        className="md:w-[20rem] h-auto"
                    />
                </div>

                <div className="md:min-w-[15rem] md:max-w-[10rem]"></div>
                <div className="flex md:ml-10 flex-col gap-5 justify-evenly items-end w-full">
                    <div className="flex flex-col gap-3 p-5">
                        <span className="text-3xl font-semibold text-slate-900">
                            Linden Honey
                        </span>
                        <span className="text-xl  font-medium text-slate-900">
                            Linden honey has a strong and very distinctive aroma. At first sniff…
                        </span>
                    </div>

                    <span className="text-xl mb-5  text-slate-800 drop-shadow-xl mx-10 border-b-2 border-slate-800 w-fit border-dotted  font-semibold">
                        Learn More
                    </span>
                </div>
            </div>
        </div>
    )
}