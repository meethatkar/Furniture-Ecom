import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Home, About, Account, Cart, Contact, Like, Shop, Blog } from './Pages/index.js';
import BlogPreview from './components/Blog/BlogPreview.jsx'
import BlogCategory from './components/Blog/BlogCategory.jsx'
import AllBlog from './components/Blog/AllBlog.jsx'
import SearchBlog from './components/Blog/SearchBlog.jsx'
import SingleBlog from './components/Blog/SingleBlog.jsx'

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
        path: "/like",
        element: <Like />
      },
      {
        path: "/shop",
        element: <Shop />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
