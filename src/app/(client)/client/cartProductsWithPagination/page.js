'use client';
import React from "react";
import CartProductItem from '@/components/client/shoppingCart/cartProductItem';
import {fetchArticlesPaginationFilter} from "@/services/ArticleService";
import TablePagination from '@mui/material/TablePagination';

async function getProducts(page,rowsPerPage,searchTerm){
    page++
    const data=await fetchArticlesPaginationFilter(page,rowsPerPage,searchTerm)
    return data;
}

const CartProductsWithPaginationPage= ()=> {

    const [products,setProducts]=React.useState([])

  //les paramètres de la pagination
  const [tot,setTot]=React.useState(0)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //le mot cherché
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
       };

    React.useEffect(() => {
        getProducts(page,rowsPerPage,searchTerm)
        .then((res) => {
            setTot(res.tot);
            setProducts(res.articles);
        });
      },[page,rowsPerPage,searchTerm]);

    return ( 
      <>
       Recherche par désignation :
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
     <div className="row">
            {products && products?.map((product) => (
              
              <CartProductItem key={product?._id} product={product} />
             
            ))}
      </div>
     <div style={{ "display": "flex", "justifyContent": "center"}}> 
     
     <TablePagination
      component="div"
      count={tot}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

     </div>    
     </>

    )
}

export default CartProductsWithPaginationPage;
