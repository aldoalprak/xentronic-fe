import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../components/Navbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {getAllProducts, getProductsByCategory} from './../utils/endpoints'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [productListState, setProductList] = useState();

  useEffect(() => {
    const getAll = async() => {
      const result = await getAllProducts()
      setProductList(result)
    };

    getAll();
  },[]);

  const handleCategoryChange = async(value) => {
    const productList = await getProductsByCategory(value);
    console.log(productList)
    setProductList(productList);
  }

  return (
    <div className={classes.root}>
      <Navbar
        handleCategoryChange={handleCategoryChange}
      />
      <Box 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        display="flex"
        flexDirection="row"
        bgcolor="background.paper"
      >
        {productListState ? productListState.map((result, index) => (
          <Box key={index} p={5}>
            <img src={result.image}/>
            <p>{result.name}</p>
            <p>{result.price}</p>
            <Button color="primary">View</Button>
          </Box>
        )) : null}
      </Box>
    </div>
  );
}