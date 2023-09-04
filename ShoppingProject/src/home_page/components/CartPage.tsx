import { Modal, Box, Typography, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../HomePage";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

const CartPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cart, setCart } = useContext(DataContext);

  const increaseQuantity = (id: string, index: string) => {
    const menu = cart.find((item: any) => {
      return item.id === id;
    });
    menu.quantity += 1;
    const mewCart = cart.splice(index, 1, menu);
    setCart(mewCart);
    console.log(menu);
  };

  const decreaseQuantity = (id: string,index:string) => {
    const menu = cart.find((item: any) => {
      return item.id === id;
    });
    menu.quantity -= 1;
    const newCart = cart.splice(index, 1 , menu)
    setCart(newCart);
    if (menu["quantity"] < 1) {
      removeItem(id);
    }
    console.log(menu);
  };

  const removeItem = (id: string) => {
    const menu = cart.find((item: any) => item.id === id);
    menu.quantity = 1;
    const newCart = cart.filter((item: any) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  return (
    <>
      <IconButton sx={{ color: "white" }} onClick={handleOpen}>
        <ShoppingCartIcon />
        {cart.length !== 0 && <p className="number-cart">{cart.length}</p>}
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            รายการอาหาร
          </Typography>
          <Box>
            {cart.length === 0 && <p>ไม่มีรายการอาหาร</p>}
            {cart.map((item: any, index: any) => {
              return (
                <Box key={index} className="list-cart">
                  <img src={item.image_url} alt="image" />
                  <p>{item.foodName}</p>
                  <div className="list-cart quantity">
                    <IconButton
                      onClick={() => {
                        decreaseQuantity(item.id,index);
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <p className="quantity">{item.quantity}</p>
                    <IconButton
                      onClick={() => {
                        increaseQuantity(item.id, index);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                  <p>ราคา {item.quantity * item.price} บาท</p>
                  <IconButton onClick={() => removeItem(item.id)}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default CartPage;
