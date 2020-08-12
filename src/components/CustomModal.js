import React,{useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {getProductById} from './../utils/endpoints';
import PaymentTable from './../components/PaymentTable';

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomModal({openModalState, handleCloseModal, history, cartLengthState}) {
  const [cartListState, setCartList] = useState([]);
  const [totalPriceState, setTotalPrice] = useState(0);

  useEffect(() => {
    const pc = JSON.parse(window.localStorage.getItem("productsCart"));
    const productsCart = pc ? pc:[]
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
  },[cartLengthState])

  const handleBuyClick = () => {
    history.push('/payment')
  };

  return (
    <Dialog
      open={openModalState}
      onClose={handleCloseModal}
    >
      <DialogContent>
        <PaymentTable/>
        <Button
          color="primary"
          onClick={handleBuyClick}
        >
          Buy Now
        </Button>
      </DialogContent>
    </Dialog>
  )
}