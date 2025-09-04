import { createContext, useContext, useId, useState } from "react";

const blogContext = createContext();

// custom hook.
const useBlog = () => {
    return useContext(blogContext);
}

// context Provider, with {children} arg
const blogContextProvider = ({ children }) => {
    // BLOG
    const [blog, setBlog] = useState([
        {
            title: "Carefully handmade wooden tablesc",
            previewDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non minus ullam minima magnam ducimus quas hic saepe praesentium mollitia numquam dolore, modi repellat nemo rem nesciunt deleniti, vel officia!",
            desc: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure sequi minima delectus amet blanditiis sit, quibusdam, reiciendis non eaque ab, excepturi cupiditate suscipit aut. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, excepturi. Cum, delectus corrupti, iste laboriosam hic nesciunt tenetur dicta esse quia sapiente illum voluptatem, est laborum iusto odio ipsa facilis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit eos maiores fuga, unde alias. </p>,
            date: "November 22 2020",
            category: "Interior",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
            id: useId()
        },
        {
            title: "Modern minimalist lamp design",
            previewDesc: "Explore our new minimalist lamp collection, designed to bring simple elegance and modern style to any home. Perfect for those who appreciate clean lines and functional beauty.",
            desc: <p>Our minimalist lamps are crafted to blend seamlessly with any decor, offering both style and practicality. Each lamp is made with attention to detail, ensuring a timeless look for your space.<br />Illuminate your home with soft, ambient lighting that enhances comfort and atmosphere. Discover how these lamps can transform your rooms and create a warm, inviting environment for every occasion.</p>,
            date: "December 5 2020",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Eco-friendly bamboo chairs",
            previewDesc: "Upgrade your home with our sustainable bamboo chairs, combining eco-friendly materials and modern design. Enjoy comfort and style while making a positive impact on the environment.",
            desc: <p>Our bamboo chairs are made from 100% natural bamboo, offering durability and a unique aesthetic. They are lightweight, sturdy, and perfect for any room in your home.<br />Experience the blend of sustainability and comfort without compromising on style. These chairs are ideal for those who value green living and want to create a welcoming, eco-conscious space.</p>,
            date: "January 10 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Vintage rug collection launch",
            previewDesc: "Discover our exclusive vintage rug collection, featuring timeless designs and rich textures. Add warmth and character to your home with these unique, limited-edition pieces.",
            desc: <p>Each vintage rug in our collection is carefully selected for its quality and story. The intricate patterns and vibrant colors bring a sense of history and charm to any room.<br />Transform your living space with a touch of tradition and elegance. These rugs are perfect for creating a cozy atmosphere and making a statement in your decor.</p>,
            date: "February 2 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "How to style open shelves",
            previewDesc: "Get expert tips on styling open shelves to maximize both storage and visual appeal. Learn how to create a balanced, beautiful display in any room of your home.",
            desc: <p>Open shelves offer a versatile way to showcase your favorite items while keeping essentials within reach. Arrange books, plants, and decor for a curated look that reflects your style.<br />Discover creative ideas for mixing textures, colors, and heights. With the right approach, open shelving can become a stunning focal point and a practical solution for any space.</p>,
            date: "March 15 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Choosing the right sofa fabric",
            previewDesc: "Find the perfect fabric for your new sofa with our comprehensive guide. Balance comfort, durability, and style to suit your lifestyle and home decor needs.",
            desc: <p>From luxurious velvet to practical linen, each sofa fabric offers unique benefits. Consider factors like maintenance, texture, and color to make the best choice for your space.<br />Our guide helps you navigate the options, ensuring your sofa remains comfortable and stylish for years. Make an informed decision and enjoy lasting satisfaction with your selection.</p>,
            date: "April 8 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Small space, big impact: Decor ideas",
            previewDesc: "Transform your small space with creative decor ideas that maximize style and functionality. Make every inch count with smart solutions and inspiring design tips.",
            desc: <p>Even the smallest rooms can feel open and inviting with the right approach. Use mirrors, light colors, and multi-functional furniture to enhance your space.<br />Discover clever storage hacks and decorative accents that add personality without clutter. Our tips help you create a stylish, comfortable home no matter the size.</p>,
            date: "May 20 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "The art of mixing patterns",
            previewDesc: "Master the art of mixing patterns in your home decor for a bold, cohesive look. Learn simple rules to combine colors, textures, and prints with confidence.",
            desc: <p>Mixing patterns can elevate your interiors, adding depth and interest to any room. Start with a consistent color palette and vary the scale of your prints for balance.<br />Experiment with different textures and motifs to express your personality. Our guide makes it easy to create a harmonious, eye-catching space that feels uniquely yours.</p>,
            date: "June 12 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Lighting tips for cozy evenings",
            previewDesc: "Create a warm, inviting atmosphere in your home with our expert lighting tips. Layer different light sources to set the perfect mood for relaxing evenings.",
            desc: <p>Lighting is key to making your home feel cozy and comfortable after dark. Use a mix of floor lamps, table lamps, and candles to add depth and warmth.<br />Adjust brightness and color temperature to suit your activities. With thoughtful lighting choices, you can transform any room into a peaceful retreat for unwinding at night.</p>,
            date: "July 3 2021",
            category: "",
            img_src: "",
            id: useId()
        },
        {
            title: "Top 5 indoor plants for beginners",
            previewDesc: "Start your indoor garden with these easy-to-care-for houseplants, perfect for beginners. Bring fresh greenery and life into your home with minimal effort.",
            desc: <p>Not all indoor plants require expert care. Our top five picks thrive in various conditions and need little maintenance, making them ideal for new plant parents.<br />Enjoy the benefits of cleaner air and a more vibrant living space. These plants are a great way to add natural beauty and a calming touch to any room.</p>,
            date: "August 18 2021",
            category: "",
            img_src: "",
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

    const value = blog;
    return (
        <blogContext.Provider value={value}>
            {children}
        </blogContext.Provider>
    )
}