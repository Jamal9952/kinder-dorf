import ProductImage from "../assets/productImage.jpg";
import blueShark from "../assets/blueShark.jpg";
import jumpSuit from "../assets/jumpSuit.jpg";
import knitHat from "../assets/knitHat.jpg";
import denimShorts from "../assets/denimShorts.jpg";
import nightLamp from "../assets/nightLamp.jpg";

import girlCardImage from "../assets/categoryGirls.jpg";
import boyCardImage from "../assets/categoryBoys.jpg";
import shoeCardImage from "../assets/categoryShoes.jpg";
import toyCardImage from "../assets/categoryToys.jpg";

import wildTshirt from "../assets/wildTshirt.jpg";
import teddyBearHat from "../assets/teddyBearHat.jpg";
import kittyBabySneakers from "../assets/kittyBabySneakers.jpg";
import wheelOfFortune from "../assets/wheelOfFortune.jpg";
import numbersPuzzle from "../assets/numbersPuzzle.jpg";
import lightDenimDress from "../assets/lightDenimDress.jpg";
import cottonBlouse from "../assets/cottonBlouse.jpg";
import stuffedElephant from "../assets/stuffedElephant.jpg";

export const heroButtonsData= [
    {
        text:"Baby Girl 0-3",
        color:"#f6838a"
    },
    {
        text:"Baby Boy 0-3",
        color:"#8bcedf"
    },
    {
        text:"Toddler Girl 4-12",
        color:"#cadf68"
    },
    {
        text:"Toddler Boy 4-12",
        color:"#e9c35e"
    }
]

// Here is the data for brand card in Branding Section
export const brandCardsData = [
    {
        icon: "👕",
        title: "Cute Models",
        desc: "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments."
    },
    {
        icon: "🪀",
        title: "Awesome Products",
        desc: "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments."
    },
    {
        icon: "👦",
        title: "Best Quality",
        desc: "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments."
    }
]
// Here is the data for product card in Branding Section

export const productCardData = [
    {
        img:blueShark,
        title:"Stuffed Blue Shark",
        price:29.99
    },
    {
        img:jumpSuit,
        title:"Denim Jumpsuit",
        price:17.55
    },
    {
        img:knitHat,
        title:"Super Star Knit Hat",
        price:6.49
    },
    {
        img:denimShorts,
        title:"Denim Shorts",
        price:39.99
    },
    {
        img:nightLamp,
        title:"Giraffe Night Lamp",
        price:39.90
    }
]

// Here is the data for category card of Popular Categories Section

export const popularCategoriesData = [
    {
        img:girlCardImage,
        title:"Girls",
        quantity:"CLOTHING (6)"
    },
    {
        img:boyCardImage,
        title:"Boys",
        quantity:"CLOTHING (8)"
    },
    {
        img:shoeCardImage,
        title:"Shoes",
        quantity:"& ACCESSORIES (5)"
    },
    {
        img:toyCardImage,
        title:"Toys",
        quantity:"& GAMES (11)"
    }
]

// Here is the data of product card of New Arrival Section

export const newArrivalCard = [
    {   
        id:1,
        img:wildTshirt,
        title:"Surfin' Wild T-shirt",
        price:24.99,
    },
    {
        id:2,
        img:teddyBearHat,
        title:"Teddy Bear Hat",
        price:19.99,
    },
    {
        id:3,
        img:kittyBabySneakers,
        title:"Kitty Baby Sneakers",
        price:39.99,
    },
    {
        id:4,
        img:wheelOfFortune,
        title:"Wheel Of Fortune Game",
        price:39.99,
    },
    {
        id:5,
        img:numbersPuzzle,
        title:"Wooden Numbers Puzzle",
        price: 39.99,
    },
    {
        id:6,
        img:lightDenimDress,
        title:"Light Denim Dress",
        price:27.00,
    },
    {
        id:7,
        img:cottonBlouse,
        title:"Stamped Cotton Blouse",
        price:39.99,
    },
    {
        id:8,
        img:stuffedElephant,
        title:"Stuffed Elephant",
        price:19.99,
    }
]

// Here is the data of main content  of Footer Section

export const footerData = [
    {
        heading: "Information",
        content:["About Us", "Contacts", "FAQ", "BabyStreet Shop", "Blog"]
    },
    {
        heading:"Extras",
        content:["My Account", "Wishlist", "Order Tracking", "Terms and Conditions", "Privacy Policy"]
    },
    {
        heading:"Have a Question?",
        content:["Mon. - Fri.: 09:00 - 18:30", "New Airport Road Lahore","03234455150","0423234455", "shop@kinderdorf@hotmail.de" ]
    } 
]

// Here is the data of Banner of Shop

export const shopBannerData = [
    {
        link:"/",
        home:"Home",
        page:"BABYSTREET SHOP",
        heading:"BabyStreet Shop"
    }
]

// Here is the data of Sidebar however never used yet.

export const sidebarCategoriesData = [
    {
        parent: "Boys Clothing",
        count:7,
        child:["Jeans" , "Rompers & Jumpsuits" , "Sweaters"  , "Tops"]
    }
]