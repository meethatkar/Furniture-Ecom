import { createContext, useContext, useEffect, useId, useState } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
}

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-14-500x591.jpg",
            product_name: "Afterroom Coat Hanger",
            product_price: "$126.06",
            category: ["Furnitures"],
            clr_arr: ["#E8E7CF", "#767676", "#d9eceb"],
            id: useId(),
            product_description: "A Scandinavian-style coat hanger designed for minimal space and modern homes, crafted from premium metals and finished with a smooth matte texture. Its sleek lines and understated elegance make it perfect for entryways or bedrooms, providing both functional hanging and a touch of modern artistry. Durable construction ensures longevity, even in high-traffic areas, while its design complements a wide range of interior styles.",
            size: ["M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.5 },
            discount: { isDiscount: true, discountValue: "10%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x591.jpg",
            product_name: "Bobber Minilistic Small Clock",
            product_price: "$120.05",
            category: ["Decor"],
            clr_arr: ["#767676", "#E8D1AB", "#eae9d2"],
            id: useId(),
            product_description: "This compact clock is a perfect fit for bedside tables, designed with a silent movement mechanism to prevent disturbing sleep. Its minimal yet chic design features rounded edges, easy-to-read numbers, and a brushed finish, blending seamlessly with contemporary decor. Built to last with high-grade components, this elegant clock makes a stylish and practical addition to any small space.",
            size: ["S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-28-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x591.jpg",
            product_name: "Afteroom Coat Hanger",
            product_price: "$183.76",
            category: ["Chairs"],
            clr_arr: ["#E8E7CF", "#767676", "#ededed", "#d9eceb"],
            id: useId(),
            product_description: "Sturdy and stylish, this coat hanger brings a touch of elegance and practical utility to any entryway or hall. It features reinforced joints and a corrosion-resistant finish for reliable everyday use. The hanger stands out with its simple silhouette and modernized classic shape, making it suitable for both traditional and minimalist spaces.",
            size: ["L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 3.5 },
            discount: { isDiscount: true, discountValue: "5%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-12-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-19-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x591.jpg",
            product_name: "Afteroom Dining Chair",
            product_price: "$102.84",
            category: ["Chairs"],
            clr_arr: [
                "#eae9d2", "#757575", "#ededed", "#d9eceb"
            ],
            id: useId(),
            product_description: "An elegant dining chair crafted for comfort, featuring an ergonomic backrest and soft-touch fabric upholstery. The minimalist frame is lightweight yet robust, making it ideal for everyday use. Its sophisticated color palette and refined sight lines complement a range of table styles, offering a blend of aesthetic appeal and user comfort.",
            size: ["XS", "S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4 },
            discount: { isDiscount: true, discountValue: "8%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x591.jpg",
            product_name: "Bobber Table Lamp",
            product_price: "$165.58",
            category: ["Lighting"],
            clr_arr: [
                "#7a7a7a", "#ededed", "#eddcbb", "#d8d1e7", "#d3dbe8"
            ],
            id: useId(),
            product_description: "A contemporary lamp designed to cast a warm, inviting glow, ideal for modern living rooms or bedrooms. The lamp is built from eco-friendly materials and finished with a timeless shade, making it a versatile accent for any room. Its energy-efficient bulb and tactile switch ensure easy operation and minimal power consumption.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.8 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-14-500x591.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-22-500x591.jpg",
            product_name: "Cast Sconce Wall Lamp",
            product_price: "$123.43",
            category: ["Lighting", "Decor"],
            clr_arr: [
                "#7a7a7a", "#ededed", "#eddcbb", "#d9eceb"
            ],
            id: useId(),
            product_description: "This wall lamp features a unique cast detail and offers adjustable brightness, making it ideal for creating atmospheric accent lighting in living rooms or hallways. The sleek, low-profile mount and artistic touches elevate any wall surface, while high-quality components promise years of reliable use. Easy to install and suitable for a range of wall materials.",
            size: ["S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.4 },
            discount: { isDiscount: true, discountValue: "12%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x591.jpg",
            product_name: "Circular Wooded Jar",
            product_price: "$129.48",
            category: ["Decor"],
            clr_arr: ["#FCF6F2", "#E8D1AB", "#757575"],
            id: useId(),
            product_description: "Aesthetic wooden jar carved from sustainable timber, offering stylish storage and tabletop decoration. Its circular design and smooth edges make it ideal for holding jewelry, spices, or little trinkets. The natural wood finish adds a warm touch and makes every jar unique due to variations in grain and coloration.",
            size: ["S", "M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-28-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x591.jpg",
            product_name: "Cast Sconce Chair",
            product_price: "$103.89",
            category: ["Chairs", "Furnitures"],
            clr_arr: ["#7a7a7a", "#DDEEEB", "#767676"],
            id: useId(),
            product_description: "A unique chair design combining sturdy build, contemporary form, and exceptional comfort. The seat cushion is ergonomically contoured and provides full support, while distinctive sconce-inspired legs give stability and a modern twist. Perfect for dining spaces or work environments seeking a bold visual statement.",
            size: ["XS", "S"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 3.8 },
            discount: { isDiscount: true, discountValue: "14%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-14-500x591.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-26-500x591.jpg",
            product_name: "Circula Coffee Table",
            product_price: "$155.66",
            category: ["Decor", "Furnitures"],
            clr_arr: ["#eae9d2", "#757575", "#d9eceb"],
            id: useId(),
            product_description: "A coffee table with a circular design and smooth finish, built to bring functional elegance to lounge areas, offices, or living rooms. The table top is spill-resistant and easy to clean, while its sturdy legs ensure stable support for books, drinks, or décor. The timeless aesthetic suits both casual and formal settings.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.2 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x591.jpg",
            product_name: "Super Comfortable Bean Bag",
            product_price: "$179.99",
            category: ["Uncategorized"],
            clr_arr: ["#EEEEEE", "#DDEEEB", "#7a7a7a"],
            id: useId(),
            product_description: "Ergonomically designed bean bag for ultimate comfort and stylish seating, constructed with premium microfibers and filled with high-density foam beads that contour to your body. The outer cover features bold colors and reinforced stitching for durability, making it ideal for relaxation in living rooms, bedrooms, or dorm spaces.",
            size: ["L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.9 },
            discount: { isDiscount: true, discountValue: "20%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-28-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-23-500x591.jpg",
            product_name: "Adjustable Mini Table",
            product_price: "$124.08",
            category: ["Decor", "Furnitures"],
            clr_arr: ["#767676", "#E8D1AB", "#DDEEEB"],
            id: useId(),
            product_description: "A functional mini table with adjustable height designed for versatility in homes, offices, or studios. Its compact surface easily accommodates laptops, snacks, or decorative items, while the height adjustment mechanism is smooth and sturdy. Available in multiple finishes to suit any interior space.",
            size: ["XS", "S", "M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.3 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-14-500x591.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-22-500x591.jpg",
            product_name: "JWDA Table Lamp",
            product_price: "$123.34",
            category: ["Lighting"],
            clr_arr: ["#7a7a7a", "#D4E8CF", "EEEEEE"],
            id: useId(),
            product_description: "A modern table lamp with dimmable functionality, crafted for ambiance and style on work desks or nightstands. The contemporary shape is paired with materials that diffuse light softly, reducing glare while providing ample illumination. Easy to operate and compatible with most LED bulbs for energy efficiency.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.6 },
            discount: { isDiscount: true, discountValue: "9%" },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x500.jpg',
            ],
        },
        {
            product_img: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-21-500x591.jpg",
            product_name: "Norm Stone Lamp",
            product_price: "$102.32",
            category: ["Lighting"],
            clr_arr: ["#FCF6F2", "#D8CFE8", "767676"],
            id: useId(),
            product_description: "A stone-inspired lamp, meticulously crafted to bring a natural, calming ambiance into your space. Its weighty base ensures stability, while its frosted glass shade glows warmly and softly. This lamp works beautifully on end tables or nightstands where its organic look and feel lend tranquility and style.",
            size: ["XS", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-28-500x500.jpg',
                'https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x500.jpg',
            ]
        }
    ]);



    const [categories] = useState([
        { name: "Chairs" },
        { name: "Decor" },
        { name: "Furnitures" },
        { name: "Lighting" },
        { name: "Sofas" },
        { name: "Stools" },
        { name: "Uncategorized" }
    ]);

    const colors = [
        { name: "Light Olive", value: "#E8E7CF" },
        { name: "Dark Gray", value: "#767676" },
        { name: "Light Gray", value: "#EEEEEE" },
        { name: "Mint", value: "#DDEEEB" },
        { name: "Pale Green", value: "#D4E8CF" },
        { name: "Peach", value: "#FCF6F2" },
        { name: "Beige", value: "#E8D1AB" },
        { name: "Lavender", value: "#D8CFE8" },
        { name: "Blue Gray", value: "#CFD6E8" },
        { name: "Alice Blue", value: "#F0F8FF" }
    ];

    //NEW
    const [selectedCategory, setselectedCategory] = useState("ALL");

    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        if (!Array.isArray(selectedCategory)) {
            if (selectedCategory === 'ALL') {
                setfilteredProducts(products);
            }
            else {
                setfilteredProducts(
                    products.filter((item) => (
                        item.category.includes(selectedCategory)
                    ))
                )
            }
        }
        else {
            setfilteredProducts(
                products.filter((item) => {
                    const LC = item.category.map((i) => i.toLowerCase());
                    return (LC.includes(selectedCategory[0].toLowerCase()) || item.product_name.toLowerCase().includes(selectedCategory[0].toLowerCase()))
                })
            );
        }
    }, [selectedCategory, products])


    const productValue = {
        products,
        categories,
        colors,
        selectedCategory,
        filteredProducts,
        setselectedCategory
    }

    return (
        <ProductContext.Provider value={productValue}>
            {children}
        </ProductContext.Provider>
    )
}