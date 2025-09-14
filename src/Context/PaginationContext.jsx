import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const usePagination = () =>{
    return useContext(PaginationContext);
}

export const PaginationProvider = ({children}) => {
    const [perPage, setPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

  // Page count in PaginationBar only
  const [pageCount, setPageCount] = useState(0);
   const offset = currentPage * perPage;

  // getting products for that page, using slice.
  const [currentProducts, setCurrentProducts] = useState([]);

  const value ={
                currentPage,                //tells the current page user is on.
                setCurrentPage,             //use to change current page
                perPage,                //products to be dispaly per page
                setPerPage,                    //changed when users selects from dropdown.
                offset,
                pageCount,
                setPageCount,
                currentProducts,
                setCurrentProducts
            }

    return (
        <PaginationContext.Provider value={value} >
            {children}
        </ PaginationContext.Provider>
    );
}

export default PaginationContext;