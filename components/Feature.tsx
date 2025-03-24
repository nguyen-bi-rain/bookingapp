'use client'
import { Typography } from "@mui/material";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../components/EmblaCarouselArrowButtons'
import useEmblaCarousel from "embla-carousel-react";
import PropertyCard from "@/components/Card";
    

    const Feature = () => {
        const [emblaRef, emblaApi] = useEmblaCarousel(
            {
                align: 'start',
            }
        )
    
        const {
            prevBtnDisabled,
            nextBtnDisabled,
            onPrevButtonClick,
            onNextButtonClick
        } = usePrevNextButtons(emblaApi)
        return (
            <section>
                <div className="max-w-5xl mx-auto mt-20 flex items-center justify-between">
                    <div>
                        <Typography variant="h4" sx={{ fontWeight: 600, }} className="text-text-color" >Featured Destinations</Typography>
                        <Typography variant="body2" sx={{ marginTop: "1.125rem", maxWidth: "530px" }} className="text-[#778088]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</Typography>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
                            <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
                        </div>
                    </div>

                </div>
                <div className="overflow-hidden mt-14" ref={emblaRef}>
                    <div className="flex gap-2 " >
                        {Array.from(Array(10).keys().map((_, i) => {
                            return (
                                <PropertyCard key={i} id="1"
                                    title="Alaska: Vintage Double Decker Bus Tour & Thames "
                                    location="Miami Beach, Florida"
                                    price={249}
                                    rating={4}
                                    reviewCount={127}
                                    imageUrl="/assets/Rectangle 129.png"
                                    tags={["Duration 2 hours", "Transport Facility", "Family Plan"]} />
                            )
                        }))}
                    </div>
                </div>
            </section>
        )
    }

    export default Feature