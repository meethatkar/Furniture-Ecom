import { createContext, useContext, useEffect, useId, useState } from "react";

export const ProductContext = createContext();

export const useProduct = ()=>{
    return useContext(ProductContext);
}

export const ProductContextProvider = ({children})=>{
    const [products, setProducts] = useState([
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-14-500x591.jpg",
            product_name : "Afterroom Coat Hanger",
            product_price: "$126.06",
            category: ["Furnitures"],
            clr_arr: ["#E8E7CF", "#767676", "#d9eceb"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-30-500x591.jpg",
            product_name : "Bobber Minilistic Small Clock",
            product_price: "$120.05",
            category: ["Decor"],
            clr_arr: ["#767676", "#E8D1AB", "#eae9d2"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x591.jpg",
            product_name : "Afteroom Coat Hanger",
            product_price: "$183.76",
            category: ["Chairs"],
            clr_arr: ["#E8E7CF", "#767676", "#ededed", "#d9eceb"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-31-500x591.jpg",
            product_name : "Afteroom Dining Chair",
            product_price: "$102.84",
            category: ["Chairs"],
            clr_arr: [
                "#eae9d2", // light beige
                "#757575", // medium gray
                "#ededed", // very light gray
                "#d9eceb"  // pale aqua
            ],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-29-500x591.jpg",
            product_name : "Bobber Table Lamp",
            product_price: "$165.58",
            category: ["Lighting"],
            clr_arr: [
                "#7a7a7a", // dark gray
                "#ededed", // very light gray
                "#eddcbb", // light beige
                "#d8d1e7", // light lavender
                "#d3dbe8"  // light blue-gray
            ],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-22-500x591.jpg",
            product_name : "Cast Sconce Wall Lamp",
            product_price: "$123.43",
            category: ["Lighting","Decor"],
            clr_arr: [
                "#7a7a7a", // dark gray
                "#ededed", // very light gray
                "#eddcbb", // light beige
                "#d9eceb"  // pale aqua
            ],
            id: useId()
        },
        // {
        //     product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-26-500x591.jpg",
        //     product_name : "Circula Coffee Table",
        //     product_price: "$155.66  - $180.66 ",
        //     clr_arr: [
        //         "#eae9d2", // light beige
        //         "#757575", // medium gray
        //         "#d9eceb"  // pale aqua
        //     ],
        //     category: "Furnitures"
        // },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-24-500x591.jpg",
            product_name : "Circular Wooded Jar",
            product_price: "$129.48",
            category: ["Decor"],
            clr_arr: ["#FCF6F2", "#E8D1AB", "#757575"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-27-500x591.jpg",
            product_name : "Cast Sconce Chair",
            product_price: "$103.89",
            category: ["Chairs","Furnitures"],
            clr_arr: ["#7a7a7a", "#DDEEEB", "#767676"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-26-500x591.jpg",
            product_name : "Circula Coffee Table",
            product_price: "$155.66",
            category: ["Decor","Furnitures"],
            clr_arr: ["#eae9d2", "#757575", "#d9eceb"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-25-500x591.jpg",
            product_name : "Super Comfortable Bean Bag",
            product_price: "$179.99",
            category: ["Uncategorized"],
            clr_arr: ["#EEEEEE", "#DDEEEB", "#7a7a7a"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-23-500x591.jpg",
            product_name : "Adjustable Mini Table",
            product_price: "$124.08",
            category: ["Decor","Furnitures"],
            clr_arr: ["#767676", "#E8D1AB", "#DDEEEB"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-22-500x591.jpg",
            product_name : "JWDA Table Lamp",
            product_price: "$123.34",
            category: ["Lighting"],
            clr_arr: ["#7a7a7a", "#D4E8CF", "EEEEEE"],
            id: useId()
        },
        {
            product_img : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-21-500x591.jpg",
            product_name : "Norm Stone Lamp",
            product_price: "$102.32",
            category: ["Lighting"],
            clr_arr: ["#FCF6F2", "#D8CFE8", "767676"],
            id: useId()
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
      if(!Array.isArray(selectedCategory)){
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
      else{
        setfilteredProducts(
            products.filter((item)=>{
                const LC = item.category.map((i)=>i.toLowerCase());
                return (LC.includes(selectedCategory[0].toLowerCase()) || item.product_name.toLowerCase().includes(selectedCategory[0].toLowerCase()))
            })
        );
        console.log(filteredProducts);
        
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