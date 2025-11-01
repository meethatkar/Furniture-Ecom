// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Home, About, Account, Cart, Contact, Like, Product, Blog } from './Pages/index.js';
import BlogCategory from './components/Blog/BlogCategory.jsx'
import AllBlog from './components/Blog/AllBlog.jsx'
import SearchBlog from './components/Blog/SearchBlog.jsx'
import SingleBlog from './components/Blog/SingleBlog.jsx'
import AllProducts from './components/Products/AllProducts.jsx'
import ViewSingleProduct from './Pages/ViewSingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
          {
            path: "",     //blank menas default child
            element: <AllBlog />
          },
          {
            path: ":category",
            element: <BlogCategory/>,
            // if user has filtered by category and then clicked on a blog,
            children:[
              {
                path: "blog-dets/:id",
                element: <SingleBlog />
              }
            ]
          },
          {
            path: "search",
            element: <SearchBlog />
          },
          // if user directly on main page clicked on blog
          {
            path: "blog-dets/:id",
            element: <SingleBlog />
          }
        ]
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/wishlist",
        element: <Like />
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: "",
            element: <AllProducts />    //this is default component
          },
        ]
      },
      {
        path:"/product/:slug",
        element: <ViewSingleProduct />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
