import card11 from './image/card/card1/1.avif'
import card12 from './image/card/card1/2.avif'
import card13 from './image/card/card1/3.avif'
import card14 from './image/card/card1/4.avif'
import card21 from './image/card/card2/1.avif'
import card22 from './image/card/card2/2.avif'
import card23 from './image/card/card2/3.avif'
import card24 from './image/card/card2/4.avif'
import card31 from './image/card/card3/1.avif'
import card32 from './image/card/card3/2.avif'
import card33 from './image/card/card3/3.avif'
import card34 from './image/card/card3/4.avif'
import card41 from './image/card/card4/1.avif'
import card42 from './image/card/card4/2.avif'
import card43 from './image/card/card4/3.avif'
import card44 from './image/card/card4/4.avif'
import card51 from './image/card/card5/1.avif'
import card52 from './image/card/card5/2.avif'
import card53 from './image/card/card5/3.avif'
import card54 from './image/card/card5/4.avif'
import card61 from './image/card/card6/1.avif'
import card62 from './image/card/card6/2.avif'
import card63 from './image/card/card6/3.avif'
import card64 from './image/card/card6/4.avif'
import card71 from './image/card/card7/1.avif'
import card72 from './image/card/card7/2.avif'
import card73 from './image/card/card7/3.avif'
import card74 from './image/card/card7/4.avif'
import card81 from './image/card/card8/1.avif'
import card82 from './image/card/card8/2.avif'
import card83 from './image/card/card8/3.avif'
import card84 from './image/card/card8/4.avif'
import card91 from './image/card/card9/1.avif'
import card92 from './image/card/card9/2.avif'
import card93 from './image/card/card9/3.avif'
import card94 from './image/card/card9/4.avif'
import card101 from './image/card/card10/1.avif'
import card102 from './image/card/card10/2.avif'
import card103 from './image/card/card10/3.avif'
import card104 from './image/card/card10/4.avif'
import card111 from './image/card/card11/1.avif'
import card112 from './image/card/card11/2.avif'
import card113 from './image/card/card11/3.avif'
import card114 from './image/card/card11/4.avif'
import card121 from './image/card/card12/1.avif'
import card122 from './image/card/card12/2.avif'
import card123 from './image/card/card12/3.avif'
import card124 from './image/card/card12/4.avif'

const dummyProducts = [
    {
        id: 1,
        title: 'Running Shoes',
        newPrice: '100',
        prevPrice:'$150',
        images: card11,
        color: 'red',
        category: 'sneakers'
        , star: 4,
        description: "Lightweight and breathable running shoes designed for speed and comfort. Perfect for your morning jog or evening runs.",
        reviews:"(143 reviews)",
        company:"Nike"
    },
    {
        id: 2,
        title: 'Hiking Boots',
        newPrice: '200',
        prevPrice:'$400',
        images: card12,
        color: 'black',
        category: 'flats',
        star: 3,
        description: "Durable hiking boots with excellent traction and support. Ideal for rugged terrains and long hikes.",
        reviews:"(143 reviews)",
        company:"Adidas"
    },
    {
        id: 3,
        title: 'Casual sandals',
        newPrice: '300',
        prevPrice:'$900',
        images: card13,
        color: 'white',
        category: 'sandals',
        star: "****",
        description: "Stylish and versatile casual sneakers suitable for everyday wear. Comfortable for walking and relaxing.",
        reviews:"(143 reviews)",
        company:"Puma"
    },
    {
        id: 4,
        title: 'Basketball Shoes',
        newPrice: '100',
        prevPrice:'$450',
        images: card14,
        color: 'red',
        category: 'sneakers',
        star: 5,
        description: "High-performance basketball shoes offering ankle support and grip on the court. Ideal for players at any level.",
        reviews:"(143 reviews)",
        company:"Vans"
    },
    {
        id: 5,
        title: 'Trail Running Shoes',
        newPrice: '200',
        prevPrice:'$240',
        images: card21, 
        color: 'black',
        category: 'sandals',
        star: 3,
        description: "Designed for off-road running, these shoes provide stability and cushioning on rugged trails.",
        reviews:"(143 reviews)",
        company:"Nike"
    },
    {
        id: 6,
        title: 'Formal Loafers',
        newPrice: '300',
        prevPrice:'$2300',
        images: card22,
        color: 'white',
        category: 'flats',
        star: 1,
        description: "Elegant loafers suitable for formal occasions. Made from premium leather for a sophisticated look.",
        reviews:"(143 reviews)",
        company:"Adidas"

    },
    {
        id: 7,
        title: 'Flat sandals',
        newPrice: '100',
        prevPrice:'$2900',
        images: card23,
        color: 'red',
        category: 'sneakers',
        star: 2,
        description: "Comfortable and stylish flat sandals, perfect for summer outings and beach days.",
        reviews:"(143 reviews)",
        company:"Puma"

    },
    {
        id: 8,
        title: 'High Top sneakers',
        newPrice: '200',
        prevPrice:'$786',
        images: card24,
        color: 'black',
        category: 'flats',
        star: 3,
        description: "Trendy high-top sneakers offering ankle support and a fashionable look for streetwear.",
        reviews:"(143 reviews)",
        company:"Vans"

    },
    {
        id: 9,
        title: 'Ballet sneakers',
        newPrice: '300',
        prevPrice:'$1980',
        images: card31,
        color: 'white',
        category: 'snadals', 
        star: 4,
        description: "Chic ballet flats that are both comfortable and stylish, perfect for casual outings or office wear.",
        reviews:"(143 reviews)",
        company:"Nike"
    },
    {
        id: 10,
        title: 'Slip-On flats',
        newPrice: '100',
        prevPrice:'$3422',
        images: card32, 
        color: 'red',
        category: 'sneakers',
        star: 5,
        description: "Convenient slip-on sneakers that combine style with ease of wear, great for everyday activities.",
        reviews:"(143 reviews)",
        company:"Adidas"
    },
    {
        id: 11,
        title: 'Outdoor sandals',
        newPrice: '200',
        prevPrice:'$510',
        images: card33, 
        color: 'black',
        category: 'sandals',
        star: 1,
        description: "Versatile outdoor sandals designed for comfort and breathability during summer adventures.",
        reviews:"(143 reviews)",
        company:"Puma"

    },
    {
        id: 12,
        title: 'Fitness Shoes',
        newPrice: '300',
        prevPrice:'$231',
        images: card34,
        color: 'white',
        category: 'flats',
        star: 2,
        description: "High-performance fitness shoes designed for gym workouts and running, providing excellent support.",
        reviews:"(143 reviews)",
        company:"Vans"
    },

];
export default dummyProducts;