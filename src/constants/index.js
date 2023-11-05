
import { planeImg, satelliteImg, powersupplyImg, eventImg, destination1, destination2, destination3, client1, client2, client3 } from "../assets"
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

export const testimonials = [
    {imgURL: client1, review:"“Flawless and personalized planning! Travel Globe turned my dream trip into reality with their impeccable service and attention to detail”", fullName:"Rajin Sakha", address
: "Bhaktapur, Nepal"},
    {imgURL: client2, review:"“Amazing travel experience! Travel Globe handled every detail with care, making my vacation completely worry-free and absolutely memorable.”", fullName:"Samir Wagle", address
: "Kathmandu, Nepal"},
    {imgURL: client3, review:"“Top-notch service! Travel Globe made my journey hassle-free with their expert planning and incredible destination insights.”", fullName:"Sagar Thapa Magar", address
: "Gulmi, Nepal"}
]

export const footerLinks = [
    {
        title: 'Company',
        links: [
            { name: 'About', link: "/"},
            { name: 'Careers', link: "/"},
            { name: 'Mobile', link: "/"},
        ],
    },
    {
        title: 'Contact',
        links: [
            { name: 'Help/FAQ', link: "/"},
            { name: 'Press', link: "/"},
            { name: 'Affiliates', link: "/"},
        ],
    },
    {
        title: 'More',
        links: [
            { name: 'Airline Fees', link: "/"},
            { name: 'Airline', link: "/"},
            { name: 'Low Fare Trips', link: "/"},
        ],
    },
  

]