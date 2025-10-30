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
            title: "Modern minimalist lamp design",
            previewDesc: "Explore our new minimalist lamp collection, designed to bring simple elegance and modern style to any home. Each lamp is thoughtfully crafted with clean lines and a focus on functionality, making them perfect for those who appreciate understated beauty. Illuminate your living spaces with soft, ambient lighting that enhances comfort and complements any decor, while enjoying the timeless appeal of minimalist design.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Our latest minimalist lamp collection embodies the essence of modern design: clean lines, understated elegance, and exceptional functionality. Each lamp is a testament to thoughtful craftsmanship, meticulously designed to complement any contemporary decor without overwhelming it. We believe that true beauty lies in simplicity, and our lamps reflect this philosophy, offering a sophisticated aesthetic that enhances your living space with a serene and uncluttered feel. The subtle yet impactful presence of these pieces ensures they integrate seamlessly into various interior styles, from industrial chic to Scandinavian calm, proving that less truly can be more when it comes to impactful design.<br /><br />
                    Beyond their striking visual appeal, these lamps are engineered to provide soft, ambient lighting that transforms your home into a haven of comfort. The carefully selected materials and precise construction diffuse light in a way that creates a warm, inviting atmosphere, perfect for relaxing after a long day or hosting intimate gatherings. The focus on functionality means that each lamp is not just a decorative object, but a practical source of illumination that enriches your daily life. They are designed to be both a focal point and a subtle backdrop, adapting to your needs and enhancing the overall mood of your rooms with their gentle glow. Our commitment to quality ensures that these lamps are not only beautiful but also durable, promising years of reliable performance and enduring style.<br /><br />
                    Discover how effortlessly these minimalist lamps can elevate your rooms, creating an inviting environment for every occasion. Their timeless appeal ensures they remain a cherished staple in your home, adding elegance and sophistication that transcends fleeting trends. By choosing a piece from this collection, you're investing in more than just a lamp; you're embracing a lifestyle of refined simplicity and enduring beauty. Let our minimalist designs illuminate your world, bringing a sense of calm and modern sophistication to every corner of your home, and transforming ordinary spaces into extraordinary experiences through the power of light and form.
                </p>
            ),
            date: "December 5 2020",
            category: "Crafts",
            img_src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/3/floor-lamp_0_1200.jpg.webp",
            id: useId()
        },
        {
            title: "Eco-friendly bamboo chairs",
            previewDesc: "Upgrade your home with our sustainable bamboo chairs, combining eco-friendly materials and modern design. These chairs are crafted from 100% natural bamboo, offering both durability and a unique aesthetic. Enjoy comfort and style while making a positive impact on the environment, and create a welcoming, eco-conscious space that reflects your commitment to green living and responsible choices.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Embrace sustainable living without compromising on style with our exquisite collection of eco-friendly bamboo chairs. Each chair is a testament to responsible craftsmanship, made from 100% natural bamboo—a rapidly renewable resource that significantly reduces your environmental footprint. These chairs offer a unique blend of durability and a distinctive aesthetic, bringing the calming, organic beauty of nature directly into your home. The natural variations in the bamboo grain ensure that every piece is one-of-a-kind, adding character and warmth to any interior setting, from sun-drenched conservatories to minimalist living rooms.<br /><br />
                    Beyond their ecological benefits, our bamboo chairs are designed for optimal comfort and versatility. They are surprisingly lightweight, making them easy to move and rearrange, yet incredibly sturdy, built to withstand daily use. Perfect for both dining areas and casual lounging spaces, these chairs effortlessly combine practicality with a chic, modern design. By choosing bamboo, you're not just selecting a piece of furniture; you're making a conscious decision to support green practices and contribute to a healthier planet. This thoughtful choice allows you to enjoy comfort and sophistication while actively participating in a more sustainable lifestyle. The smooth, natural finish of the bamboo is also easy to clean and maintain, ensuring your chairs remain beautiful for years to come.<br /><br />
                    Experience the harmonious blend of sustainability and cutting-edge design. Our bamboo chairs are ideal for those who value both aesthetic appeal and ecological responsibility, enabling you to create a welcoming, eco-conscious space that truly reflects your commitment to thoughtful living. Elevate your home with furniture that tells a story of natural beauty, responsible sourcing, and enduring elegance, inviting you to relax in style and peace of mind. These chairs are more than just seating; they are an invitation to live more harmoniously with the environment, enhancing your home with their gentle presence and timeless charm.
                </p>
            ),
            date: "January 10 2021",
            category: "Wood",
            img_src: "https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/blog-5-1000x510.jpg",
            id: useId()
        },
        {
            title: "Vintage rug collection launch",
            previewDesc: "Discover our exclusive vintage rug collection, featuring timeless designs and rich textures that add warmth and character to your home. Each rug is carefully selected for its quality and story, with intricate patterns and vibrant colors that bring a sense of history and charm to any room. Transform your living space with these unique, limited-edition pieces that celebrate tradition and elegance.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Step into a world of timeless elegance with our exclusive vintage rug collection. Each rug is a meticulously curated piece, hand-selected for its exceptional quality, rich history, and unique narrative. These aren't just floor coverings; they are tangible fragments of the past, woven with intricate patterns and imbued with vibrant, often naturally derived, colors that tell stories from distant lands and bygone eras. Their presence instantly injects warmth, character, and an unparalleled sense of history into any room, transforming an ordinary space into a captivating sanctuary. From ornate Persian designs to geometric Turkish motifs, the diversity of our collection ensures there's a perfect vintage rug to complement every aesthetic and personal taste, making each selection a discovery.<br /><br />
                    The magic of vintage rugs lies in their ability to bridge the gap between old and new, creating a harmonious dialogue within your decor. The rich textures, often softened by time, add a tactile dimension that invites touch and contemplation. They provide a grounding element in modern interiors, offering a beautiful contrast to sleek lines and contemporary furniture. Whether you choose a faded pastel piece to evoke a shabby chic vibe or a bold, jewel-toned rug to make a dramatic statement, these pieces are versatile enough to adapt to various design schemes. Beyond their aesthetic appeal, vintage rugs are also a sustainable choice, embodying the principle of reuse and reducing demand for new manufacturing. They are investments that appreciate in value, both monetarily and sentimentally, becoming cherished heirlooms that can be passed down through generations.<br /><br />
                    Transform your living space with these unique, limited-edition pieces that celebrate tradition, artistry, and enduring elegance. Our vintage rug collection is an invitation to infuse your home with soul and personality, creating an atmosphere that is both sophisticated and deeply inviting. Each rug has endured the test of time, bearing subtle imperfections that only enhance its beauty and authenticity. Discover the perfect vintage treasure that resonates with your spirit, offering not just a decorative element, but a rich tapestry of history, craftsmanship, and timeless charm that will captivate for years to come.
                </p>
            ),
            date: "February 2 2021",
            category: "Interior",
            img_src: "https://www.homesindiamagazine.com/uploaded_images/newstransfer/ze77Hexagone%20Classic%20Vert%20Rug%20(1).jpg",
            id: useId()
        },
        {
            title: "Lighting tips for cozy evenings",
            previewDesc: "Create a warm, inviting atmosphere in your home with our expert lighting tips. Learn how to layer different light sources, such as floor lamps, table lamps, and candles, to set the perfect mood for relaxing evenings. Discover how adjusting brightness and color temperature can transform any room into a peaceful retreat where you can unwind after a long day.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Lighting plays a pivotal role in transforming a house into a home, especially as evening approaches. To craft a truly cozy and comfortable atmosphere, it’s essential to think beyond a single overhead light source. Start by layering different types of illumination: ambient, accent, and task lighting. Ambient light, often from ceiling fixtures or soft floor lamps, provides overall brightness, setting a foundational glow for your space.<br /><br />
                    Once your ambient layer is established, introduce accent lighting to highlight specific features or architectural details. This could be achieved with spotlights on artwork, or dimmable strip lights under shelves. Task lighting, such as table lamps beside your sofa or a reading nook, provides focused light for activities like reading or knitting, preventing eye strain and adding functional charm. For ultimate coziness, integrate candles or a fireplace for a flickering, warm glow that instantly calms the senses and promotes relaxation. These smaller, softer sources create pockets of intimacy within a larger room.<br /><br />
                    Experiment with the brightness and color temperature of your lights to further enhance the mood. Warmer, softer lights (lower Kelvin temperatures) evoke a sense of comfort and tranquility, ideal for unwinding. Incorporate smart bulbs and dimmers to easily adjust the intensity and hue, allowing you to seamlessly transition your room's ambiance from a bright, energetic daytime feel to a serene, intimate evening retreat. Thoughtful lighting choices are transformative, bringing both beauty and profound comfort to your everyday life.
                </p>
            ),
            date: "July 3 2021",
            category: "Interior",
            img_src: "https://www.sunmory.com/cdn/shop/articles/Interior-of-living-room-with-sofa-floor-lamp-and-glowing-lamps-in-evening.webp?v=1727075986&width=1400",
            id: useId()
        },
        {
            title: "How to style open shelves",
            previewDesc: "Get expert tips on styling open shelves to maximize both storage and visual appeal in your home. Learn how to create a balanced, beautiful display by arranging books, plants, and decorative items in creative ways. Discover how mixing textures, colors, and heights can transform your shelves into a stunning focal point, making your space both practical and stylish.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Open shelves offer a dynamic and versatile opportunity to blend storage with aesthetic appeal, transforming everyday necessities into curated displays. To maximize both functionality and visual harmony, begin by decluttering and selecting items with purpose. Arrange books by color or size, intersperse them with small plants like succulents or trailing ivy, and add decorative objects such as unique ceramics, framed photos, or sculptural elements. The key is to create a sense of balance and flow, ensuring that no single shelf or section feels too heavy or sparse. Think about the negative space around your items—it’s just as important as the items themselves in achieving an uncluttered look.<br /><br />
                    The art of styling open shelves truly comes alive when you mix textures, colors, and heights. Introduce a variety of materials like wood, metal, glass, and woven baskets to add depth and interest. A consistent color palette across a few key items can tie the entire display together, even with diverse objects. Varying the height of your items prevents monotony; combine tall vases with shorter stacks of books or small trinkets. Remember the rule of odd numbers—groups of three or five objects often appear more aesthetically pleasing than even groupings. Step back frequently to assess the overall composition, adjusting as needed until it feels right. This iterative process allows you to refine your display and uncover unexpected harmonies.<br /><br />
                    With the right approach, open shelving transcends mere storage to become a stunning focal point in any room. It’s an opportunity to showcase your personality and passions, making your space feel uniquely yours. Whether in a kitchen, living room, or home office, well-styled open shelves can elevate the entire ambiance, adding character, warmth, and a touch of curated sophistication. They invite the eye to linger, offering glimpses into your interests and creating a sense of lived-in beauty that is both practical and stylish.
                </p>
            ),
            date: "March 15 2021",
            category: "Handmade",
            img_src: "https://www.thespruce.com/thmb/cCdvwXUgnnIRHoV0nfOYf26rx1w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beautiful-living-rooms-with-built-in-shelving-4122539-hero-2a0ac4d1d64a4561a22c926d9ba0b0ed.jpg",
            id: useId()
        },
        {
            title: "Choosing the right sofa fabric",
            previewDesc: "Find the perfect fabric for your new sofa with our comprehensive guide. We help you balance comfort, durability, and style to suit your lifestyle and home decor needs. From luxurious velvet to practical linen, learn about the unique benefits of each material and discover tips for selecting a fabric that will keep your sofa looking and feeling great for years to come.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Selecting the ideal fabric for your new sofa is a crucial decision that impacts not only its aesthetic appeal but also its comfort, durability, and how well it integrates into your daily life. Our comprehensive guide is designed to navigate you through the myriad of options, helping you strike the perfect balance between luxurious feel and practical resilience. Consider your household's needs: do you have pets or children? Is the sofa destined for a high-traffic area, or is it a serene spot for quiet relaxation? These factors will heavily influence whether a hard-wearing synthetic, a plush velvet, or a breathable linen is the best fit for your unique requirements, ensuring your investment stands the test of time and style.<br /><br />
                    Each fabric type boasts its own distinct characteristics. Velvets offer a touch of opulence and softness, ideal for creating a cozy, high-end feel, though they might require more diligent care. Linens provide a natural, airy texture perfect for a relaxed, casual ambiance, often aging beautifully over time. Synthetics like polyester or microfiber are renowned for their durability and stain resistance, making them excellent choices for busy homes. Beyond the material, delve into color and pattern. A neutral tone offers versatility and longevity, while a bold pattern can infuse personality and act as a statement piece. Don’t forget the hand-feel; a fabric might look stunning, but if it doesn't feel right, it won't contribute to the comfort you desire. Ordering swatches to see how they look in your home's lighting and feel under your touch is an invaluable step in this process.<br /><br />
                    Making an informed decision on your sofa fabric ensures enduring satisfaction. The right choice guarantees that your sofa remains a comfortable, stylish, and resilient centerpiece for years, gracefully accommodating both everyday lounging and special gatherings. It's an opportunity to enhance your home's overall design narrative, contributing to an atmosphere that is both inviting and reflective of your personal taste. With our guidance, you can confidently select a fabric that not only looks magnificent but also perfectly supports your lifestyle, creating a cherished spot for relaxation and connection with family and friends.
                </p>
            ),
            date: "April 8 2021",
            category: "Design",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
            id: useId()
        },
        {
            title: "Small space, big impact: Decor ideas",
            previewDesc: "Transform your small space with creative decor ideas that maximize both style and functionality. Discover how to make every inch count with smart solutions, such as using mirrors, light colors, and multi-functional furniture. Our inspiring tips and clever storage hacks will help you create a stylish, comfortable home that feels open and inviting, no matter its size.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Transforming a small space into a functional, stylish, and inviting home requires creativity and strategic planning. The key is to maximize every inch, making it feel open and expansive rather than cramped. Start with a foundation of light colors on walls, furniture, and textiles; these hues reflect light, visually pushing back boundaries and creating a sense of airiness. Incorporate mirrors strategically, perhaps a large one opposite a window, to multiply light and create the illusion of greater depth and space. Think vertically: tall, narrow bookshelves or wall-mounted storage units draw the eye upward, making ceilings appear higher and offering ample storage without consuming precious floor space. Every decor decision should aim to serve dual purposes, enhancing both aesthetics and utility.<br /><br />
                    Multi-functional furniture is your best friend in a compact living environment. Consider a storage ottoman that doubles as a coffee table and extra seating, or a sofa bed that serves as both a lounging spot and guest accommodation. When it comes to layouts, resist the urge to push all furniture against the walls; sometimes floating pieces can create more open pathways and make the room feel larger. Clever storage hacks are essential for keeping clutter at bay, which is paramount in small spaces. Utilize under-bed storage, use decorative boxes and bins, and install hidden compartments wherever possible. Each item should earn its place, contributing to the room's function or beauty. Remember that negative space is just as important as filled space—avoid over-furnishing, as this will quickly make any room feel smaller and more chaotic.<br /><br />
                    Add personality and charm with decorative accents that don’t overwhelm the room. Opt for fewer, larger statement pieces rather than many small ones, which can create visual clutter. Small plants, carefully chosen artwork, or a single sculptural object can add character without taking up much space. Our inspiring tips and clever solutions are designed to help you create a stylish, comfortable home that feels open and inviting, regardless of its dimensions. Embrace the challenge of a small footprint and discover how intelligent design can lead to big impact, making your compact dwelling a sanctuary of personalized style and effortless functionality.
                </p>
            ),
            date: "May 20 2021",
            category: "Design",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-5-740x415.jpg",
            id: useId()
        },
        {
            title: "The art of mixing patterns",
            previewDesc: "Master the art of mixing patterns in your home decor for a bold, cohesive look. Learn simple rules to combine colors, textures, and prints with confidence, starting with a consistent color palette and varying the scale of your prints. Our guide will help you experiment with different motifs and textures, making it easy to create a harmonious, eye-catching space that reflects your personality.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Mastering the art of mixing patterns in your home decor can elevate your interiors from simply decorated to dynamically designed, creating a bold, cohesive, and deeply personal look. The trick is to approach it with a strategy, rather than randomly throwing patterns together. Begin by establishing a consistent color palette. Choose two to three main colors that resonate with you and your space, and ensure all your chosen patterns incorporate at least one or two of these hues. This underlying color harmony will act as the anchor, allowing diverse patterns to coexist without clashing, creating a sense of intentionality and sophisticated ease within the room.<br /><br />
                    Once your color scheme is set, focus on varying the scale of your prints. Combine a large-scale pattern (like a bold floral on curtains) with a medium-scale pattern (perhaps a geometric on throw pillows) and a small-scale, subtle pattern (a delicate stripe on an accent rug). This layering of different scales creates visual interest and depth, preventing any single pattern from dominating or making the room feel too busy. Don’t shy away from mixing different types of motifs—florals, stripes, checks, geometrics, and even abstract designs can work beautifully together. The contrast in their forms adds energy and personality. Also, incorporate solid textures, such as a chunky knit throw or a smooth velvet cushion, to provide visual resting points and prevent the space from becoming overwhelming with patterns.<br /><br />
                    Our comprehensive guide simplifies these rules, making it easy for you to experiment with different motifs and textures with confidence. It’s an invitation to express your unique personality and create a harmonious, eye-catching space that feels uniquely yours. Remember to use patterns in varying quantities—a dominant pattern for impact, a secondary pattern to support it, and an accent pattern for a playful touch. With a few simple guidelines, you can confidently combine patterns for a bold, cohesive, and incredibly stylish look that stands out, reflects your individual taste, and transforms your home into a truly captivating environment. Let your creativity flow and watch your space come alive with character and charm.
                </p>
            ),
            date: "June 12 2021",
            category: "Crafts",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-3-740x415.jpg",
            id: useId()
        },
        {
            title: "Carefully handmade wooden tablesc",
            previewDesc: "Discover the artistry and dedication behind our carefully handmade wooden tables, each crafted with precision and passion by skilled artisans. These tables are not only functional pieces of furniture but also unique works of art that bring warmth and character to any space. Experience the beauty of natural wood grains, expert joinery, and timeless design that will elevate your home’s interior for years to come.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Our handmade wooden tables are a celebration of artistry and dedication, meticulously crafted with precision and passion by skilled artisans. Each table is more than just a piece of furniture; it’s a unique work of art, infused with the soul of its creator and designed to bring unparalleled warmth and character to any space. The natural wood grains are carefully selected and highlighted, showcasing their inherent beauty and distinct patterns, while expert joinery techniques ensure not only stunning aesthetics but also exceptional durability and structural integrity that will last for generations. These tables stand as a testament to the enduring appeal of traditional craftsmanship, blended seamlessly with modern sensibilities to create truly timeless pieces.<br /><br />
                    We believe in creating furniture that tells a story—a story of sustainable sourcing, meticulous handiwork, and an unwavering commitment to quality. The robust construction and thoughtful design of our wooden tables ensure they are not only functional but also serve as commanding statement pieces, anchoring your dining room, living area, or office with their elegant presence. Their inherent warmth and organic texture create an inviting atmosphere, fostering a sense of comfort and connection within your home. These tables effortlessly bridge the gap between rustic charm and contemporary sophistication, making them versatile additions to a wide range of interior design themes. Each cut, each joint, and each polish is executed with an eye for perfection, ensuring a flawless finish that enhances the natural allure of the wood.<br /><br />
                    Experience the lasting value and profound beauty of true craftsmanship. With proper care, these handmade wooden tables will not only elevate your home’s interior for years to come but will also become cherished heirlooms, providing a gathering place for family and friends, and a constant reminder of the artistry that enriches your daily life. They invite conversation, inspire creativity, and offer a solid, beautiful foundation for countless memories. Investing in one of our tables means investing in a piece of enduring quality, sustainable design, and a legacy of artisanal excellence that will grace your home with its presence for a lifetime.
                </p>
            ),
            date: "November 22 2020",
            category: "Interior",
            img_src: "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
            id: useId()
        },
        {
            title: "Top 5 indoor plants for beginners",
            previewDesc: "Start your indoor garden with these easy-to-care-for houseplants, perfect for beginners. Our top five picks thrive in various conditions and require minimal maintenance, making them ideal for new plant parents. Bring fresh greenery and life into your home, enjoy cleaner air, and create a more vibrant living space with these beautiful, low-maintenance plants.",
            desc: (
                <p className="text-[1.1vmax] text-black/50">
                    Embarking on your indoor gardening journey is exciting, and our curated list of top 5 indoor plants for beginners makes it accessible and enjoyable. These houseplants are specifically chosen for their resilience and low-maintenance needs, thriving in a variety of indoor conditions with minimal fuss. Perfect for new plant parents, they offer a forgiving introduction to the world of greenery, helping you build confidence in your plant care skills. Say goodbye to the intimidation of complex routines and hello to the simple pleasure of nurturing life within your home. Each plant on our list is a testament to natural beauty and adaptability, promising to flourish even with a less-than-green thumb.<br /><br />
                    Beyond their ease of care, these plants bring a host of benefits to your living space. They are natural air purifiers, working diligently to filter toxins and improve air quality, contributing to a healthier indoor environment. Their vibrant foliage adds fresh greenery and life, instantly brightening any room and creating a calming, serene atmosphere. Imagine a peaceful corner enhanced by the lush leaves of a Pothos, the elegant arch of a Snake Plant, or the cheerful presence of a Spider Plant. These resilient companions not only beautify your home but also foster a deeper connection to nature, promoting a sense of well-being and tranquility in your daily life. They are truly more than just decor; they are living elements that enhance your overall quality of life.<br /><br />
                    Cultivating a thriving indoor garden with these beginner-friendly plants is a rewarding experience that requires just a little attention. With minimal watering and occasional feeding, you can watch them grow and transform your space into a vibrant sanctuary. These plants are a wonderful way to add natural beauty and a soothing touch to any room, offering continuous joy and tranquility. From the subtle elegance of a ZZ Plant to the vibrant charm of a Peace Lily, each choice promises to be a delightful addition, making your home feel more alive, fresh, and inviting. Start your green journey today and discover the effortless beauty of indoor gardening with our expert recommendations.
                </p>
            ),
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