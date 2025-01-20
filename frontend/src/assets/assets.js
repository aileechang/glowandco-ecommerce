// Import products for products array
import beauty0101 from './beauty0101.png';
import beauty0201 from './beauty0201.png';
import beauty0301 from './beauty0301.png';
import beauty0401 from './beauty0401.png';
import beauty0402 from './beauty0402.png';
import beauty0501 from './beauty0501.png';
import beauty0601 from './beauty0601.png';
import beauty0602 from './beauty0602.png';
import beauty0701 from './beauty0701.png';
import beauty0801 from './beauty0801.png';
import beauty0802 from './beauty0802.png';
import beauty0901 from './beauty0901.png';
import kids_apparel0101 from './kids_apparel0101.png';
import kids_shoes0101 from './kids_shoes0101.png';
import kids_shoes0102 from './kids_shoes0102.png';
import kids_shoes0103 from './kids_shoes0103.png';
import kids_shoes0201 from './kids_shoes0201.png';
import kids_shoes0202 from './kids_shoes0202.png';
import kids_shoes0203 from './kids_shoes0203.png';
import kids_shoes0301 from './kids_shoes0301.png';
import kids_shoes0302 from './kids_shoes0302.png';
import kids_shoes0303 from './kids_shoes0303.png';
import kids_shoes0401 from './kids_shoes0401.png';
import kids_shoes0402 from './kids_shoes0402.png';
import kids_shoes0403 from './kids_shoes0403.png';
import mens_accessories0101 from './mens_accessories0101.png';
import mens_accessories0102 from './mens_accessories0102.png';
import mens_accessories0103 from './mens_accessories0103.png';
import mens_apparel0101 from './mens_apparel0101.png';
import mens_apparel0102 from './mens_apparel0102.png';
import mens_apparel0103 from './mens_apparel0103.png';
import mens_shoes0101 from './mens_shoes0101.png';
import mens_shoes0102 from './mens_shoes0102.png';
import mens_shoes0103 from './mens_shoes0103.png';
import womens_accessories0101 from './womens_accessories0101.png';
import womens_accessories0102 from './womens_accessories0102.png';
import womens_accessories0103 from './womens_accessories0103.png';
import womens_accessories0201 from './womens_accessories0201.png';
import womens_accessories0202 from './womens_accessories0202.png';
import womens_apparel0101 from './womens_apparel0101.jpg';
import womens_apparel0201 from './womens_apparel0201.jpg';
import womens_shoes0101 from './womens_shoes0101.png';
import womens_shoes0102 from './womens_shoes0102.png';
import womens_shoes0103 from './womens_shoes0103.png';

// Image Imports
import logo from './logo.png';
import stripe from './stripe.png';
import razorpay from './razorpay.png';
import visa from './visa.png';
import mastercard from './mastercard.png';
import hero from './hero.jpg';
import aboutus from './aboutus.jpg';
import contactus from './contactus.jpg';
import modelpose from './modelpose.jpg';
import accessories from './accessories.png';
import beauty from './beauty.png';

// Export assets
export const assets = {
    logo,
    stripe,
    razorpay,
    visa,
    mastercard,
    hero,
    aboutus,
    contactus,
    modelpose,
    accessories,
    beauty
};


// Create mock product data
export const products = [
    {
        id: '20',
        name: 'Hydrating Skin Cream Tube - White',
        description: 'A white tube of cream with 3 essential ceramides and hyaluronic acid for intense hydration and skin barrier restoration.',
        price: 18,
        image: [beauty0101],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345448,
        bestseller: true,
    },
    {
        id: '21',
        name: 'Hydrating Skin Cream Tube - Pink',
        description: 'A pink tube of cream with 3 essential ceramides and hyaluronic acid to keep your skin hydrated and smooth.',
        price: 18,
        image: [beauty0201],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345447,
        bestseller: false,
    },
    {
        id: '22',
        name: 'pH-Balancing Gel Tube - Green',
        description: 'A green cosmetic gel tube formulated for pH balancing, leaving your skin feeling refreshed and revitalized.',
        price: 15,
        image: [beauty0301],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345446,
        bestseller: false,
    },
    {
        id: '23',
        name: 'Cosmetic Cream Tube - Pink',
        description: 'A pink cosmetic cream tube designed for everyday use, providing a smooth and radiant look.',
        price: 15,
        image: [beauty0401, beauty0402],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345445,
        bestseller: false,
    },
    {
        id: '24',
        name: 'Deep Cleansing Cream Tube - Cream',
        description: 'A cream-colored tube of cleansing cream that deeply purifies and refreshes the skin.',
        price: 12,
        image: [beauty0501],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345444,
        bestseller: true,
    },
    {
        id: '25',
        name: 'Moisturizing Cream Tube with Pump',
        description: 'A white cream tube with a pump for skin moisturizing and softening, perfect for daily hydration.',
        price: 14,
        image: [beauty0601, beauty0602],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345443,
        bestseller: false,
    },
    {
        id: '26',
        name: 'Intense Repair Hair Mask Jar',
        description: 'A jar of nourishing hair mask for intense repair and hydration, leaving hair smooth and manageable.',
        price: 16,
        image: [beauty0701],
        category: 'Beauty',
        subCategory: 'Hair',
        sizes: [],
        date: 1716634345442,
        bestseller: false,
    },
    {
        id: '27',
        name: 'Moisturizing Cream Pump Bottle - Peach Gradient',
        description: 'A peach-to-pink gradient pump bottle filled with a moisturizing cream for radiant and healthy skin.',
        price: 20,
        image: [beauty0801, beauty0802],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634345441,
        bestseller: true,
    },
    {
        id: '28',
        name: 'Cleansing Mist Spray Bottle - Pink Gradient',
        description: 'A pink-to-white gradient spray bottle filled with a cleansing mist that refreshes and soothes the skin.',
        price: 12,
        image: [beauty0901],
        category: 'Beauty',
        subCategory: 'Skin',
        sizes: [],
        date: 1716634346448,
        bestseller: false,
    },
    {
        id: '29',
        name: 'Kids Longsleeve Sweater - Pink',
        description: 'A cozy pink longsleeve sweater perfect for kids, combining comfort and style.',
        price: 18,
        image: [kids_apparel0101],
        category: 'Kids',
        subCategory: 'Apparel',
        sizes: ['XS', 'S', 'M'],
        date: 1716634345448,
        bestseller: true,
    },
    {
        id: '30',
        name: 'Kids Sandals - White with Pink Flower Pattern',
        description: 'Comfortable white sandals with a delightful pink flower pattern, perfect for kids’ everyday adventures.',
        price: 25,
        image: [kids_shoes0101, kids_shoes0102, kids_shoes0103],
        category: 'Kids',
        subCategory: 'Shoes',
        sizes: ['8', '9', '10'],
        date: 1716634344448,
        bestseller: false,
    },
    {
        id: '31',
        name: 'Kids Velcro Sandals - Pink',
        description: 'Easy-to-wear pink sandals with velcro straps, designed for comfort and durability.',
        price: 23,
        image: [kids_shoes0201, kids_shoes0202, kids_shoes0203],
        category: 'Kids',
        subCategory: 'Shoes',
        sizes: ['8', '9', '10'],
        date: 1716634343448,
        bestseller: false,
    },
    {
        id: '32',
        name: 'Kids Rainboots - Pink Flower Pattern',
        description: 'Waterproof rainboots with a charming pink flower pattern, keeping kids’ feet dry and stylish.',
        price: 28,
        image: [kids_shoes0301, kids_shoes0302, kids_shoes0303],
        category: 'Kids',
        subCategory: 'Shoes',
        sizes: ['8', '9', '10'],
        date: 1716634342448,
        bestseller: true,
    },
    {
        id: '33',
        name: 'Kids Velcro Sneakers - White',
        description: 'Lightweight white velcro sneakers perfect for kids, providing all-day comfort and support.',
        price: 30,
        image: [kids_shoes0401, kids_shoes0402, kids_shoes0403],
        category: 'Kids',
        subCategory: 'Shoes',
        sizes: ['8', '9', '10'],
        date: 1716634341448,
        bestseller: false,
    },
    {
        id: '34',
        name: 'Mens Sunglasses',
        description: 'Stylish sunglasses for men, offering UV protection and a sleek, modern design.',
        price: 45,
        image: [mens_accessories0101, mens_accessories0102, mens_accessories0103],
        category: 'Mens',
        subCategory: 'Accessories',
        sizes: [],
        date: 1716638345448,
        bestseller: true,
    },
    {
        id: '35',
        name: 'Mens Long Sleeve Sweater - Brown',
        description: 'A warm and comfortable brown long sleeve sweater, perfect for casual or formal occasions.',
        price: 52,
        image: [mens_apparel0101, mens_apparel0102, mens_apparel0103],
        category: 'Mens',
        subCategory: 'Apparel',
        sizes: ['M', 'L', 'XL'],
        date: 1716637345448,
        bestseller: false,
    },
    {
        id: '36',
        name: 'Mens Flip Flops - Brown',
        description: 'Classic brown flip flops for men, designed for comfort and durability.',
        price: 25,
        image: [mens_shoes0101, mens_shoes0102, mens_shoes0103],
        category: 'Mens',
        subCategory: 'Shoes',
        sizes: ['M', 'L', 'XL'],
        date: 1716636345448,
        bestseller: false,
    },
    {
        id: '37',
        name: 'Womens Sunglasses with Pouch',
        description: 'Elegant sunglasses for women, paired with a matching pouch for convenience and style.',
        price: 40,
        image: [womens_accessories0101, womens_accessories0102, womens_accessories0103],
        category: 'Womens',
        subCategory: 'Accessories',
        sizes: [],
        date: 1716635345448,
        bestseller: true,
    },
    {
        id: '38',
        name: 'Womens Leather Purse - Brown',
        description: 'A chic leather purse in brown, offering both style and functionality for women.',
        price: 75,
        image: [womens_accessories0201, womens_accessories0202],
        category: 'Womens',
        subCategory: 'Accessories',
        sizes: [],
        date: 1716633345448,
        bestseller: false,
    },
    {
        id: '39',
        name: 'Womens White Jean Pants',
        description: 'Trendy white jean pants for women, perfect for any occasion.',
        price: 45,
        image: [womens_apparel0101],
        category: 'Womens',
        subCategory: 'Apparel',
        sizes: ['S', 'M', 'L'],
        date: 1716632345448,
        bestseller: false,
    },
    {
        id: '40',
        name: 'Womens Pink Jean Shorts',
        description: 'Trendy and comfortable pink jean shorts, perfect for casual outings or summer days.',
        price: 38,
        image: [womens_apparel0201],
        category: 'Womens',
        subCategory: 'Apparel',
        sizes: ['Small', 'Medium', 'Large'],
        date: 1716631345448,
        bestseller: true,
    },
    {
        id: '41',
        name: 'Womens Tan Sandals',
        description: 'Elegant tan sandals designed for both comfort and style, great for casual or semi-formal wear.',
        price: 30,
        image: [womens_shoes0101, womens_shoes0102, womens_shoes0103],
        category: 'Womens',
        subCategory: 'Shoes',
        sizes: ['6', '7', '8'],
        date: 1716534345448,
        bestseller: false,
    }
];
