import { Box, Button, Rating, Typography } from '@mui/material'
import { Heart, MapPin, Share2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Trending = () => {
    return (
        <section
            className=" -z-10 mt-20 min-h-screen relative before: before:content-[''] before:absolute before:inset-0 before:bg-[rgba(0,0,0,0.5)] before:bg-gradient-to-r before:from-[rgba(72,5,125,0.5150852577359069)] before:to-[rgba(42,221,231,0.48427293280593486)]"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                <Image
                    width={560}
                    height={585}
                    src="/assets/Group 194.png"
                    alt="green iguana"
                    className="relative z-10 bg-transparent "
                />
                <div>
                    <Button variant="contained" sx={{ borderRadius: "20px 20px", backgroundColor: "#AFFFF0", color: "var(--text-color)", textTransform: "uppercase", fontWeight: 500, fontSize: "0.825rem" }} >Trending now </Button>
                    <Typography variant="h2" sx={{ color: "#ffffff", fontWeight: 700, fontSize: "2.25rem", lineHeight: "2.5rem", marginTop: "1rem" }} >Wilderlife of Alaska</Typography>
                    <div className="flex items-center gap-2 mt-3">
                        <MapPin size={14} color="white" />
                        <Typography variant="body2" sx={{ color: "#ffffff", fontSize: "0.825rem", fontWeight: 500, borderRight: "1px solid #fff", paddingRight: "0.5rem" }} > Alaska, USA</Typography>
                        <Rating name="read-only" value={5} readOnly precision={0.5} size="small" />
                        <Typography variant="body2" sx={{ color: "#ffffff", fontSize: "0.825rem", fontWeight: 500 }} > 4.9 (20 reviews)</Typography>

                    </div>
                    <Typography variant="body1" sx={{ color: "#ffffff", fontSize: "1rem", fontWeight: 400, marginTop: "1rem", maxWidth: "505px" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget auctor nunc. Quisque ac nisl vel odio ultricies tincidunt. </Typography>
                    <div className="mt-12 flex items-center gap-5">
                        <Button variant="contained" sx={{ borderRadius: "40px 40px", backgroundColor: "#FFDA32", color: "var(--text-color)", fontWeight: 500, fontSize: "0.825rem", padding: "0.825rem 3.5rem", boxShadow :"0px 7px 20px 2px rgba(227,207,35,0.75)" }} >Book now</Button>
                        <span className="w-[1px] h-[14px]  bg-white ml-4 block"></span>
                        <div className="flex items-center gap-2">
                            <span className="block p-4 rounded-full bg-white/15 border-[1px] border-white "> <Heart size={14} color="white" /></span>
                            <span className="block p-4 rounded-full bg-white/15 border-[1px] border-white "><Share2 size={14} color="white" /></span>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Trending