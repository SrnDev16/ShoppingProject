import { Container, Grid, Paper, SelectChangeEvent } from "@mui/material";
import AppBarComponent from "./components/AppBarComponent";
import MenuData from "../data/MenuData";
import MyCard from "./components/MyCard";
import { useState } from "react";

const HomePage = () => {
  const [foods, setFoods] = useState(MenuData);

  const handleSelectMenu = (e:SelectChangeEvent) => {
    console.log(e.target.value);
    const menu = e.target.value;
    if(menu === "รายการอาหารทั้งหมด"){
        setFoods(MenuData)
    }else{
        const newList = MenuData.filter((item)=>{
            return item.menu === menu
        })
        setFoods(newList);
    }
  };
  return (
    <>
      <AppBarComponent onChange={handleSelectMenu}/>
      <Container maxWidth="lg" component={Paper} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {foods.map((item , index) => {
            return <MyCard key={index} {...item} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
