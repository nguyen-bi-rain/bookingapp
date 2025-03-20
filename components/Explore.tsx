import { cities, servicesForPlace } from "@/constants/data"
import { IMG } from "@/lib/assest"
import Image from "next/image"
import PropertyCard from "./Card"

const Explore = () => {



    return (
        <div className="mt-5">
            <div className="text-center">
                <h2 className="font-bold text-4xl text-text-color mb-5 ">Explore Popular Cities</h2>
                <span className="max-w-2xl mx-auto  block text-[#778088] text-base ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</span>
            </div>
            <div className="flex gap-2 justify-around mt-12 flex-wrap">
                {cities.map((city, i) => {
                    const isActived = city.isActived === true ? "bg-[#7BBCB0] text-white" : "bg-white text-[#495560]"
                    return (
                        <button className={`${isActived} border-[#7BBCB0] rounded-full px-8 py-3 border font-semibold text-sm `} key={i}>
                            {city.name}
                        </button>
                    )
                })}
            </div>
            <div className="mt-8 relative">
                <Image src={IMG} alt="newyork" className="w-full " />
                <div className="flex gap-28 items-center px-10 py-11 absolute -bottom-1/3 shadow-md left-0 right-0 max-w-4xl mx-auto bg-[#F9FDFF]">
                    <div className="">
                        <p className="text-text-color font-bold text-6xl">Alaska</p>
                        <p className="text-sm mt-3 text-[#778088]  ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    </div>
                    <div className="flex flex-wrap gap-4 ">
                        {servicesForPlace.map((service, i) => {
                            return (
                                <div key={i} className="flex gap-2 items-center bg-white px-5 py-3">
                                    {service.icon}
                                    <p className="text-text-color font-semibold text-sm">{service.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-44">
                <PropertyCard
                    id="1"
                    title="Alaska: Vintage Double Decker Bus Tour & Thames "
                    location="Miami Beach, Florida"
                    price={249}
                    rating={4}
                    reviewCount={127}
                    imageUrl="/assets/Rectangle 129.png"
                    tags={["Duration 2 hours", "Transport Facility", "Family Plan"]}
                />
                
            </div>

        </div>
        
    )
}

export default Explore