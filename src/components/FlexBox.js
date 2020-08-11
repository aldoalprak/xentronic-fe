import React from 'react';

export default function FlexBox({productListState}) {
  return (
    <Box 
      justifyContent="flex-start" 
      flexWrap="wrap" 
      display="flex"
      flexDirection="row"
      bgcolor="background.paper"
    >
    {productListState ? productListState.map(result => (
      <Box p={5}>
        <img src={result.image}/>
        <p>{result.name}</p>
        <p>{result.price}</p>
      </Box>
    )) : null}
  </Box>
  )
}