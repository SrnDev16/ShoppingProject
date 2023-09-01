import { Container, Grid, Paper, SelectChangeEvent } from "@mui/material";
import AppBarComponent from "./components/AppBarComponent";
import MenuData from "../data/MenuData";
import MyCard from "./components/MyCard";
import { useState } from "react";

const HomePage = () => {
  const [foods, setFoods] = useState(MenuData);
  const [word, setWord] = useState<string>("");
  const [dataFilter] = useState<any[]>(["foodName"]);

  const handleSelectMenu = (e: SelectChangeEvent) => {
    console.log(e.target.value);
    const menu = e.target.value;
    if (menu === "รายการอาหารทั้งหมด") {
      setFoods(MenuData);
    } else {
      const newList = MenuData.filter((item) => {
        return item.menu === menu;
      });
      setFoods(newList);
    }
  };

  const searchMenu = (data: any) => {
    return data.filter((item: any) => {
      return dataFilter.some((filter) => {
        if (item[filter]) {
          return (
            item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
            -1
          );
        }
      });
    });
  };
  return (
    <>
      <AppBarComponent
        onChange={handleSelectMenu}
        word={word}
        setWord={setWord}
      />
      <Container maxWidth="lg" component={Paper} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {searchMenu(foods).map((item: any, index: any) => {
            return <MyCard key={index} {...item} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
