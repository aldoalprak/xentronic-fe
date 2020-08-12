import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getProductById} from './../utils/endpoints';
import {rupiah} from './../utils/helper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PaymentTable() {
  const classes = useStyles();

  const [cartListState, setCartList] = useState([]);
  const [totalPriceState, setTotalPrice] = useState(0);

  useEffect(() => {
    const productsCart = JSON.parse(window.localStorage.getItem("productsCart"));
    let productCartList = [];
    let totalPrice = 0;

    const getCart = async() => {
      for(let i = 0;i<productsCart.length;i++) {
        const product_id = productsCart[i].product_id;
        const qtyBuy = productsCart[i].qtyBuy
        const productInfo = await getProductById(product_id);
        console.log(productInfo)
        totalPrice += productInfo.price * qtyBuy;
        productCartList.push({
          name: productInfo.name, 
          qtyBuy,
          unitPrice: productInfo.price, 
          accPrice: productInfo.price * qtyBuy
        })
      }
      console.log(productCartList)
      setCartList(productCartList)
      setTotalPrice(totalPrice)
    }

    getCart();
  },[]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Accumulation Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartListState.map((pl, index) => (
            <TableRow key={index}>
              <TableCell align="right">{pl.name}</TableCell>
              <TableCell align="right">{pl.qtyBuy}</TableCell>
              <TableCell align="right">{rupiah(pl.unitPrice)}</TableCell>
              <TableCell align="right">{rupiah(pl.accPrice)}</TableCell>
            </TableRow>
          ))}
            <TableCell align="left">Total</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{rupiah(totalPriceState)}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
