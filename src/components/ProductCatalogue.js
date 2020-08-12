import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function ProductCatalogue({productListState, history}) {
  
  const handleProductClick = (productId, categoryId) => {
    history.push(`/products/category/${categoryId}/product/${productId}`)
  }
  return (
    <Box 
      justifyContent="flex-start" 
      flexWrap="wrap" 
      display="flex"
      flexDirection="row"
      bgcolor="background.paper"
    >
    
    {productListState ? productListState.map((result, index) => (
      <Box p={5} key={index}>
        <img src={result.image}/>
        <p>{result.name}</p>
        <p>{result.price}</p>
        <Button
          onClick={handleProductClick.bind(this, result.id, result.category_id)}
        >
          View
        </Button>
      </Box>
    )) : null}
  </Box>
  )
}