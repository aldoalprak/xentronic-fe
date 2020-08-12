import React, {useEffect, useState} from "react";
import {getProductsByQuery} from './../utils/endpoints';
import Navbar from './../components/Navbar';
import ProductCatalogue from './../components/ProductCatalogue';

export default function ProductsCategory({match, history}) {
  const [productListState, setProductList] = useState([]);

  useEffect(() => {
    const getProduct = async() => {
      const productList = await getProductsByQuery(match.params.categoryId);
      console.log(productList)
      setProductList(productList);
    }
    getProduct();
  }, [match.params.categoryId]);

  return (
    <>
      <Navbar
        history={history}
      />
      <ProductCatalogue
        productListState={productListState}
        history={history}
      />
    </>
  )
}