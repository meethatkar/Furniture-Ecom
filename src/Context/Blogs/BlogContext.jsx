import { createContext, useContext, useId, useState } from "react";

export const BlogContext = createContext();

// custom hook.
export const useBlog = () => {
    return useContext(BlogContext);
}

// context Provider, with {children} arg
export const BlogContextProvider = ({ children }) => {
    // BLOG
    const [blog, setBlog] = useState([
        {
            title: "Lighting tips for cozy evenings",
            previewDesc: "Create a warm, inviting atmosphere in your home with our expert lighting tips. Learn how to layer different light sources, such as floor lamps, table lamps, and candles, to set the perfect mood for relaxing evenings. Discover how adjusting brightness and color temperature can transform any room into a peaceful retreat where you can unwind after a long day.",
            desc: <p>Lighting is key to making your home feel cozy and comfortable after dark. Use a mix of floor lamps, table lamps, and candles to add depth and warmth.<br />Adjust brightness and color temperature to suit your activities. With thoughtful lighting choices, you can transform any room into a peaceful retreat for unwinding at night.</p>,
            date: "July 3 2021",
            category: "Interior",
            img_src: "https://www.sunmory.com/cdn/shop/articles/Interior-of-living-room-with-sofa-floor-lamp-and-glowing-lamps-in-evening.webp?v=1727075986&width=1400",
            id: useId()
        },
        {
            title: "Modern minimalist lamp design",
            previewDesc: "Explore our new minimalist lamp collection, designed to bring simple elegance and modern style to any home. Each lamp is thoughtfully crafted with clean lines and a focus on functionality, making them perfect for those who appreciate understated beauty. Illuminate your living spaces with soft, ambient lighting that enhances comfort and complements any decor, while enjoying the timeless appeal of minimalist design.",
            desc: <p>Our minimalist lamps are crafted to blend seamlessly with any decor, offering both style and practicality. Each lamp is made with attention to detail, ensuring a timeless look for your space.<br />Illuminate your home with soft, ambient lighting that enhances comfort and atmosphere. Discover how these lamps can transform your rooms and create a warm, inviting environment for every occasion.</p>,
            date: "December 5 2020",
            category: "Crafts",
            img_src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/3/floor-lamp_0_1200.jpg.webp",
            id: useId()
        },
        {
            title: "Eco-friendly bamboo chairs",
            previewDesc: "Upgrade your home with our sustainable bamboo chairs, combining eco-friendly materials and modern design. These chairs are crafted from 100% natural bamboo, offering both durability and a unique aesthetic. Enjoy comfort and style while making a positive impact on the environment, and create a welcoming, eco-conscious space that reflects your commitment to green living and responsible choices.",
            desc: <p>Our bamboo chairs are made from 100% natural bamboo, offering durability and a unique aesthetic. They are lightweight, sturdy, and perfect for any room in your home.<br />Experience the blend of sustainability and comfort without compromising on style. These chairs are ideal for those who value green living and want to create a welcoming, eco-conscious space.</p>,
            date: "January 10 2021",
            category: "Wood",
            img_src: "https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/blog-5-1000x510.jpg",
            id: useId()
        },
        {
            title: "Vintage rug collection launch",
            previewDesc: "Discover our exclusive vintage rug collection, featuring timeless designs and rich textures that add warmth and character to your home. Each rug is carefully selected for its quality and story, with intricate patterns and vibrant colors that bring a sense of history and charm to any room. Transform your living space with these unique, limited-edition pieces that celebrate tradition and elegance.",
            desc: <p>Each vintage rug in our collection is carefully selected for its quality and story. The intricate patterns and vibrant colors bring a sense of history and charm to any room.<br />Transform your living space with a touch of tradition and elegance. These rugs are perfect for creating a cozy atmosphere and making a statement in your decor.</p>,
            date: "February 2 2021",
            category: "Interior",
            img_src: "https://www.homesindiamagazine.com/uploaded_images/newstransfer/ze77Hexagone%20Classic%20Vert%20Rug%20(1).jpg",
            id: useId()
        },
        {
            title: "How to style open shelves",
            previewDesc: "Get expert tips on styling open shelves to maximize both storage and visual appeal in your home. Learn how to create a balanced, beautiful display by arranging books, plants, and decorative items in creative ways. Discover how mixing textures, colors, and heights can transform your shelves into a stunning focal point, making your space both practical and stylish.",
            desc: <p>Open shelves offer a versatile way to showcase your favorite items while keeping essentials within reach. Arrange books, plants, and decor for a curated look that reflects your style.<br />Discover creative ideas for mixing textures, colors, and heights. With the right approach, open shelving can become a stunning focal point and a practical solution for any space.</p>,
            date: "March 15 2021",
            category: "Handmade",
            img_src: "https://www.thespruce.com/thmb/cCdvwXUgnnIRHoV0nfOYf26rx1w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beautiful-living-rooms-with-built-in-shelving-4122539-hero-2a0ac4d1d64a4561a22c926d9ba0b0ed.jpg",
            id: useId()
        },
        {
            title: "Choosing the right sofa fabric",
            previewDesc: "Find the perfect fabric for your new sofa with our comprehensive guide. We help you balance comfort, durability, and style to suit your lifestyle and home decor needs. From luxurious velvet to practical linen, learn about the unique benefits of each material and discover tips for selecting a fabric that will keep your sofa looking and feeling great for years to come.",
            desc: <p>From luxurious velvet to practical linen, each sofa fabric offers unique benefits. Consider factors like maintenance, texture, and color to make the best choice for your space.<br />Our guide helps you navigate the options, ensuring your sofa remains comfortable and stylish for years. Make an informed decision and enjoy lasting satisfaction with your selection.</p>,
            date: "April 8 2021",
            category: "Design",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
            id: useId()
        },
        {
            title: "Small space, big impact: Decor ideas",
            previewDesc: "Transform your small space with creative decor ideas that maximize both style and functionality. Discover how to make every inch count with smart solutions, such as using mirrors, light colors, and multi-functional furniture. Our inspiring tips and clever storage hacks will help you create a stylish, comfortable home that feels open and inviting, no matter its size.",
            desc: <p>Even the smallest rooms can feel open and inviting with the right approach. Use mirrors, light colors, and multi-functional furniture to enhance your space.<br />Discover clever storage hacks and decorative accents that add personality without clutter. Our tips help you create a stylish, comfortable home no matter the size.</p>,
            date: "May 20 2021",
            category: "Design",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-5-740x415.jpg",
            id: useId()
        },
        {
            title: "The art of mixing patterns",
            previewDesc: "Master the art of mixing patterns in your home decor for a bold, cohesive look. Learn simple rules to combine colors, textures, and prints with confidence, starting with a consistent color palette and varying the scale of your prints. Our guide will help you experiment with different motifs and textures, making it easy to create a harmonious, eye-catching space that reflects your personality.",
            desc: <p>Mixing patterns can elevate your interiors, adding depth and interest to any room. Start with a consistent color palette and vary the scale of your prints for balance.<br />Experiment with different textures and motifs to express your personality. Our guide makes it easy to create a harmonious, eye-catching space that feels uniquely yours.</p>,
            date: "June 12 2021",
            category: "Crafts",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-3-740x415.jpg",
            id: useId()
        },
        {
            title: "Carefully handmade wooden tablesc",
            previewDesc: "Discover the artistry and dedication behind our carefully handmade wooden tables, each crafted with precision and passion by skilled artisans. These tables are not only functional pieces of furniture but also unique works of art that bring warmth and character to any space. Experience the beauty of natural wood grains, expert joinery, and timeless design that will elevate your home’s interior for years to come.",
            desc: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure sequi minima delectus amet blanditiis sit, quibusdam, reiciendis non eaque ab, excepturi cupiditate suscipit aut. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, excepturi. Cum, delectus corrupti, iste laboriosam hic nesciunt tenetur dicta esse quia sapiente illum voluptatem, est laborum iusto odio ipsa facilis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit eos maiores fuga, unde alias. </p>,
            date: "November 22 2020",
            category: "Interior",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
            id: useId()
        },
        {
            title: "Top 5 indoor plants for beginners",
            previewDesc: "Start your indoor garden with these easy-to-care-for houseplants, perfect for beginners. Our top five picks thrive in various conditions and require minimal maintenance, making them ideal for new plant parents. Bring fresh greenery and life into your home, enjoy cleaner air, and create a more vibrant living space with these beautiful, low-maintenance plants.",
            desc: <p>Not all indoor plants require expert care. Our top five picks thrive in various conditions and need little maintenance, making them ideal for new plant parents.<br />Enjoy the benefits of cleaner air and a more vibrant living space. These plants are a great way to add natural beauty and a calming touch to any room.</p>,
            date: "August 18 2021",
            category: "Design",
            img_src: "https://elevatehomedecor.com/wp-content/smush-webp/2024/08/green-leafed-plant-3094211-1536x1024.jpg.webp",
            id: useId()
        }
    ]);

    // CATEGORY
    const [category, SetCategory] = useState([
        { name: "Crafts" },
        { name: "Design" },
        { name: "Handmade" },
        { name: "Interior" },
        { name: "Wood" }
    ]);

    const value = { blog,category };
    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}