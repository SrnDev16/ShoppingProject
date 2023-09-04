import { Box, Button, Grid } from "@mui/material";

type myCardProps = {
  foodName: string;
  image_url: string;
  price: number;
  id: string;
  handleAddToCart: any;
};
const MyCard = ({
  foodName,
  image_url,
  price,
  id,
  handleAddToCart,
}: myCardProps) => {
  return (
    <Grid item lg={3} md={4} sm={6}>
      <Box className="my-card" sx={{ boxShadow: 1 }}>
        <img src={image_url} alt={image_url} />
        <h3>{foodName}</h3>
        <p>ราคา : {price} บาท</p>
        <br />
        <Button
          variant="outlined"
          onClick={() => {
            handleAddToCart(id);
          }}
          sx={{ fontFamily: "Mali" }}
        >
          เพิ่มสินค้า
        </Button>
      </Box>
    </Grid>
  );
};

export default MyCard;
