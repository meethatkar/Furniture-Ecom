import React from 'react'
import { Link } from 'react-router'

const About = () => {

  const featuresData = [
    {
      img_url: "/feature_1.png",
      feature_heading: "Quality Craftsmanship",
      subHeading: "Handcrafted. Precise. Built to last.",
      feature_description: "Expert artisans create durable furniture with meticulous attention to detail, ensuring every piece is built to last for generations."
    },
    {
      img_url: "/feature_2.png",
      feature_heading: "Eco-Friendly",
      subHeading: "Sustainable materials. Greener living.",
      feature_description: "We use renewable, responsibly sourced materials and eco-conscious processes to create furniture that supports a cleaner, greener planet."
    },
    {
      img_url: "/feature_3.png",
      feature_heading: "Fast Delivery",
      subHeading: "Quick, safe, and on-time delivery.",
      feature_description: "Your furniture arrives swiftly, safely, and always on schedule, with careful packaging to ensure it reaches you in perfect condition."
    }
  ]

  const customer_reviews = [
    {
      customerName: "John Doe",
      review: "I’m absolutely impressed with the furniture quality—solid, stylish, and exactly as shown! The website made browsing effortless, and the booking process was super smooth. Delivery was on time, and overall the whole experience felt premium. Definitely ordering again!",
      ratings: 5,
      cssClass: "left-[5%]"
    },
    {
      customerName: "Emily Smith",
      review: "The eco-friendly materials really stood out to me. My new table looks amazing and I feel good knowing it’s sustainably made. Fast shipping and great customer service too! I was also impressed by the detailed product information on the website, which made it easy to choose the right piece for my home. The packaging was secure and everything arrived in perfect condition. I appreciate the company’s commitment to sustainability and will definitely recommend them to friends and family.",
      ratings: 5,
      cssClass: "left-[45%]"
    },
    {
      customerName: "Michael Lee",
      review: "I ordered a sofa and it exceeded my expectations. Super comfortable and the color is perfect. The delivery was quick and hassle-free. I’ll definitely shop here again! The assembly instructions were clear and easy to follow, and the sofa fits perfectly in my living room. Customer support was responsive when I had a question about care instructions. Overall, a fantastic experience from start to finish.",
      ratings: 3,
      cssClass: "left-[15%]"
    },
    {
      customerName: "Priya Patel",
      review: "Beautiful craftsmanship! The attention to detail is obvious. I had a question about care instructions and support responded right away. Very happy with my purchase! The materials feel premium and the finish is flawless. I also appreciated the regular updates on my order status, which kept me informed throughout the process. I’ve received many compliments from guests and will be purchasing more items soon.",
      ratings: 5,
      cssClass: "left-[60%]"
    },
    {
      customerName: "Carlos Rivera",
      review: "My bookshelf arrived in perfect condition and was easy to assemble. The design fits my space perfectly. Will recommend to friends and family for sure! The wood feels sturdy and the shelves hold a lot of weight without any issues. I was pleasantly surprised by the fast delivery and the care taken in packaging. The overall shopping experience was smooth and enjoyable.",
      ratings: 4,
      cssClass: "left-[5%]"
    },
    {
      customerName: "Sophie Müller",
      review: "I love my new dining set! It’s sturdy and stylish. The website was easy to navigate and checkout was a breeze. The whole process was seamless! The dining chairs are comfortable and the table is the perfect size for my apartment. I appreciated the eco-friendly packaging and the clear assembly instructions. I’ve already hosted a dinner party and received so many compliments on the set.",
      ratings: 5,
      cssClass: "left-[45%]"
    },
  ]

  const ecom_list = [
    {
      name: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x432.png"
    },
    {
      name: "Flipkart",
      logo: "https://brandeps.com/logo-download/F/Flipkart-logo-vector-01.svg"
    },
    {
      name: "Myntra",
      logo: "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo-768x432.png"
    },
    {
      name: "Snapdeal",
      logo: "https://www.logo.wine/a/logo/Snapdeal/Snapdeal-Logo.wine.svg"
    },
    {
      name: "eBay",
      logo: "https://www.pngarts.com/files/10/Ebay-Logo-Transparent-Image.png"
    },
    {
      name: "Alibaba",
      logo: "https://1000logos.net/wp-content/uploads/2018/10/Alibaba-Logo-768x432.png"
    },
    {
      name: "Shopify",
      logo: "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo-640x400.png"
    },
    {
      name: "Walmart",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo-768x432.png"
    },
    {
      name: "Target",
      logo: "/Target.webp"
    },
    {
      name: "Wish",
      logo: "https://images.seeklogo.com/logo-png/42/1/wish-logo-png_seeklogo-428990.png"
    }

  ]

  return (
    <div className='text-center px-[5vw] font-Inter border-t-2 border-t-gray-200 border-dotted flex flex-col'>
      {/* INTRO */}
      <div id="intro" className='h-screen flex flex-col justify-center items-center -mt-[3vw]'>
        <span className='mx-auto w-fit flex gap-[5%] items-center -translate-x-[5%]'>
          <img
            id="abt-img1"
            src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1.png"
            alt=""
            className="h-[15vmin] md:h-[20vmin] transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h1 id="head-stroke" className='text-[10vmax] md:text-[15vmax] tracking-widest border-b-5 border-b-yellow-500/30 border-dotted font-Asimovian leading-none '>
            <span className="text-yellow-500 hover:text-yellow-300 transition-all ease hover:cursor-pointer">K</span>
            <span className="text-yellow-500 hover:text-yellow-300 transition-all ease hover:cursor-pointer">O</span>
            <span className="text-yellow-500 hover:text-yellow-300 transition-all ease hover:cursor-pointer">S</span>
            <span className="text-yellow-500 hover:text-yellow-300 transition-all ease hover:cursor-pointer">I</span>
          </h1>
          <img
            id="abt-img2"
            src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1.png"
            alt=""
            className="h-[15vmin] md:h-[20vmin] transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </span>
        <p className='w-[85%] md:w-[55%] mx-auto text-lg md:text-xl font-Epunda-Slab text-gray-700'>
          We believe furniture should do more than fill a room—it should inspire the way you live. Our collection combines timeless craftsmanship with <span className='font-semibold text-yellow-500'> modern design </span>, offering pieces that are as durable as they are stylish. From cozy sofas to smart storage, every product is created with  comfort, <span className='font-semibold text-yellow-500'> quality,</span>and sustainability in mind. Whether you’re designing your first home or upgrading your favorite space, we make it simple to find <span className='font-semibold text-yellow-500'> furniture </span> that reflects your lifestyle. Delivered with care, our mission is to help you create a home you’ll love.
        </p>
      </div>
      {/* FEATURES */}
      <div id="features" className='mb-[13%]'>
        <h2 className='text-[4vmax] md:text-[3vmax] font-medium text-gray-800 mb-[1%]'> | What Makes Us Different | </h2>
        <div id="cards" className="w-full flex flex-col md:flex-row items-stretch justify-between gap-[5%] px-[5vw]">
          {featuresData.map((item, i) => (
            <div className="card w-full mb-[10%] md:mb-0 md:w-4/12 flex-1 rounded-xl group hover:bg-gray-100 hover:rotate-y-20 hover:rotate-x-10 hover:-rotate-z-1 transition-all ease overflow-hidden relative shadow-lg hover:shadow-2xl" key={i}>
              <img src={item.img_url} alt="" className='object-cover w-full h-full group-hover:opacity-0 transition-all ease duration-300' />
              <h4 id="feature-headings" className='absolute z-5 text-5xl font-semibold top-10/12 left-1/2 -translate-1/2 group-hover:opacity-0 transition-all ease duration-300 text-white'> {item.feature_heading} </h4>
              <p className="p-6 text-3xl font-semibold opacity-0 absolute top-1/2 -translate-y-1/2 inset-0 h-fit w-fit pointer-events-none group-hover:opacity-100 transition-all ease duration-300"> {item.subHeading}
                <p className='text-xl mt-[5%] font-normal text-gray-600'>
                  {item.feature_description}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* REVIEWS */}
      <div id="customer-reviews" className='py-[3%] md:min-h-screen w-screen relative'>
        <h2 className='text-3xl md:text-6xl -ml-5 md:ml-0 font-medium mb-[2%]'> | What Our Customers Say | </h2>
        {/* DESKTOP VIEW */}
        <div className='hidden md:block'>
          {
            customer_reviews.map((review, i) => (
              <div className={`review-cards p-6 border-2 h-fit hidden md:block w-3/12 relative shadow-md border-gray-500 ${review.cssClass} ${i % 2 == 0 ? "rounded-tr-2xl rounded-bl-2xl" : "rounded-tl-2xl rounded-br-2xl"}`}>
                <span className='text-xl font-semibold'> {review.customerName} </span>
                <div className="flex items-center mb-2 mx-auto w-fit">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-5 h-5 ${idx < review.ratings ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-500'> {review.review} </p>
              </div>
            ))
          }
        </div>
        {/* MOBILE VIEW */}
        <div className='mob-review flex md:hidden items-center gap-[10%] overflow-x-scroll w-[90%]'>
          {
            customer_reviews.map((cr, i)=>(
              <div className={`mt-[10%] mob-review-cards flex-shrink-0 w-10/12 border-[1px] px-3 py-1.5 ${cr.cssClass} ${i % 2 == 0 ? "rounded-tr-2xl rounded-bl-2xl" : "rounded-tl-2xl rounded-br-2xl"}`}>
                <span className='text-xl font-semibold'> {cr.customerName} </span>
                <div className="flex items-center mb-2 mx-auto w-fit">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-5 h-5 ${idx < cr.ratings ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-500'> {cr.review} </p>
              </div>
            ))
          }
        </div>
      </div>
      {/* ECOM LISTING */}
      <div id="ecom-listing" className="my-[20vmin] ">
        <h2 className="text-[3vmax] font-medium text-gray-800 mb-[3%] w-fit mx-auto border-b-4 leading-none"> | Also Available On |</h2>
        <div id="logo-wrapper" className='w-screen h-[16vh] flex relative items-center'>
          <div id="blur-1" className='w-5/12 h-full bg-gradient-to-r from-white/90 to-transparent absolute top-0 -left-[5%] translate-y-[10%] z-5'></div>
          <div id="blur-2" className='w-5/12 h-full bg-gradient-to-l from-white/90 to-transparent absolute top-0 right-[0%] translate-y-[10%] z-5'></div>
          <div className="main-slider w-full h-full flex items-center gap-[8%] -translate-x-[10%] shrink-0">
            {ecom_list.map((item, i) => (
              <div className="company-block md:w-2/12 h-full shrink-0">
                <img src={item.logo} alt="" className={`h-full w-full object-cover ${i === 0 ? "translate-y-[13%]" : ""}`} />
              </div>
            ))}
          </div>
          <div className="main-slider w-full h-full flex items-center gap-[8%] md:translate-x-[135%] translate-x-[460%] shrink-0">
            {ecom_list.map((item, i) => (
              <div className="company-block md:w-2/12 h-full shrink-0">
                <img src={item.logo} alt="" className={`h-full w-full object-cover ${i === 0 ? "translate-y-[20%]" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CONTACT US LINK */}
      <div id="closing" className='w-full md:w-screen flex flex-col md:flex-row items-center gap-6 md:gap-[10%] pr-0 md:pr-[10vw] mb-10 md:mb-[10vh]'>
        <div id="img-div" className='w-full md:flex-1 shrink-0 md:w-1/2 rounded-2xl overflow-hidden mb-4 md:mb-0'>
          <Link to="/Contact"> <img src="/doubts_ask.png" alt="" className='w-full object-cover' /> </Link>
        </div>
        <div id="text" className='w-full md:flex-1 shrink-0 md:w-1/2'>
          <Link to="/Contact"> <h2 className="text-lg md:text-[3vw] font-normal text-gray-800 mb-4 md:mb-[3%] w-fit mx-auto border-b-4 leading-none"> | We are Here too Help |</h2> </Link>
          <p className='text-sm md:text-[1.2vw] text-black/50'> Have questions about our products, orders, or services? Simply click the link below to reach our support team and get quick answers to all your queries. </p>
          <Link to="/Contact" className='underline text-base md:text-[1.5vw] text-blue-500 font-medium'> Ask Doubts Here </Link>
        </div>
      </div>
    </div>
  )
}

export default About