import React, {useEffect, useState} from 'react';
import Navbar from './../components/Navbar';
import {getProductById} from './../utils/endpoints';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Product({match, history}) {
  const [productInfoState, setProductInfo] = useState([]);
  const [quantityState, setQuantity] = useState(1);
  const [cartLengthState, setCartLength] = useState(0);
  useEffect(() => { 
    const getProduct = async () => {
      const productInfo = await getProductById(match.params.productId);
      setProductInfo(productInfo);
    };

    getProduct();
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = (productName) => {
    const currentCart = window.localStorage.getItem("productsCart");
    let products = [];
    if(currentCart) {
      products = JSON.parse(currentCart);
    };

    const newCart = {
      product_id: match.params.productId,
      qtyBuy: quantityState
    }
    
    let itemExist = false;
    for(let i =0;i<products.length;i++) {
      if(products[i].product_id === newCart.product_id) {
        itemExist = true
        products[i].qtyBuy = products[i].qtyBuy + quantityState
      }
    }

    if(!itemExist) {
      products.push(newCart);
    };

    window.localStorage.setItem("productsCart",JSON.stringify(products)) 
    setCartLength(products.length)
  };

  return (
    <>
      <Navbar
        history={history}
        cartLengthState={cartLengthState}
      />
      <img src={productInfoState.image}/>
      <p>Name: {productInfoState.name}</p>
      <p>Price: {productInfoState.price}</p>
      <p>Stock: {productInfoState.quantity}</p>
      <p>Description: {productInfoState.description}</p>
      <p>Qty:</p>
      <TextField
        onChange={handleQuantityChange}
        value={quantityState}
        type="number"
      />
      <Button
        onClick={() => {history.push('/payment')}}
      >
        Buy Now
      </Button>
      <Button
        color="primary"
        onClick={handleAddToCart.bind(this, productInfoState.name)}
      >
        Add to cart
      </Button>
    </>
  )
}