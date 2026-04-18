import { createContext, useContext, useEffect, useId, useState } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
}

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            product_img: "/Products/Lamp_1.webp",
            product_name: "Modern Table Lamp",
            product_price: 126.06,
            category: ["Lighting"],
            clr_arr: ["#E8E7CF", "#767676", "#d9eceb"],
            id: useId(),
            product_description: "A visually pleasing modern table lamp designed for minimal space and modern homes. Its sleek lines and understated elegance make it perfect for desks or bedrooms, providing both functional lighting and a touch of modern artistry.",
            size: ["M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.5 },
            discount: { isDiscount: true, discountValue: "10%" },
            more_imgs: [
                '/Products/Lamp_1.webp',
                '/Products/Lamp_1.webp',
                '/Products/Lamp_1.webp',
            ],
        },
        {
            product_img: "/Products/Clock_1.webp",
            product_name: "Minimalist Wall Clock",
            product_price: 120.05,
            category: ["Decor"],
            clr_arr: ["#767676", "#E8D1AB", "#eae9d2"],
            id: useId(),
            product_description: "This elegant wall clock is a perfect fit for any room, designed with a silent movement mechanism. Its minimal yet chic design features rounded edges, blending seamlessly with contemporary decor. Built to last with high-grade components.",
            size: ["S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Clock_1.webp',
                '/Products/Clock_1.webp',
                '/Products/Clock_1.webp',
            ],
        },
        {
            product_img: "/Products/Chair_1.webp",
            product_name: "Elegant Wooden Chair",
            product_price: 183.76,
            category: ["Chairs"],
            clr_arr: ["#E8E7CF", "#767676", "#ededed", "#d9eceb"],
            id: useId(),
            product_description: "Sturdy and stylish, this wooden chair brings a touch of elegance and practical utility to your living room. It features reinforced joints and a rich finish for reliable everyday use. The chair stands out with its simple silhouette making it suitable for both traditional and minimalist spaces.",
            size: ["L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 3.5 },
            discount: { isDiscount: true, discountValue: "5%" },
            more_imgs: [
                '/Products/Chair_1.webp',
                '/Products/Chair_1.webp',
                '/Products/Chair_1.webp',
            ],
        },
        {
            product_img: "/Products/Chair_2.webp",
            product_name: "Classic Dining Chair",
            product_price: 102.84,
            category: ["Chairs"],
            clr_arr: [
                "#eae9d2", "#757575", "#ededed", "#d9eceb"
            ],
            id: useId(),
            product_description: "An elegant dining chair crafted for comfort, featuring an ergonomic backrest and soft-touch upholstery. The minimalist frame is lightweight yet robust, making it ideal for everyday use at the dining table.",
            size: ["XS", "S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4 },
            discount: { isDiscount: true, discountValue: "8%" },
            more_imgs: [
                '/Products/Chair_2.webp',
                '/Products/Chair_2.webp',
                '/Products/Chair_2.webp',
            ],
        },
        {
            product_img: "/Products/Lamp_2.webp",
            product_name: "Ceramic Table Lamp",
            product_price: 165.58,
            category: ["Lighting"],
            clr_arr: [
                "#7a7a7a", "#ededed", "#eddcbb", "#d8d1e7", "#d3dbe8"
            ],
            id: useId(),
            product_description: "A contemporary ceramic lamp designed to cast a warm, inviting glow, ideal for living rooms or bedrooms. The lamp is a versatile accent for any room. Its energy-efficient bulb and tactile switch ensure easy operation and minimal power consumption.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.8 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Lamp_2.webp',
                '/Products/Lamp_2.webp',
                '/Products/Lamp_2.webp',
            ],
        },
        {
            product_img: "/Products/Lamp_3.webp",
            product_name: "Adjustable Wall Lamp",
            product_price: 123.43,
            category: ["Lighting", "Decor"],
            clr_arr: [
                "#7a7a7a", "#ededed", "#eddcbb", "#d9eceb"
            ],
            id: useId(),
            product_description: "This wall lamp features adjustable brightness, making it ideal for creating atmospheric accent lighting in living rooms or hallways. The sleek, low-profile mount and artistic touches elevate any wall surface.",
            size: ["S", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.4 },
            discount: { isDiscount: true, discountValue: "12%" },
            more_imgs: [
                '/Products/Lamp_3.webp',
                '/Products/Lamp_3.webp',
                '/Products/Lamp_3.webp',
            ],
        },
        {
            product_img: "/Products/Stool_1.webp",
            product_name: "Wooden Stool",
            product_price: 129.48,
            category: ["Stools", "Furnitures"],
            clr_arr: ["#FCF6F2", "#E8D1AB", "#757575"],
            id: useId(),
            product_description: "Aesthetic wooden stool carved from sustainable timber, offering both practical seating and elegant decoration. Its smooth surface makes it ideal for everyday seating or using it as a temporary side table.",
            size: ["S", "M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Stool_1.webp',
                '/Products/Stool_1.webp',
                '/Products/Stool_1.webp',
            ],
        },
        {
            product_img: "/Products/Chair_3.webp",
            product_name: "Sconce Chair",
            product_price: 103.89,
            category: ["Chairs", "Furnitures"],
            clr_arr: ["#7a7a7a", "#DDEEEB", "#767676"],
            id: useId(),
            product_description: "A unique chair design combining sturdy build, contemporary form, and exceptional comfort. The seat cushion is ergonomically contoured and provides full support. Perfect for dining spaces or work environments.",
            size: ["XS", "S"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 3.8 },
            discount: { isDiscount: true, discountValue: "14%" },
            more_imgs: [
                '/Products/Chair_3.webp',
                '/Products/Chair_3.webp',
                '/Products/Chair_3.webp',
            ],
        },
        {
            product_img: "/Products/Drawer_1.webp",
            product_name: "Wooden Drawer",
            product_price: 155.66,
            category: ["Furnitures"],
            clr_arr: ["#eae9d2", "#757575", "#d9eceb"],
            id: useId(),
            product_description: "A premium wooden drawer designed to provide functional elegance to your lounge areas or bedrooms. It features spacious compartments to keep your essentials organized while adding a touch of rustic beauty to your interior.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.2 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Drawer_1.webp',
                '/Products/Drawer_1.webp',
                '/Products/Drawer_1.webp',
            ],
        },
        {
            product_img: "/Products/RAttel_1.webp",
            product_name: "Rattan Basket",
            product_price: 179.99,
            category: ["Decor"],
            clr_arr: ["#EEEEEE", "#DDEEEB", "#7a7a7a"],
            id: useId(),
            product_description: "Beautifully woven rattan basket for ultimate style and practical storage. It serves excellently for organizing blankets, plants, or simply placed as an organic conversational decor piece in your living room.",
            size: ["L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.9 },
            discount: { isDiscount: true, discountValue: "20%" },
            more_imgs: [
                '/Products/RAttel_1.webp',
                '/Products/RAttel_1.webp',
                '/Products/RAttel_1.webp',
            ],
        },
        {
            product_img: "/Products/Clock_2.webp",
            product_name: "Modern Wall Clock",
            product_price: 124.08,
            category: ["Decor"],
            clr_arr: ["#767676", "#E8D1AB", "#DDEEEB"],
            id: useId(),
            product_description: "A stylish modern wall clock blending beautiful aesthetics with reliable precision. Its prominent face ensures readability while its minimalist frame provides a versatile touch to perfectly complement any indoor space.",
            size: ["XS", "S", "M", "L"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.3 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Clock_2.webp',
                '/Products/Clock_2.webp',
                '/Products/Clock_2.webp',
            ],
        },
        {
            product_img: "/Products/Lamp_4.webp",
            product_name: "Elegant Pendant Lamp",
            product_price: 123.34,
            category: ["Lighting"],
            clr_arr: ["#7a7a7a", "#D4E8CF", "#EEEEEE"],
            id: useId(),
            product_description: "A delicate pendant lamp that brings refined ambiance above dining areas or kitchen islands. The shape gently diffuses light, adding a warm, sophisticated look without excessive glare. Highly energy efficient.",
            size: ["M", "L", "XL"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 4.6 },
            discount: { isDiscount: true, discountValue: "9%" },
            more_imgs: [
                '/Products/Lamp_4.webp',
                '/Products/Lamp_4.webp',
                '/Products/Lamp_4.webp',
            ],
        },
        {
            product_img: "/Products/Chair_1.webp",
            product_name: "Comfort Lounge Chair",
            product_price: 102.32,
            category: ["Chairs", "Furnitures"],
            clr_arr: ["#FCF6F2", "#D8CFE8", "#767676"],
            id: useId(),
            product_description: "A perfectly angled lounge chair made from robust wood with cozy cushioned layers, an invitiation for deep relaxation. Ideal for reading nooks or taking the center spot in your favorite relaxation area.",
            size: ["XS", "M"],
            customer_rating: { kiran: 5, ramesh: 2, dinesh: 2, kartik: 3.5, bikaner: 4.5, rahul: 5 },
            discount: { isDiscount: false, discountValue: null },
            more_imgs: [
                '/Products/Chair_1.webp',
                '/Products/Chair_1.webp',
                '/Products/Chair_1.webp',
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
            // Not an array
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
            if (selectedCategory[1] === "search") {
                setfilteredProducts(
                    products.filter((item) => {
                        const LC = item.category.map((i) => i.toLowerCase());
                        return (LC.includes(selectedCategory[0].toLowerCase()) || item.product_name.toLowerCase().includes(selectedCategory[0].toLowerCase()))
                    })
                );
            }
            else if(selectedCategory[1] === "sorting"){
                const sortingVal = selectedCategory[0];
                let sortedProducts =[];
                if(sortingVal === "default"){
                    setfilteredProducts(products);
                }
                else if(sortingVal === "price-asc"){
                    sortedProducts = [...filteredProducts].sort((a,b)=>{
                        return a.product_price - b.product_price;
                    })
                }
                else if(sortingVal === "price-desc"){
                    sortedProducts = [...filteredProducts].sort((a,b)=>{
                        return b.product_price - a.product_price;
                    })
                }
                else if(sortingVal === "name-asc"){
                    sortedProducts = [...filteredProducts].sort((a,b)=>{
                        return a.product_name.localeCompare(b.product_name);
                    })
                }
                else if(sortingVal === "name-desc"){
                    sortedProducts = [...filteredProducts].sort((a,b)=>{
                        return b.product_name.localeCompare(a.product_name);
                    })
                }
                setfilteredProducts(sortedProducts);
            }
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