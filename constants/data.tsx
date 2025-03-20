import {BriefcaseBusiness, CarTaxiFront, Earth, MapPinned, TramFront } from 'lucide-react';
export const navItems = [
    {
        title :  "Home",
        url : '/',
    },
    {
        title :  "About Us",
        url : '/about',
    },
    
    {
        title :  "Popular Destinations",
        url : '/popular',
    },
    
    {
        title :  "Our Packages",
        url : '/packages',
    },
    {
        title :  "Help",
        url : '/help',
    },    
]


export const cities = [
    { name: "New York", image: "/assets/newyork.png" ,isActived:true},
    { name: "Paris", image: "/assets/paris.png" ,isActived:false},
    { name: "London", image: "/assets/london.png" ,isActived:false},
    { name: "Tokyo", image: "/assets/tokyo.png" ,isActived:false},
    { name: "Rome", image: "/assets/rome.png" ,isActived:false},
    { name: "Sydney", image: "/assets/sydney.png" ,isActived:false},
    { name: "Dubai", image: "/assets/dubai.png" ,isActived:false},
    { name: "Barcelona", image: "/assets/barcelona.png" ,isActived:false},
]
export const  servicesForPlace = [
    {name : "Public Transportations", icon : <TramFront width={16} height={16}  color='#D176E0'/>, color: "#D176E0"},
    {name : "Nature & Adventure", icon : <Earth width={16} height={16}  color='#7BBCB0'/>, color: "#7BBCB0"},
    {name : "Private Transportations", icon : <CarTaxiFront width={16} height={16}  color='#E4B613'/>, color: "#E4B613"},
    {name : "Business Tours", icon : <BriefcaseBusiness width={16} height={16}  color='#FC3131'/>, color: "#FC3131"},
    {name : "Local Visit", icon : <MapPinned width={16} height={16}  color='#5C9BDE'/>, color: "#5C9BDE"},
]