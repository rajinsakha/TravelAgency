
import { planeImg, satelliteImg, powersupplyImg, eventImg, destination1, destination2, destination3 } from "../assets"
import {GrMap} from 'react-icons/gr';
import {MdOutlinePayments} from 'react-icons/md';
import {BiTaxi} from 'react-icons/bi';



export const navLinks = [
    {href: "#destinations", label:"Destinations"},
    {href:"#hotels",label:"Hotels"},
    {href:"#flights",label:"Flights"},
    {href:"#bookings", label:"Bookings"},
]

export const services = [
    {imgURL:satelliteImg ,title:"Calculated Weather", desc:"Built Wicket longer admire do barton vanity itself do in it."},
    {imgURL:planeImg, title:"Best Flights", desc:"Engrossed Listening. Park gate sell they west hard for the"},
    {imgURL:eventImg, title:"Local Events", desc:"Barton Vanity itself do in it.Prefered to men it, engrosed listening"},
    {imgURL:powersupplyImg, title:"Customization", desc:"We deliver outsourced aviation services for our customers."},
]

export const destinations = [
    {imgURL: destination1 , title:"London, UK", price:"4.2k", trip:"10 Days Trip"},
    {imgURL: destination2 , title:"Rome, Italy", price:"5.32k", trip:"12 Days Trip"},
    {imgURL: destination3 , title:"Full Europe", price:"15k", trip:"28 Days Trip"},
]

export const bookings = [
    {icon: GrMap, title:"Choose Destination", desc:"Choose your desired destination to book your trip.", color:"#F0BB1F"},
    {icon: MdOutlinePayments, title:"Make Payment", desc:"After choosing your destination, you can make payment through various payment gateways.",color:'#F15A2B'},
    {icon: BiTaxi, title:"Reach Airport on Selected Date", desc:"You must reach airport on selected date to enjoy your trip.",color:"#006380"},
]