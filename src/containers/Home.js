import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../components/Navbar';
import ProductCatalogue from './../components/ProductCatalogue';
import {getAllProducts, getProductsByQuery} from './../utils/endpoints';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home({history}) {
  const classes = useStyles();
  const [productListState, setProductList] = useState([]);

  useEffect(() => {
    const getAll = async() => {
      const result = await getAllProducts()
      setProductList(result)
    };

    getAll();
  },[]);

  return (
    <div className={classes.root}>
      <Navbar
        history={history}
      />
      <ProductCatalogue
        history={history}
        productListState={productListState}
      />
    </div>
  );
}