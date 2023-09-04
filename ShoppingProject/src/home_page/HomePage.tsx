import { Container, Grid, Paper, SelectChangeEvent } from "@mui/material";
import AppBarComponent from "./components/AppBarComponent";
import MenuData from "../data/MenuData";
import MyCard from "./components/MyCard";
import { createContext, useState } from "react";

export const DataContext = createContext<any>("");

const HomePage = () => {
  const [foods, setFoods] = useState(MenuData);
  const [word, setWord] = useState<string>("");
  const [dataFilter] = useState<any[]>(["foodName"]);
  const [cart, setCart] = useState<any[]>([]);

  const handleSelectMenu = (e: SelectChangeEvent) => {
    console.log(e.target.value);
    const menu = e.target.value;
    if (menu === "รายการอาหารทั้งหมด" ) {
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
              item[filter]
                .toString()
                .toLowerCase()
                .indexOf(word.toLowerCase()) > -1
            );
          }
        });
      });
  };

  const handleAddToCart = (id: string) => {
    const newItem = foods.find((item) => item.id === id);
    console.log(newItem);
    setCart([...cart, newItem]);
  };

  return (
    <>
      <DataContext.Provider value={{ cart, setCart }}>
        <AppBarComponent
          onChange={handleSelectMenu}
          word={word}
          setWord={setWord}
        />
        <Container maxWidth="lg" component={Paper} sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent={"center"}>
            {searchMenu(foods).map((item: any, index: any) => {
              return (
                <MyCard
                  key={index}
                  {...item}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </Grid>
        </Container>
      </DataContext.Provider>
    </>
  );
};

export default HomePage;
